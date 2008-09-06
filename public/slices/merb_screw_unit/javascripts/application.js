jQuery(function($) {
  $("p.edit_in_place").livequery("click", function() {
    $(this).hide().after(
      "<p><input type='text' class='editor' name='val' />" +
      "<input type='submit' class='editor' />" +
      "<input type='button' class='editor cancel' /></p>"
    );
  });
  
  $("input.editor").livequery("keydown", function(e) {
    if(e.keyCode == 27) {
      $(this).parent().prev().show();
      $(this).parent().remove();
    }
  });
  
  $("input.editor.cancel").livequery("click", function() {
    $(this).parent().prev().show();
    $(this).parent().remove();    
  })
});