jQuery(function($) {
  $("p.edit_in_place").livequery("click", function() {
    $(this).hide().after(
      "<p class='in_place_form'><input type='text' class='editor' name='val' />" +
      "<input type='submit' class='editor' />" +
      "<input type='button' class='editor cancel' /></p>"
    );
  });
  
  $("p.in_place_form").livequery("cancel.editor", function() {
    $(this).prev().show();
    $(this).remove();
  })
  
  $("input.editor").livequery("keydown", function(e) {
    if(e.keyCode == 27) {
      $(this).parent().trigger("cancel.editor")
    }
  });
  
  $("input.editor.cancel").livequery("click", function() {
    $(this).parent().trigger("cancel.editor")
  });
});