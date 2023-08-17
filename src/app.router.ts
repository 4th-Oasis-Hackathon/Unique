import { Router } from 'express';
import httpStatus from 'http-status';
import ApiMessages from './common/api.messages';

export const router = Router();
export const path = '';

/**
 * API version에 독립적인 Route path
 */
router.get('/healthCheck', function (req, res) {
    res.status(httpStatus.OK).json({ result: ApiMessages.OK });
});

