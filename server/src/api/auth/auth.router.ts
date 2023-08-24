import { Router } from 'express';
import AuthController from './auth.controller';

export const path = '/auth';
export const router = Router();

router.post('/signup', new AuthController().signup);
router.post('/login', new AuthController().login);
