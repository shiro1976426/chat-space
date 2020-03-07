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
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
|user_group|integer|null: false|
### Association
- has_many :users_groups
- has_many :comments
- has_many :groups, through: :users_groups

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users-groups
- has_many :comments
- has_many :users, through: :users_groups

## commentテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|image|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user




= form_for group do |f|
  - if group.errors.any?
    .chat-group-form__errors
      %h2= "#{group.errors.full_messages.count}件のエラーが発生しました。"
      %ul
        - group.errors.full_messages.each do |message|
          %li= message
  .chat-group-form__field
    .chat-group-form__field--left
      = f.label :name, class: 'chat-group-form__label'
    .chat-group-form__field--right
      = f.text_field :name, class: 'chat__group_name chat-group-form__input', placeholder: 'グループ名を入力してください'
  .chat-group-form__field.clearfix
    .chat-group-form__field--left
      %label.chat-group-form__label{:for => "chat_group_チャットメンバーを追加"} チャットメンバーを追加
    .chat-group-form__field--right
      .chat-group-form__search.clearfix
        %input#user-search-field.chat-group-form__input{:placeholder => "追加したいユーザー名を入力してください", :type => "text"}/
      #user-search-result

  .chat-group-form__field.clearfix
    .chat-group-form__field--left
      %label.chat-group-form__label{:for => "chat_group_チャットメンバー"} チャットメンバー
    .chat-group-form__field--right

      #chat-group-users.js-add-user
        .chat-group-user.clearfix.js-chat-member
          %input{name: “group[user_ids][]“, type: “hidden”, value: current_user.id}
          %p.chat-group-user__name= current_user.name

        - group.users.each do |user|
          - if current_user.name != user.name
            .chat-group-user.clearfix.js-chat-member
              %input{name: “group[user_ids][]“, type: “hidden”, value: user.id}
              %p.chat-group-user__name
                = user.name 
              %a.user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn
                削除

  .chat-group-form__field.clearfix
    .chat-group-form__field--left
    .chat-group-form__field--right
      = f.submit class: 'chat-group-form__action-btn'
