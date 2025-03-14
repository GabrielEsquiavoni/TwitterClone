import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookies = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //MS
        httpOnly: true, // previne XXS/cross-site script
        sameSite: "strict", // ataques CSRF
        secure: process.env.NODE_ENV !== "development",
    });
};