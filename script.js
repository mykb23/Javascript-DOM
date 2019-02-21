var currentTime = document.getElementById("displayMyCurrentTime");

function showDate() {
	var date = new Date();
	currentTime.innerHTML = date;
}

setInterval(showDate, 1000);
// var timer = 0;

// function countUp () {
// 	document.write(timer + "<br>");
// 	timer++;
// 	if (timer <= 3) {
// 		clearInterval(timer);	
// 	}
// }

// setInterval(countUp,1000);

// function showName() {
// 	document.write("Femi");
// }

// setTimeout(showName, 5000);

// var inputTag = document.getElementsByTagName("input");

// alert(inputTag[1].value);

// function validateField () {
// 	if (inputTag[0].value === "") {
// 		alert("Please Enter a Name");
// 	}
// 	else if (inputTag[2].value === ""){
// 		alert("Please Enter Password");
// 	}
// 	else if (inputTag[2].value != "12564"){
// 		alert("Wrong Password");
// 	}
// 	else {
// 		alert("Welcome");
// 	}
// }



// validateField ();

var square = document.getElementById('square');

function changeColor () {
	square.style.backgroundColor = "green";
}

function reverseColor() {
	square.style.backgroundColor = "yellow";
}

function clickMe() {
	square.style.backgroundColor = "red";
}

changeColor();
reverseColor();
clickMe();




// if (password != "123456") {
// 		alert("Wrong Password");
// 	}
// 	else {
// 		alert("Welcome User");
// 	}

// var text = document.getElementById('welcome_js').style.backgroundColor = "orange";
// text = document.getElementById('welcome_js').style.color = "white";
// text = document.getElementById('welcome_js').style.textAlign = "center";
// var story = document.getElementById('story').style.backgroundColor = "gray";
// story = document.getElementById('story').style.color = "white";
// story = document.getElementById('story').style.padding = "28px";


// var name = document.getElementById('enter_name').value ="Femi";
// // var email = document.getElementById('enter_email').value = "femi@gmail.com";
// // var password = document.getElementById('enter_password').value = "1234565924";

// var inputTag = document.getElementsByTagName("input");

// inputTag[1].value = "Brad@alabiansolution.com";	
// inputTag[2].value = "Bradpit845.";	

	// if (password != "123456") {
	// 	alert("Wrong Password");
	// }
	// else {
	// 	alert("Welcome User");
	// }

// alert(name);
// alert(email);
// alert(password);


// 



// alert(story)
// alert(text);




// var student = [
// 	{
// 		'Name': 'Femi',
// 		'Level': '100 Level',
// 		'Course': 'Botany',
// 		'firstSemester': 100,
// 		'secondSemester': 80
// 	},
// 	{
// 		'Name': 'Tunde',
// 		'Level': '300 Level',
// 		'Course': 'Yoruba',
// 		'firstSemester': 70,
// 		'secondSemester': 80
// 	},	
// 	{
// 		'Name': 'Dayo',
// 		'Level': '400 Level',
// 		'Course': 'Accounting',
// 		'firstSemester': 50,
// 		'secondSemester': 90
// 	}
// ];

// student[4] = {
// 	'Name': 'Bayo',
// 	'Level': '400 Level',
// 	'Course': 'Accounting',
// 	'firstSemester': 70,
// 	'secondSemester': 50
//  }
// console.log(student);


// function average (firstSemester,secondSemester) {
// 	document.write((firstSemester+secondSemester)/2);
// }

// average(student[0].firstSemester,student[0].secondSemester);
