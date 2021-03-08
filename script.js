$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvw5-9znb.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
