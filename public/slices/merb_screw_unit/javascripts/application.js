jQuery(function($) {
  $("p.edit_in_place").livequery("click", function() {
    $(this).hide().after(
      "<input type='text' class='editor' name='val' />" +
      "<input type='submit' class='editor' />" +
      "<input type='button' class='editor cancel' />"
    );
  });
  
  $("input.editor").livequery("keydown", function(e) {
    if(e.keyCode == 27) {
      $(this).prev().show();
      $(this).remove();
    }
  })
});