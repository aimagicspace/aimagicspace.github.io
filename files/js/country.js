$.get("http://ipinfo.io", function (response) {
    if (response.country == "MY") {
		$(".my").show();
	}
	else {
		$(".us").show();
	}
    //$("#country").html("Country: " + response.country);
    //$("#address").html("Location: " + response.city + ", " + response.region);
    //$("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");