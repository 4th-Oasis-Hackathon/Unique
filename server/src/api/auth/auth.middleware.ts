import httpStatus from "http-status";
import { Result } from "../../common/result";
import logger from "../../lib/logger";
import UserRoles from "../../common/user.role";
import ApiError from "../../common/api.error";
import ApiCodes from "../../common/api.codes";

export default class AuthMiddleWare {
	isAdmin = async (req, res, next) => {
		const { role } = req.body;
		try {
			if (role < UserRoles.ADMIN) throw new ApiError(ApiCodes.FORBIDDEN, "관리자만 접근 가능합니다.");
		} catch	(e: any) {
			logger.err(JSON.stringify(e));
			logger.error(e);

			const result = Result.fail<Error>(e).toJson();
			logger.res(httpStatus.OK, result, req);
			res.status(httpStatus.OK).json(result);
		}

		next();
	}

	isUser = async (req, res, next) => {
		const role = req.body.role || UserRoles.GUEST;

		try {
			if (role < UserRoles.USER) throw new ApiError(ApiCodes.FORBIDDEN, "사용자만 접근 가능합니다.");
		} catch	(e: any) {
			logger.err(JSON.stringify(e));
			logger.error(e);

			const result = Result.fail<Error>(e).toJson();
			logger.res(httpStatus.OK, result, req);
			res.status(httpStatus.OK).json(result);
		}
		next();
	}

	isMe = async (req, res, next) => {
		const { user_id: id } = req.params;
		const { user_id, author_id, role } = req.body;
		const user = user_id || author_id;

		try {
			if (id !== user && role !== UserRoles.ADMIN) throw new ApiError(ApiCodes.FORBIDDEN, "자신의 정보만 접근 가능합니다.");
		} catch	(e: any) {
			logger.err(JSON.stringify(e));
			logger.error(e);

			const result = Result.fail<Error>(e).toJson();
			logger.res(httpStatus.OK, result, req);
			res.status(httpStatus.OK).json(result);
		}
		next();
	}
}
