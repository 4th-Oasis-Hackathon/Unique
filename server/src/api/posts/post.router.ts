import { Router } from 'express';
import PostController from './post.controller';
import AuthMiddleWare from '../auth/auth.middleware';
import MiddleWare from '../../lib/middleware';

export const path = '/posts';
export const router = Router();

router.get('/', new PostController().list);
router.post('/', new MiddleWare().uploadImage.array('images'), new AuthMiddleWare().isUser, new PostController().create);
router.get('/:id', new PostController().get);
router.delete('/:id', new AuthMiddleWare().isAdmin, new PostController().delete);
router.put('/:id/like', new AuthMiddleWare().isUser, new PostController().like);
router.put('/:id/unlike', new AuthMiddleWare().isUser, new PostController().unlike);
router.post('/:id/report', new AuthMiddleWare().isUser, new PostController().report);
