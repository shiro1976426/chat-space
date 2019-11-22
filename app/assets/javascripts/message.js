$(function(){
  function buildHTML(message){
    image = message.image? `<img src = ${message.image} ></img>`:"";
    var html =
      `<div class="message" data-id=${message.id}>
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
      return html;
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html); 
      $('.new_message')[0].reset();
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight})
    })

    .fail(function(){
      alert('error');
    })

  });

  var reloadMessages = function(){
    last_message_id = $(".message:last").data("id");
    console.log(last_message_id);

    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data:{last_id: last_message_id}
    })

    .done(function (messages) {
      var insertHTML = "";
      messages.forEach(function(last_message_id){
      insertHTML = buildHTML(last_message_id);
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight})
      })
    })

    .fail(function() {
      console.log("error");
    })
  };
  setInterval(reloadMessages, 5000)
});
