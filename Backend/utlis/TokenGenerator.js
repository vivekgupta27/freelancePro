import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const key=process.env.jwt_secret_key;
const Token=(userid)=>{
    const token=  jwt.sign({id:userid},key);
    return token;
}
export default Token;