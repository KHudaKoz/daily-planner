// CREATE UNIVERAL ARRAY... WILL USE FOR STORAGE
var data = [];
// CALL MOMMENT.JS & ESTABLISH DATES AND FORMAT
var updateInfo = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

// TIME FUNCTION AND PLACEMENT OF DATE WITH US OF H1 CLASS/LOAD
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
        let textArea = $("#" + i); 
      // CHECK FOR CONDITION ONE/IF TRUE LINK TO CSS PAST
      if (i < hour) {
        textArea.addClass("past") 
    }
      // CHECK FOR CONDITION TWO IT TRUE LINK TO PRESENT HOUR, BUT AT SAME TIME LOOP TO CONDITION THREE. 
      else if (i === hour) {
        textArea.addClass("present")
    }
      // CHECK CONDITION THREE IF TRUE LINK TO FUTURE COLOR
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

// START OF STORAGE 
    // IS THE CONTENT LOCAL STORAGE/TRUE OR FALSE IF SO DO LOOP
      var duplicate = false   
      for (let i= 0; i < data.length; i++) {
        const element = data[i];
    // 
      if (element['hour'] == hour) {
            element['content'] = content; //update
            duplicate = true;  // console.log("duplicate", "found")
        } 
      }  
      // SETTING TO KEY VALUE PAIR AND EQUAL 
      if ( !duplicate ){ 
        var keyValue= {'hour': hour, 'content': content } //  console.log(hour, content)
    data.push(keyValue) 
    } //console.log (data)  
   
    //SET TO STORAGE
    localStorage.setItem('array', JSON.stringify(data));
  }) 
   
  // START OF GET ITEM FROM LOCAL STORAGE
  // SET VARABLE  
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


