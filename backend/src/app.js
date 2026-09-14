import express from 'express';
import cors from 'cors';


const app = express();


app.use(cors())
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true, limit:"50mb"}));



app.get('/api/health', (req, res)=>{

    res.status(200).json({
        success:true,
        message:"DocuQuery Backend is running!"
    })
})

export default app;