$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvw5-9znb.json',
    dataType: 'json',
    success: function(data) {
        var borough = prompt ("Input a borough (Make sure to Capitalize the first letter).");
        document.write("<b> NYC Council Members that have district office in " + borough + ": </b><br>");
       for(var i = 0; i < data.length; i++){
           if (data[i].borough == borough){
               console.log(data[i].name);
               boroughString = "";
               boroughString = data[i].name;
               document.write(boroughString + "<br>");
           };
     
       };
        if (borough == "Brooklyn" || borough == "Queens"){
               console.log(data[47].name);
               BQString = "";
               BQString = data[47].name;
               document.write( BQString + "<br>");
           };
         if (borough == "Manhattan" || borough == "Bronx"){
               console.log(data[26].name);
               MBString = "";
               MBString = data[26].name;
               document.write( MBString + "<br>");
           };
     
                      
    }
});
