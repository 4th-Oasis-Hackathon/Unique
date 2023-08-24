import { Router } from 'express';
import UserController from './user.controller';

export const path = '/users';
export const router = Router();

router.get('/me', new UserController().me); // 마이페이지
router.delete('/:id', new UserController().delete); // 유저 삭제
router.put('/me/notice', new UserController().notice); // 알림 설정
router.put('/me/unnotice', new UserController().unnotice); // 알림 설정 해제
router.get('/me/messages', new UserController().messages); // 메시지 리스트
router.post('/me/messages', new UserController().sendMessage); // 메시지 전송
