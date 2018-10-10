$(document).ready(function() {

	$.getJSON( "https://backend.trevphil.com/cookies", function(data) {
	  var cookies = [];
	  $.each(data, function(key, items) {
		  items.forEach(function(item) {
		  	const d = item['attributes'];
  		  	if (d) {
				const url = d['url'] && d['url'].length > 0 ? d['url'] : '(no URL)';
				const content = d['content'] && d['content'].length > 0 ? d['content'] : '(no content)';
  			  	cookies.push(`<li><b>${url}</b> : ${content}</li>`);
  		  	}
		  });
	  });
 
	  $("<ul/>", {
		  "class": "cookies-list",
		  html: cookies.join("")
	  }).appendTo("body");
	});

});