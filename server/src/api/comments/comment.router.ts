import { Router } from 'express';
import CommentController from './comment.controller';
import AuthMiddleWare from '../auth/auth.middleware';

export const path = '/comments';
export const router = Router();

router.post('/', new AuthMiddleWare().isUser, new CommentController().create);
router.delete('/:id', new AuthMiddleWare().isAdmin, new CommentController().delete);
router.put('/:id/like', new AuthMiddleWare().isUser, new CommentController().like);
router.put('/:id/unlike', new AuthMiddleWare().isUser, new CommentController().unlike);
