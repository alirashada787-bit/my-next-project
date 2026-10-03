
import { posts } from "@/utils/data";
import { IUpdatePostDTO } from "@/utils/dto";
import { NextRequest, NextResponse } from "next/server";

//Get Single Post

export const GET = async (request : NextRequest , {params} : { params : Promise<{id : string}> } ) => {

const resolvedParams = await params ;

const postId = parseInt (resolvedParams.id) ;

const post =  posts.find((p) => p.id === postId )

if(!post) {
    return NextResponse.json({massage : "Post Not Found"} , {status : 404}) ; }

 return NextResponse.json( post , { status : 200 }) ;   
}

//PUT Meth

export const PUT = async (request : NextRequest , {params} : { params : Promise<{id : string}> } ) => {

const resolvedParams = await params ;

const postId = parseInt (resolvedParams.id) ;

const post =  posts.find((p) => p.id === postId )

const data = (await request.json()) as IUpdatePostDTO ; 

if(!post) {
    return NextResponse.json({massage : "Post Not Found"} , {status : 404}) ; }

 return NextResponse.json( {massage : "post updated"} , { status : 200 }) ;   
}


//Delete Method
export const DELETE = async (request : NextRequest , {params} : { params : Promise<{id : string}> } ) => {

const resolvedParams = await params ;

const postId = parseInt (resolvedParams.id) ;

const post =  posts.find((p) => p.id === postId )


if(!post) {
    return NextResponse.json({massage : "Post Not Found"} , {status : 404}) ; }

 return NextResponse.json( {massage : "post deleted successfully"} , { status : 200 }) ;   
}