import { Router } from 'express';
import NoticeController from './notice.controller';
import AuthMiddleWare from '../auth/auth.middleware';
import MiddleWare from '../../lib/middleware';

export const path = '/notices';
export const router = Router();

router.get('/', new NoticeController().list);
router.post('/', new MiddleWare().uploadImage.array('images'), new AuthMiddleWare().isAdmin, new NoticeController().create);
router.delete('/:id', new AuthMiddleWare().isAdmin, new NoticeController().delete);
