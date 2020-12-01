
function forFunc(i, limit, step, iteration, callback) {

	if (limit/step - iteration >= i) {
		callback(i);
	}
	else {
		callback(i);
		iteration = iteration - step;
		return forFunc(i, limit, step, iteration);
	}
}

let func = function(i_){
	console.log(i_);
}

forFunc(1, 3, 1, 0, func);
