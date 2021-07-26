// declaration for day and time - moment
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:m a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");

// timeblocks

//9am
var time9am = beforeTime.add(0, "h");
time9am = time9am.format('hh:mm A');
$(".block9am").text(time9am);

//10am
var time10am = beforeTime.add(1, "h");
time10am = time10am.format('hh:mm A');
$(".block10am").text(time10am);

//11am
var time11am = beforeTime.add(1, "h");
time11am = time11am.format('hh:mm A');
$(".block11am").text(time11am);

//12pm
var time12pm = beforeTime.add(1, "h");
time12pm = time12pm.format('hh:mm A');
$(".block12pm").text(time12pm);

//1pm
var time1pm = beforeTime.add(1, "h");
time1pm = time1pm.format('hh:mm A');
$(".block1pm").text(time1pm);

//2pm
var time2pm = beforeTime.add(1, "h");
time2pm = time2pm.format('hh:mm A');
$(".block2pm").text(time2pm);

//3pm
var time3pm = beforeTime.add(1, "h");
time3pm = time3pm.format('hh:mm A');
$(".block3pm").text(time3pm);

//4pm
var time4pm = beforeTime.add(1, "h");
time4pm = time4pm.format('hh:mm A');
$(".block4pm").text(time4pm);

//5pm
var time5pm = beforeTime.add(1, "h");
time5pm = time5pm.format('hh:mm A');
$(".block5pm").text(time5pm);

//compare hour with current time
function testTime() {
    time9am = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time9am)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time9am)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time9am)) {
        $(".form9").addClass("present");
    };
    time10am = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time10am)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time10am)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time10am)) {
        $(".form10").addClass("present");
    };
    time11am = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time11am)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time11am)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time11am)) {
        $(".form11").addClass("present");
    };
    time12pm = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time12pm)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time12pm)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time12pm)) {
        $(".form12").addClass("present");
    };
    time1pm = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(time1pm)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time1pm)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time1pm)) {
        $(".form1").addClass("present");
    };
    time2pm = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time2pm)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time2pm)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time2pm)) {
        $(".form2").addClass("present");
    };
    time3pm = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time3pm)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time3pm)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time3pm)) {
        $(".form3").addClass("present");
    };
    time4pm = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time4pm)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time4pm)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time4pm)) {
        $(".form4").addClass("present");
    };
    time5pm = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time5pm)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time5pm)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time5pm)) {
        $(".form5").addClass("present");
    };
}
testTime();
// Loops through input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
