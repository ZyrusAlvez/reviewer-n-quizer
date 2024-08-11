import bcrypt from "bcrypt"

const access = await bcrypt.compare("123", "$2b$10$/4fkXQ3yt2qiQChW24G0bOX/4FTPPJE7AJurQIoz7P2avohGsXZie")
console.log(access)