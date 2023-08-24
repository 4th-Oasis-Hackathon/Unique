import { Router } from 'express';
import CommentController from './comment.controller';

export const path = '/coments';
export const router = Router();

router.post('/', new CommentController().create);
router.delete('/:id', new CommentController().delete);
router.put('/:id/like', new CommentController().like);
router.put('/:id/unlike', new CommentController().unlike);
