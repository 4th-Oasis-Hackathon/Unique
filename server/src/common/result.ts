import ApiCode from "./api.codes";
import ApiMessages from "./api.messages";
import env from '../env';

export class Result<T> {
    public isSuccess: boolean;
    public error: any;
    private readonly _value: T;

    private constructor (isSuccess: boolean, error?: string, value?: T) {
        if (isSuccess && error) {
            throw new Error(`InvalidOperation: A result cannot be successful and contain an error`);
        }
        if (!isSuccess && !error) {
            throw new Error(`InvalidOperation: A failing result needs to contain an error message`);
        }

        this.isSuccess = isSuccess;
        this.error = error;
        this._value = value;

        Object.freeze(this);
    }

    public getValue () : T {
        return this._value;
    }

    get json(): any {
        if (this.error && !this.isSuccess) {
            const detail = this.error?.detail;
            this.error.detail = { ...detail, ...{
                    location: this.error?.__file__ && `${this.error?.__file__}:${this.error?.__line__} (${this.error?.__function__})`,
                    trace: env.mode.prod ? undefined : this.error.stack,
                    tid: this.error?.tid
                }}
        }

        return this.isSuccess ? {
            code: ApiCode.OK,
            message: ApiMessages.OK,
            result: this._value
        } : {
            code: this.error?.code || ApiCode.INTERNAL_SERVER_ERROR,
            message: this.error?.message || ApiMessages.INTERNAL_SERVER_ERROR,
            detail: this.error?.detail,
        };
    }

    public toJson(): any {
        return this.json;
    }

    public static ok<U> (value?: U) : Result<U> {
        return new Result<U>(true, null, value);
    }

    public static fail<U> (error: any): Result<U> {
        return new Result<U>(false, error);
    }
}
