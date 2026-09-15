import multer from 'multer';

//storage configuration
const storage = multer.diskStorage({

    destination: function (req, file, cb){
        cb(null, "./tmp")
    },

    filename: function (req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb)=>{
    const  allowedMimetypes = [
        "application/pdf",                                                                 // .pdf
        "text/plain",                                                                      // .txt
        "application/msword",                                                              // .doc
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"          // .docx
    ];

    if(allowedMimetypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(new Error("Invalid File type!", false));
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize:15*1024*1024}
})