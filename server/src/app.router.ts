import { Router } from 'express';
import httpStatus from 'http-status';
import ApiMessages from './common/api.messages';
import * as users from './api/users/user.router';
import * as posts from './api/posts/post.router';
import * as comments from './api/comments/comment.router';
import * as auth from './api/auth/auth.router';
import * as notices from './api/notices/notice.router';

export const router = Router();
export const path = '';

router.get('/healthCheck', function (req, res) {
    res.status(httpStatus.OK).json({ result: ApiMessages.OK });
});

router.use(users.path, users.router);
router.use(posts.path, posts.router);
router.use(comments.path, comments.router);
router.use(auth.path, auth.router);
router.use(notices.path, notices.router);
