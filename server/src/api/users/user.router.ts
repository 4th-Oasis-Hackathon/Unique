import { Router } from 'express';
import UserController from './user.controller';
import AuthMiddleWare from '../auth/auth.middleware';

export const path = '/users';
export const router = Router();

router.get('/:user_id', new AuthMiddleWare().isMe, new UserController().get); // 마이페이지
router.put('/:user_id', new AuthMiddleWare().isMe, new UserController().update); // 유저 정보 수정
router.get('/:user_id/messages', new AuthMiddleWare().isMe, new UserController().message); // 메시지 리스트
router.post('/:user_id/messages', new AuthMiddleWare().isMe, new UserController().sendMessage); // 메시지 전송
router.delete('/:user_id', new AuthMiddleWare().isMe, new UserController().delete); // 유저 삭제
