$(".title a, .subtext a").each(function() {
  var elem = $(this);
  var href = elem.attr("href");

  var link = '';
  if (href.match(/^\/x\?fnid=/)) // leave "More" button alone
    return;

  // absolute links are good
  else if (href.match(/^http/))
    link = elem.attr("href");

  // make "comments" absolute links as they open in a tab
  else if (href.match(/item\?id=/))
    link = document.location.origin+"/"+href;

  // okay attach the handler
  elem.click(function(e) {
    // have to send a message becz content js can't do this directly
    chrome.runtime.sendMessage( {url:link} );

    e.preventDefault();
  });
});