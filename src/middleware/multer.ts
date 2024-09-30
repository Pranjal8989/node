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

function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    const filetypes = /jpeg|jpg|png|gif/
    const extname = filetypes.test(file.originalname.toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb(new Error('Images Only!'))
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (_req, file, cb) {
        checkFileType(file, cb)
    }
}).single('image')

export default upload
