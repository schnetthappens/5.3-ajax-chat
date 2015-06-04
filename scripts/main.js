(function(){
  'use strict';

  var username = localStorage.getItem('username');

  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      username = $(this).find('.login-form-username').val();
      localStorage.setItem('username', username);
      window.location.hash = '/chat';
    });

    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });

  function route() {
    switch(window.location.hash) {
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        getMessages();
        break;
    }
  }

  function getMessages() { //gets list of messages from server
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
    }).then(renderChat);
  }

  function renderChat(data) { //pass messages to renderChat
    $('.application').html(JST['chat'](data));
  }

  setInterval(function() {
      $.ajax({
        url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
      }).then(renderChat);
    }, 30000);
  }




// $(document).on('submit', '.type-message', function(event) {
//   event.preventDefault();
//   $.ajax{(
//     url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
//     type: POST,
//     username: username,
//     created_at: new Date,
//     content:
//
//   )}
//
// })









)();
