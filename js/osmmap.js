var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var osm_default = L.tileLayer(
	osmUrl,
	{
		attribution: osmAttr,
		maxZoom: 18
	});		
var mymap = L.map('map', {
	center: [30.596106567910734, 32.26817284847409],
	zoom: 9,
	layers: [osm_default]
});	

L.marker([30.596106567910734, 32.26817284847409]).addTo(mymap).bindPopup('Şimdi Buradayım');

var popup = L.popup();
function onMapClick(e) {
	popup.setLatLng(e.latlng)
	latlng = e.latlng.toString().replace('LatLng','').replace('(','').replace(')','').split(',')	
	popup.setContent("Enlem " + latlng[0] + "<br>Boylam " + latlng[1])
	popup.openOn(mymap);
}
mymap.on('click', onMapClick);