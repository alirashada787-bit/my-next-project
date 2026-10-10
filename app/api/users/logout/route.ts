import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request : NextRequest) => {

try{

(await cookies()).delete("jwtToken") ;

return NextResponse.json({message:"User Logged Out Successfully..."}, {status:200});

}catch(error){
    console.error(error) ;
    return NextResponse.json({message:"internal server error"} , {status:500} ) ;
}

}