import { IRegisterUserDto } from "@/utils/dto";
import { prisma } from "@/utils/lib/prisma";
import { NextResponse , NextRequest } from "next/server";

import z from "zod" ;

import bcrypt from 'bcrypt';
import { generateToken } from "@/utils/generateToken";

export const POST = async ( request : NextRequest ,  ) => {
    try{
const body = (await request.json()) as IRegisterUserDto ;

 const createNewUserSchema = z.object({

username : z.string().min(5).max(25) ,

email : z.string().email().min(8).max(50) ,

password : z.string().min(10) 

 })

 const validation = createNewUserSchema.safeParse(body) ;

 if(!validation.success){
    return NextResponse.json({message : validation.error.issues[0].message},{status:400}) ;
 } ;

 const user = await prisma.user.findUnique({where : {email : body.email} })

 if (user){
    return NextResponse.json({message:"this user is already exist"} , {status : 400});}

    const salt = await bcrypt.genSalt(10) ;

    const hashedPassword = await bcrypt.hash(body.password , salt) ;

    const newUserData = await prisma.user.create({
        data : {
            username : body.username ,
            email : body.email ,
            password : hashedPassword },
        
        select : {
            id : true ,
            username : true ,
            email : true ,
            isAdmin : true } });

const userPayload = {
   id : newUserData.id ,
   username : newUserData.username ,
   isAdmin : newUserData.isAdmin 
}

const token = generateToken(userPayload)

            return NextResponse.json( {...newUserData , token } , {status : 201} ) ;

    }catch(error){
        console.error(error)
        return NextResponse.json({ message : " internal server error " } , { status : 500 } ) ;} ;} ;