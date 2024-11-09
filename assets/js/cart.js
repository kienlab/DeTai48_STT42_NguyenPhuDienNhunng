
getCart = () => {
	return JSON.parse(sessionStorage.getItem("cart"));
}

addToCart = (product, quantity) => {
	if (quantity === undefined)
		quantity = 1;

	var ps=[];
	if(sessionStorage.getItem("cart") == null) {
		ps = [{'p': product, 'q': quantity}];
	} else {
		ps = getCart();
		dup = ps.findIndex(e => e.p.name == product.name);

		if( dup >= 0)
			ps[dup] = {'p': product, 'q': quantity + ps[dup].q};
		else
			ps.push({'p': product, 'q': quantity});
	}
	sessionStorage.setItem("cart", JSON.stringify(ps));

	console.log(getCart());

	alert(product.name + " \n đã được thêm vào giỏ hàng!");
}