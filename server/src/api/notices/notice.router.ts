import { Router } from 'express';
import NoticeController from './notice.controller';
import AuthMiddleWare from '../auth/auth.middleware';
import MiddleWare from '../../lib/middleware';

export const path = '/notices';
export const router = Router();

router.post('/', new AuthMiddleWare().isAdmin, new MiddleWare().uploadImage.array('images'), new NoticeController().create);
router.delete('/:id', new AuthMiddleWare().isAdmin, new NoticeController().delete);
