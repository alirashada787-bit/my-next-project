import { NextRequest, NextResponse } from "next/server";

export const proxy = (request:NextRequest) => {
console.log("proxy is running") ;

const jwtToken = request.cookies.get("jwtToken");

const token = jwtToken?.value as string ;

if(!token){
     return NextResponse.json({message:"No AuthToken Provided , Access Denied "},{ status:401 })} ;};

export const config = {
    matcher : [
        "/",
        "/about/:path*"
    ]
}