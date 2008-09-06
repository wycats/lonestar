jQuery(function($) {
  $.metadata.setType("attr", "metadata");
  
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

  $("p.in_place_form").livequery("submit.editor", function(e, self) {
    var url = self.parent().prev().metadata().put;
    $.post(url, {val: self.val()}, function(json) {
      if(json.success) {
        self.parent().prev().html(json.result).end().trigger("cancel.editor");
      }
    }, "json");
  })
  
  $("input.editor:text").livequery("keydown", function(e) {
    var self = $(this);
    if(e.keyCode == 27) {
      self.parent().trigger("cancel.editor")
    } else if(e.keyCode == 13) {
      self.parent().trigger("submit.editor", [self])
    }
  });
  
  $("input.editor:submit").livequery("click", function() {
    $(this).parent().trigger("submit.editor", [$(this)])
  })
  
  $("input.editor.cancel").livequery("click", function() {
    $(this).parent().trigger("cancel.editor")
  });
});