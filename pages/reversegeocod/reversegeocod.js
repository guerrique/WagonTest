// Reference Baidu Map WeChat Mini Program JSAPI module 
var bmap = require ( '../../libs/bmap-wx.js' ); 
var wxMarkerData = []; 
Page ({  
data: {
  markers: [],
  latitude: '',
  longitude: '',
  rgcData: {}
},
makertap: function (e) {
  var that = this; 
  var id =  e.markerId;
  that.showSearchInfo(wxMarkerData, id);
},
onLoad: function () {
  var that = this; // create a new Baidu map object var BMap = new bmap . BMapWX 
  ({  
  ak: 'Your ak'
}); 
var fail = function (data) {
  console.log(data)
}; 
var success = function (data) {
  wxMarkerData = data.wxMarkerData;
  that.setData({
    markers: wxMarkerData
  });
  that.setData({
    latitude: wxMarkerData[0].latitude
  });
  that.setData({
    longitude: wxMarkerData[0].longitude
  });
} // initiate a regeocoding retrieval request BMap . regeocoding 
({  
fail: fail,
  success : success,
    iconPath : '../../img/marker_red.png',
      iconTapPath : '. ./../img/marker_red.png ' }); },
showSearchInfo: function (data, i) {
  var that = this;
  that.setData({
    rgcData: {
      address: 'address:' + data[i].address + '\ n',
      desc: 'description:' + data[i].desc + '\ n',
      business: ' Business circle: ' + data[i].Business
    }
  });
}          
})