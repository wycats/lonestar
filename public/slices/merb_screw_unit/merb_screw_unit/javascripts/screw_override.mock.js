Screw.MockXMLHttpRequest = function() {};
Screw.MockXMLHttpRequest.prototype = {
  abort: function() {},
  getAllResponseHeaders: function() {},
  open: function(method, url, async, user, pass) {},
  send: function(content) {
    this.readyState = 4;
    this.status = 200;
    this.statusText = "OK";
    this.responseText = this.returns;
    if(this.xml) this.responseXML = $(this.returns);
  },
  setRequestHeader: function(label, value) {},
  returns: function(str, xml) {
    this.returns = str;
    this.xml = xml;
  }
};