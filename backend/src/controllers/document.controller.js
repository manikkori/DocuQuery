const uploadDocument = async (req , res )=>{


    try {
        if(!req.file){
            return res.status(400).josn({
                success:false,
                message:"Please attach File...",
            });
        }


        res.status(200).josn({
            success:true,
            message:"Document successfully uploaded to tmp folder!",
            data:{
                originalName: req.file.originalname,
                fileName:req.file.filename,
                path:req.file.mimetype,
                size:req.file.size
            }
        });

    } catch (error) {
        console.error("Upload error :   ", error);

        res.status(500).json({
            success:false,
            message:"File Upload failed!",
            error:error.message
        });
        
    }

}