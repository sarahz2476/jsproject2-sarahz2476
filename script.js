$.ajax({
    url: 'https://data.cityofnewyork.us/resource/uvw5-9znb.json',
    dataType: 'json',
    success: function(data) {
        var borough = prompt ("Input a New York borough (Make sure to Capitalize the first letters).");  // ask the user for a borough
        document.write("<b> NYC Council Members that have district office in " + borough + ": </b><br>"); // title
        
      // this loop will go through the list and print out any council members' name with distric office in the borough the user asks for
       for(var i = 0; i < data.length; i++){
           if (data[i].borough == borough){
               console.log(data[i].name);
               boroughString = "";
               boroughString = data[i].name;
               document.write(boroughString + "<br>"); // prints the council member's name
           };
     
       };
       
       // For these two conditions because two of the council member have district office in two different borough I had to make new condition for these two member.
       // In the json for these two council members, the borough object is formatted "borough1 and borough2".
       // therefore I made two conditions specfically for two members.
        
        // so if they user input Brooklyn or Queens, this council member's name will print out
        if (borough == "Brooklyn" || borough == "Queens"){ 
               console.log(data[47].name);
               BQString = "";
               BQString = data[47].name;
               document.write( BQString + "<br>");
           };
         // so if they user input Manhattan or Bronx, this council member's name will print out
        if (borough == "Manhattan" || borough == "Bronx"){
               console.log(data[26].name);
               MBString = "";
               MBString = data[26].name;
               document.write( MBString + "<br>");
           };
     
                      
    }
});
