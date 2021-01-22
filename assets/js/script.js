

// CREATE UNIVERAL ARRAY... WILL USE FOR STORAGE
var data = [];
// CALL MOMMENT.JS & ESTABLISH DATES
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
// Creat for loop but create var 
var updateBackground = function () {
    // var it need be above so that we call the spefic hour
    let hour = parseInt(date.format('H')); 
    hour += 12
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

// local storage .get itmen 
// call array data
// .ready