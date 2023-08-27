### MYSQL

```
CREATE TABLE users (
    _id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100),
    salt VARCHAR(100),
    role INT NOT NULL DEFAULT 0,
    region VARCHAR(100),
    notice BOOLEAN NOT NULL DEFAULT false,
    deleted_at DATETIME,
    updated_at DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    _id BIGINT AUTO_INCREMENT PRIMARY KEY,
    author_id BIGINT,
    author VARCHAR(100),
    board VARCHAR(100),
    title VARCHAR(100),
    content VARCHAR(1024),
    files JSON,
    likes INT DEFAULT 0,
    type VARCHAR(100),
    reported BOOLEAN DEFAULT false,
    parent_id BIGINT,
    receiver_id BIGINT,
    deleted_at DATETIME,
    updated_at DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

```
