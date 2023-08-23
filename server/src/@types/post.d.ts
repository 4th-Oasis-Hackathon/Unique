import { IFile } from "./file";

export interface IPost {
    _id?: number;
    author_id?: number;
    author?: string;
	author_role?: number;
    title?: string;
    content?: string;
	files?: IFile[];
	likes?: number;
    type?: string;  // Post, Comment, Message, Notice

	// comments
	parent_id?: number;

	// Messages
	receiver_id?: number;

    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
