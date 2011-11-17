jQuery(document).ready(function($){

  $('#github').mouseover(function(){
    $('#mousing').text("GitHub");
  });

  $('#github').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#twitter').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#rss').mouseover(function(){
    $('#mousing').text("RSS");
  });

  $('#rss').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#linkedin').mouseover(function(){
    $('#mousing').text("LinkedIn");
  });

  $('#linkedin').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

});


(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

