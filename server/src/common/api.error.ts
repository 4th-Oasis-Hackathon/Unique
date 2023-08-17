import tid from 'cls-rtracer';
import * as os from 'server/node_modules/os';
import context from 'express-http-context';
import { prune } from '../lib/utils';
import fs from 'fs';
import path from 'server/node_modules/path/path';
import appRoot from 'app-root-path';
import logger from '../lib/logger';

export default class ApiError extends Error {
    detail: any;
    tid: unknown;
    version: string;
    build: string;
    hostname: string;
    caller: any;
    req: any;
    info: any;
    __line__: any;
    __function__: any;
    __file__: any;

    public constructor(public code: number, msg?: string, detail?: any, callback = undefined) {
        super(msg);

        if (callback instanceof Function) callback();

        this.code = code;
        this.detail = {
            ...detail, ...{
                path: detail?.req?.path,
                method: detail?.req?.method,
                param: detail?.req?.param,
                query: detail?.req?.query,
                body: detail?.req?.body,
            },
        };

        let pkg;
        try {
            const data = fs.readFileSync(path.join(appRoot.path, 'package.json'), { encoding: 'utf8', flag: 'r' });
            pkg = JSON.parse(data);
        } catch (e) {
            logger.error(JSON.stringify(e));
        }

        this.req = context.get('req_info');
        this.tid = tid.id();
        this.version = pkg?.version;
        this.build = pkg?.build;
        this.hostname = os.hostname();
        const e = detail?.error || new Error();
        const frame = e.stack.split("\n")[2]; // change to 3 for grandparent func
        this.detail = prune(this.detail);
        this.__line__ = frame.split(":").reverse()[1];
        this.__file__ = frame.split(':')[0].split('/').reverse()[0];
        this.__function__= frame.split(" ")[5];
        this.caller = context.get('caller');
    }
}
