
const coordsdistance = require('coordsdistance');

let getDis = (p, pList = []) => {
	if (pList.length <= 1) return 0;
	let dis = 0;
	for (var i = 0; i < pList.length - 1; i++) {
		let d = getDisP(p,pList[i],pList[i+1]);
		dis = dis === 0 ? d : dis > d ? d : dis;
	};
	return dis;
}

let getDisP = (p, p0, p1) => {
	let a = coordsdistance([[p1.lat,p1.lng],[p0.lat,p0.lng]]);
	let b = coordsdistance([[p.lat,p.lng],[p0.lat,p0.lng]]);
	let c = coordsdistance([[p1.lat,p1.lng],[p.lat,p.lng]]);

	if (Math.acos((b*b + a* a - c*c)/ (2* b * a))*180/Math.PI >= 90) return b;
	if (Math.acos((c*c+ a* a - b*b)/ (2* c * a))*180/Math.PI >= 90) return c;

	let P = (a + b + c) / 2;
	let s = Math.pow(P * (P - a) * (P - b) * (P - c),1 / 2);
	let h = 2 * s / a;
	return h;
}

module.exports = getDis;