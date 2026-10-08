import { ILoginUserDto } from "@/utils/dto";
import { prisma } from "@/utils/lib/prisma";
import { NextResponse , NextRequest } from "next/server";

import z from "zod" ;

import bcrypt from 'bcrypt';

export const POST = async (request : NextRequest ) => {
  try{
    const body = ( await  request.json()) as ILoginUserDto ;

  const loginUserValidation = z.object({
    email : z.string().email().min(6).max(25) ,
    password : z.string().min(6),})

    const validation = loginUserValidation.safeParse(body) ;

    if (!validation.success){
        return NextResponse.json({message:validation.error.issues[0].message},{status:400}) ; }

const user = await prisma.user.findUnique({where : {email : body.email}}) ;

if(!user){
    return NextResponse.json({message:"please create an account first before login"},{status:400}) ; }

 const isPasswordMatch = await bcrypt.compare(body.password , user.password) ;

 if(!isPasswordMatch){
    return NextResponse.json({message:" Invalid Password Or Email"} , {status:400}) ; }
// token processing
const token = null ;

   return NextResponse.json({message:"Authenticated" , token } , {status:200}); 

 }catch(error){
    console.error(error) ;
    return NextResponse.json({message:"internal server error"} , {status:500}) ;}



}

