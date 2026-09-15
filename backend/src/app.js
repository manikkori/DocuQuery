import express from 'express';
import cors from 'cors';


const app = express();


app.use(cors())
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true, limit:"50mb"}));

import documentRoute from './routes/document.routes.js';



app.get('/api/health', (req, res)=>{

    res.status(200).json({
        success:true,
        message:"DocuQuery Backend is running!"
    })
})


app.use('./api/docs', documentRoute)


export default app;