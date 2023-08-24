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
    deleted_at DATE,
    updated_at DATE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX PRIMARY KEY (_id)
);

CREATE TABLE posts (
    _id BIGINT AUTO_INCREMENT PRIMARY KEY,
    author_id BIGINT,
    author VARCHAR(100),
    title VARCHAR(100),
    content VARCHAR(1024),
    likes INT,
    type VARCHAR(100),
    reported BOOLEAN DEFAULT false,
    parent_id BIGINT,
    receiver_id BIGINT,
    deleted_at DATE,
    updated_at DATE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX PRIMARY KEY (_id)
);

```
