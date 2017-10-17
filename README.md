# 计算点到直线的最短距离（仅适用于地图坐标系）

### INSTALL

```
npm i pointdis --save
```

### 使用说明

#### 参数

- p: 当前需要计算的点的坐标 {lat:39.90, lng: 116.370}
- pointList: Array 坐标点数组，可连成直线的坐标

```
const getDis = require('pointdis');

let dis = getDis({lng:116.368, lat: 39.911},[{lng:116.365, lat:39.91},{lng:116.37,lat: 39.91}, {lng: 116.38, lat: 39.90}]);
console.log(dis,' 米');

```


> ps: 如需计算两点之间的距离可参考 [coordsdistance](https://www.npmjs.com/package/coordsdistance)