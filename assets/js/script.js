// CREATE UNIVERAL ARRAY... WILL USE FOR STORAGE
var data = [];
// CALL MOMMENT.JS & ESTABLISH DATES AND FORMAT
var updateInfo = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

// PLACEMENT OF DATE WITH US OF H1 CLASS/LOAD
$(document).ready(function(){
    datetime = $('#currentDay')
    updateInfo();
    setInterval(updateInfo, 1000);
    updateBackground();
});
// CREATE FOR LOOP TO SORT THROUH ate because we needed sort loop 
var updateBackground = function () {
    // NEEDED LOCAL VAR TO CONVERT LINE SIX CLOCK TO A SPECIFIC HOUR FOR FOR LOOP. 
    let hour = parseInt(date.format('H')); 
    //THIS IS A TEST TO INSUTRE THE BACK GROUNDS ARE CURRENTLY FUNCTIONING HOUR (-/+)=(HOURS)
    hour -= 6
    for (i = 9; i < 18; i++) {
    var textArea = $("#" + i); 
// condition 1
    if (i < hour) {
    textArea.addClass("past") 
  }
// conditon 2 
  else if (i === hour) {
      textArea.addClass("present")
  }
// condition 3
  else {
      textArea.addClass("future")
  }
  //console.log(hour)
}
}

// EVENT LISTNER TO START PROCESS OF STORAGE. 
$("button").on('click', function(){ 
  let btn = $(this)
  let hour = btn.data('hour')
         //console.log ($(this).data('hour'))
  let content = $("#" + hour).val()

  // Is content for the spefic content/hour bolean
    var duplicate = false
// check contnet   
for (let i= 0; i < data.length; i++) {
  const element = data[i];
// seting the content setting equal 
 if (element['hour'] == hour) {
      element['content'] = content; //update
      duplicate = true; 
  // console.log("duplicate", "found")
  } 
} 
if ( !duplicate ){ 
  var obt = {'hour': hour, 'content': content } //  console.log(hour, content)
   data.push(obt) 
}  console.log (data)  
// // hi, has the hour loop. through array update it. look through it find the hour we 
// // up date the spefic data.  
localStorage.setItem('array', JSON.stringify(data));

})  // git content from the text area
var array = JSON.parse(localStorage.getItem('array'))
if (array) { 
  //For data array object being retreived from local 
  for (let i = 0; i < array.length; i++) {
  // Purposely to reformate
    for (let j = 9; j < 18; j++) {
     if (array [i].hour == j) {
    $("#" + j) .val(array [i].content)
   }
  }
}
}

// local storage .get itmen 
// call array data
