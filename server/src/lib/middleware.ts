import multer from 'multer';

export default class MiddleWare {
    uploadImage = multer({ dest: 'images/'});
}
