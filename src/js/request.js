
function Geoco(adress) {
    fetch("http://api.positionstack.com/v1/forward?access_key=4b4ae932495c70c86277ff78f2609849&query="+adress).then((response) => response.json()).then((data) => offset = (data.data[0].longitude/ 0.0041667) * 100);
}
