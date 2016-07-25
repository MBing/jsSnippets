function init(cb) {
	var a = [1, 2, 3];
	var b = ["one", "two", "three"];
	// cb.call(this, a, b); // works when only using forEach example
	var c = cb(a, b); // not necessarilty when using var assignment
	a = c || a; // when using map, original value is unchanged
	console.log(a);
}

function mergeEach(a, b) {
	console.log('test each');
	b.forEach(function (v, i) {
		a[i] = [a[i], b[i]];
	});
}

function mergeMap(a, b) {
	console.log('test map');
	var mergedData = a.map(function (v, i) {
		return [v, b[i]];
	});
	return mergedData; // returned value is merged, original stays unchanged
}

init(mergeEach);
init(mergeMap);
