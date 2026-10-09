import jwt from "jsonwebtoken" ;
import { TUserPayload } from "./Types";

export const generateToken = (userPayload : TUserPayload ) : string => {
    const token = jwt.sign(userPayload , process.env.JWT_SECRET! , {
        expiresIn : "4d" } )
        return token
}

