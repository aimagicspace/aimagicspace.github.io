$.get("http://ipinfo.io", function (response) {
    if (response.country == "MY") {
		$(".my").show();
		$(".us").hide();
	}
	else {
		$(".us").show();
		$(".my").hide();
	}
    //$("#country").html("Country: " + response.country);
    //$("#address").html("Location: " + response.city + ", " + response.region);
    //$("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");