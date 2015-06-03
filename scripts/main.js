(function(){
  'use strict';

  var username = '';

  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      username = $(this).find('.login-form-username').val();
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
        renderChat();
        break;
    }
  }

  function renderChat() {
    $('.application').html(JST['chat']());
    console.log('username:', username);
  }

})();
