import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${Date.now()}-${hash}-${file.originalname}`;

      cb(null, fileName);
    },
  })
};