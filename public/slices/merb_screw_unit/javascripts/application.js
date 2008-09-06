jQuery(function($) {
  $("p.edit_in_place").livequery("click", function() {
    $(this).hide().after("<input type='text' name='val' />");
  });
});