import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'goodrecipes2023',
        port : 3306,
        database: 'nextgoodrecipes'
    }
})