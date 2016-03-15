var bio = {
	"name": "Alina Ghetler",
	"role": "Junior Developer",
	"skills": ["team spirit", "enthusiast", "eager to learn"],
	"contacts": {
		"mobile": "0123456789",
	    "email": "alina.ghetler@gmail.com",
	    "github": "alinaberlin"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Hello that's me!",
	"display": function() {}
};
var education = {"schools":
        [{"name":"A.Cuza. University",
        "location":"Iasi-Romania",
        "degree" :"Finance" ,
        "major":["economy","economy","informatics"],
        "dates":"15.06.2004",
        "url":"http://www.uaic.ro/"					
    }],
    "onlineCourses":[{"title":"Python for everbody",
                       "school": "Coursera",
                        "date": "Jan 2016 - Feb 2016",
                        "url": ""},
                     {"title":"JavaScript Basics",
                      "school": "Udacity",
                       "date": "Jan 2016 - Feb 2016",
                       "url": "https://www.udacity.com/courses/ud804"},							
                       {"title":"How to Use Git and GitHub",
                      "school": "Udacity",
                       "date": "Jan 2016 - Feb 2016",
                       "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"}],
      "display": function () {}

};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
for(contact in bio.contacts){
	var formattedContact = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	$("#topContacts").append(formattedContact);
}
var welcomeMessage =  HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var bioPic =  HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(bioPic); 
$('#header').append(welcomeMessage);
$("#header").append(HTMLskillsStart);
for(skill in bio.skills){
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
	$("#skills").append(formattedSkill);

}

var work = {"jobs":
   [{
"title": "marketing research analist",
"employer": "Trend Test GmbH",
"location": "Berlin, Germany",
"dates": "1.05.2015-present",
"description": "Explain about the research and how it’ll be used"
}, {
"title": "sales director",
"employer": "Briela",											
"location": "Botosani, Romania",
"dates": "15.06.2005-15.10.2012",
"description": "manage a sales team"
}],"display": function() { }};
function displayWork(){

	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);
	  var workLine = HTMLworkEmployer.replace("%data%", work.jobs[job]['employer'])
	  + HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
	  console.log(workLine);
	  workLine = workLine + HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
	  workLine = workLine + HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
	  workLine = workLine + HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);
	  
	  $(".work-entry:last").append(workLine);
	}
}
displayWork();
//$(document).click(function(loc) {
//   logClicks(loc.screenX,loc.screenY);
//});
var projects = {
	"projects":[{
		"title":"Mobile app user acceptance testing",
		"dates":"10/11/2015-11/11/2015",
		"description":"Testing mobile apps following predefined steps and at the end writing a report with sugestions and conclusions, in order to help the design team to improve the user experience.",
		"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNMXcxgRTHDHRjj97rEcXH3Y7C6ftIsMMx6BmD12PUPQXdXPQQg"]
    },
    {
		"title":"Mobile app user acceptance testing",
		"dates":"10/11/2015-11/11/2015",
		"description":"Testing mobile apps following predefined steps and at the end writing a report with sugestions and conclusions, in order to help the design team to improve the user experience.",
		"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNMXcxgRTHDHRjj97rEcXH3Y7C6ftIsMMx6BmD12PUPQXdXPQQg",
		"http://d2bb8f8g1cmmfi.cloudfront.net/sites/all/themes/mpundit/images/banner_img6_0.png"]

    }

	],
	"display": function () {}
}
for (var pr in projects) {
	console.log(pr);
}
for (var index in projects.projects){
	console.log(index);
	$("#projects").append(HTMLprojectStart);
	var projectLine = HTMLprojectTitle.replace("%data%", projects.projects[index].title) + 
	HTMLprojectDates.replace("%data%",projects.projects[index].description);
	for (image in projects.projects[index].images){
		projectLine = projectLine + HTMLprojectImage.replace("%data%",projects.projects[index].images[image]);
	}
	$(".project-entry:last").append(projectLine);
}

$("#main").append(internationalizeButton);
function inName(){
	var names = bio.name.split(" ");
	var fName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lName = names[1].toUpperCase();
	return fName + " " + lName;
}

/*var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedPhoneNumber = HTMLcontactGeneric.replace("%data%",bio.telefonNumber).replace("%contact%", "Phone");
var formattedEmail = HTMLcontactGeneric.replace("%data%",bio.email).replace("%contact%", "Email");
$("#topContacts").append(formattedPhoneNumber);
$("#topContacts").append(formattedEmail);
var welcomeMessage =  HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var bioPic =  HTMLbioPic.replace("%data%",bio.pictureUrl);
$("#header").append(bioPic); 
$('#header').append(welcomeMessage);
var skillsStart = HTMLskillsStart;
$("#header").append(skillsStart);
for (var i = 0; i<bio.skills.length; i++){
	var skill = HTMLskills.replace("%data%",bio.skills[i]);																		
	console.log(skill);
	$("#skills").append(skill);
};+

var employerJob = HTMLworkEmployer.replace("%data%",work[0].employer);
var titleJob = HTMLworkTitle.replace("%data%",work[0].title);
var periodjob = HTMLworkDates.replace("%data%",work[0].period); 
var descriptionJob = HTMLworkDescription.replace("%data%",work[0].description);
var city = HTMLworkLocation.replace("%data%",work[0].city + ", " + work[0].country);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(employerJob);
$(".work-entry").append(titleJob);*/

