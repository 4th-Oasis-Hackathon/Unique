import { Router } from 'express';
import PostController from './post.controller';

export const path = '/posts';
export const router = Router();

router.get('/', new PostController().list);
router.post('/', new PostController().create);
router.get('/:id', new PostController().get);
router.delete('/:id', new PostController().delete);
router.put('/:id/like', new PostController().like);
router.put('/:id/unlike', new PostController().unlike);
router.post('/:id/report', new PostController().report);
