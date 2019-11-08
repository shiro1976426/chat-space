# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :names
- has_many :users_names

## namesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string||
### Association
- has_many:users_names
- has_many :posts


## users_namesテーブル
|Column|Type|Options|
|------|----|-------|
|name_id|string|null: false|
|user_id|string|null: false|
### Association
- belongs_to :users
- belongs_to :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :names
- belongs_to :users