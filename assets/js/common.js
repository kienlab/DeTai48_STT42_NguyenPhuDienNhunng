getUrlParams = (sParam) => {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

getIdFromCategoricalLink = (link) => {
	return link.split('product/')[1];
}

getIdFromTGICDetailLink = (link) => {
	pid = link.split('.com/')[1];
}

getProductList = (category) => {
	// console.log(category)
	$.ajaxSetup({ async: false });
	var data;
	$.getJSON("database/" + category + ".json", (d) => {
		// $('#categories').html(category_render(data, 0, ''));
		data = d;
	});
	// console.log(data);
	$.ajaxSetup({ async: true });
	return data;
}