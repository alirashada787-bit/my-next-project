import z from "zod";

export const  createPostSchema = z.object({
    title : z.string().min(2).max(100) ,
    body : z.string().min(10) }) ;