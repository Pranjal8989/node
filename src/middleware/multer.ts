import multer from 'multer'

import path from 'path'

import fs from 'fs'

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        // console.log(parseInt(_.params.id, 10));
        const uploadPath = path.join(__dirname, '../../public/uploads')

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true })
        }
        cb(null, uploadPath)
    },
    filename: (_, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (_, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/
        const extname = filetypes.test(file.originalname.toLowerCase())
        const mimetype = filetypes.test(file.mimetype)
        if (mimetype && extname) {
            return cb(null, true)
        }
    }
}).single('image')

export default upload
