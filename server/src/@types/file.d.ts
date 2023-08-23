export interface IFile {
    originalname?: string;
    mimetype?: string;
    size?: number;
    bucket?: string;
    key?: string;
    acl?: string;
    location?: string;
    etag?: string;
    versionId: string;
}
