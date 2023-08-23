import { Router } from 'express';
import UserController from './post.controller';

export const path = '/posts';
export const router = Router();

router.get('/', new UserController().list);
router.post('/', new UserController().create);
router.get('/:id', new UserController().get);
