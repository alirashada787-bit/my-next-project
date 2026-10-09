import { prisma } from "@/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken" ;

export const DELETE = async (request : NextRequest , {params} : {params : Promise <{id:string}> } ) => {

try{
    const solvedParams = await params ;

const id = parseInt(solvedParams.id)

const user = await prisma.user.findUnique({where : {id : id}}) ;

if (!user){
    return NextResponse.json({message : "User Not Found"} , {status:404}) ; } ;

    const authToken = request.headers.get("authtoken") as string ; 


    const  userToken = jwt.verify(authToken,process.env.JWT_SECRET as string) as JwtPayload ;

    if(userToken.id === user.id){
        await prisma.user.delete({where:{id:id}}) ; 
        return NextResponse.json({message:"User Deleted successfully"},{status:200}) ; } ;

        return NextResponse.json({message:"You Are Not Authorized To Delete This User"} , {status:403} ) ;

}catch(error){
    console.error(error) ;
    return NextResponse.json({message:" Internal Server Error "},{ status:500 });} ;

}

