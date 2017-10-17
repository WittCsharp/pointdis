const getDis = require('../index');

describe('demo distance', function(){
	// it('getDisP method',function(){
	// 	let dis =getDisP({lng:116.368, lat: 39.911}, {lng:116.37,lat: 39.91}, {lng: 116.38, lat: 39.90}));	
	// 	console.log(dis);
	// })

	it('getDis method', function(){
		let dis = getDis({lng:116.368, lat: 39.911},[{lng:116.365, lat:39.91},{lng:116.37,lat: 39.91}, {lng: 116.38, lat: 39.90}]);
		console.log(dis);
	})
})



