function callback(){
	console.log('123');
}

function forFunc(i, limit, step, iteration) {

	if (limit/step - iteration >= i) {
		callback();
	}
	else {
		callback();
		iteration = iteration - step;
		return forFunc(i, limit, step, iteration);
	}
}

forFunc(1, 3, 1, 0);
