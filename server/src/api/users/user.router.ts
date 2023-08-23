import { Router } from 'express';
import UserController from './user.controller';

export const path = '/users';
export const router = Router();

router.get('/', new UserController().list);
router.post('/', new UserController().create);
