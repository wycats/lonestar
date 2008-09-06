jQuery(function($) {
  $("p.edit_in_place").livequery("click", function() {
    $(this).hide().after("<input type='text' class='editor' name='val' />");
  });
  
  $("input.editor").livequery("keydown", function(e) {
    if(e.keyCode == 27) $(this).remove();
  })
});