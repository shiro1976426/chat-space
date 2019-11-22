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
<!--  
 $(function(){
  // last_message_id = $(".message:last").data("id");
  // console.log(last_message_id);

  function buildHTML(message){
    var image = message.image? `<img src = ${message.image} ></img>`:"";
    html =
      `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
          ${image}
      </div>`
    var image = message.image? `<img src = ${message.image} ></img>`:"";
  };

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    console.log("A");
    var formData = new FormData(this);
    var url = $(this).attr("action");

    $.ajax({
      url: url,
      type: "POST",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false})

    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html); 
      $('form')[0].reset();})

    .fail(function() {
      console.log("error");
    })
  
  });

  var reloadMessages = function() {
    last_message_id = $(".message:last").data("id");
    // console.log(last_message_id);

    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data:{last_id: last_message_id}
    })

    .done(function (messages) {
      var insertHTML = "";
      console.log(messages)
      messages.forEach(function(message){
      insertHTML = buildHTML(message);
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight})
      })
    })

    .fail(function() {
      console.log("error");
    });
  }


  setInterval(reloadMessages, 7000);


}); -->
