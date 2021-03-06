var bio = {
	"name": "Alina Ghetler",
	"role": "Junior Developer",
	"skills": ["team spirit", "enthusiast", "eager to learn"],
	"contacts": {
		"mobile": "0123456789",
	    "email": "alina.ghetler@gmail.com",
	    "github": "alinaberlin",
	    "location":"Botosani"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Hello that's me and this is my first site because I LOVE to code!",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%",this.name);
		var formattedRole = HTMLheaderRole.replace("%data%",this.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		for(contact in this.contacts){
			var formattedContact = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",this.contacts[contact]);
			$("#topContacts").append(formattedContact);
		}
		var welcomeMessage =  HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
		var bioPic =  HTMLbioPic.replace("%data%",this.biopic);
		$("#header").append(bioPic); 
		$('#header').append(welcomeMessage);
		$("#header").append(HTMLskillsStart);
		for(skill in this.skills){
			var formattedSkill = HTMLskills.replace("%data%",this.skills[skill]);
			$("#skills").append(formattedSkill);

		}


	}
};
bio.display();
var education = {"schools":
        [{"name":"A.Cuza. University",
        "location":"Iasi-Romania",
        "degree" :"Finance" ,
        "major":["economy","economy","informatics"],
        "dates":"15.06.2004",
        "url":"http://www.uaic.ro/"	

    }],
"onsiteCourses" :[ { "title" : "Creative web-development",
                   "school" :"ReDi School of Digital Integration",
                   "date" : "Oct  2016- Feb 2017",
                   "url" : "http://www.redi-school.org/"
                   },
                   {
                    "title" : "Back-end Development, Basic Java",
                   "school" :"ReDi School of Digital Integration",
                   "date" : "Oct 2016- Feb 2017",
                   "url" : "http://www.redi-school.org/"
	                 }
                   ],   
"onlineCourses":[  {"title":" Full-Stack Web-Development",
                   "school" :" Freecodecamp",
                   "date" : "Oct 2016 - present",
                    "url" : "https://www.freecodecamp.com"
                    },
                    {"title": "Web-Development",
                    "school" :"Careerfoundry",
                    "date" :"Ian 2017 - present",
                    "url" : "https://careerfoundry.com/en/"
                    },
                    {"title": "Make a site - Bootstrap",
                    "school" :"Codeacademy",
                    "date" :"Oct 2016 ",
                    "url" : "https://www.codecademy.com"
                    },


                     {"title":"Python for everbody",
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
      "display": function () {
      	for(var index in this.schools){
		    $("#education").append(HTMLschoolStart);
		    var educationLine = HTMLschoolName.replace("%data%",this.schools[index].name)+
		     HTMLschoolDegree.replace("%data%",this.schools[index].degree) + 
		    HTMLschoolDates.replace("%data%",this.schools[index].dates) + 
		    HTMLschoolLocation.replace("%data%",this.schools[index].location);
		    for ( var m in this.schools[index].major){ 
		    	educationLine = educationLine + HTMLschoolMajor.replace("%data%",this.schools[index].major[m]);

		    }
		    $(".education-entry:last").append(educationLine);    

		}
		$("#education").append(HTMLonlineClasses)

		for (var index in this.onlineCourses){
		    $("#education").append(HTMLschoolStart);
		    var educationLine = HTMLonlineURL.replace("%data%",this.onlineCourses[index].url) + 
		    HTMLonlineTitle.replace("%data%",this.onlineCourses[index].title)+
		    HTMLonlineSchool.replace("%data%",this.onlineCourses[index].school)+
		    HTMLonlineDates.replace("%data%", this.onlineCourses[index].date);
		    $(".education-entry:last").append(educationLine);

		}
		 $("#education").append(HTMLonsiteClasses)
		for (var index in this.onsiteCourses){
		    $("#education").append(HTMLschoolStart);
		    var educationLine = HTMLonsiteURL.replace("%data%",this.onsiteCourses[index].url) + 
		    HTMLonsiteTitle.replace("%data%",this.onsiteCourses[index].title)+
		    HTMLonsiteSchool.replace("%data%",this.onsiteCourses[index].school)+
		    HTMLonsiteDates.replace("%data%", this.onsiteCourses[index].date);
		    $(".education-entry:last").append(educationLine);

		} 

      }

}; 
education.display();
var work = {"jobs":
   [{
"title": "marketing research analist",
"employer": "Trend Test GmbH",
"location": "Berlin, Germany",
"dates": "1.05.2015-1.5.2016",
"description": "Explain about the research and how it’ll be used"
}, {
"title": "sales director",
"employer": "Briela",											
"location": "Botosani, Romania",
"dates": "15.06.2005-15.10.2012",
"description": "manage a sales team"
}],"display": function() { 
    for (var job in this.jobs) {
	  $("#workExperience").append(HTMLworkStart);
	  var workLine = HTMLworkEmployer.replace("%data%", this.jobs[job]['employer'])
	  + HTMLworkTitle.replace("%data%", this.jobs[job]["title"]);
	  console.log(workLine);
	  workLine = workLine + HTMLworkDates.replace("%data%", this.jobs[job]["dates"]);
	  workLine = workLine + HTMLworkLocation.replace("%data%", this.jobs[job]["location"]);
	  workLine = workLine + HTMLworkDescription.replace("%data%", this.jobs[job]["description"]);
	  
	  $(".work-entry:last").append(workLine);
	}  
}};
work.display();
//$(document).click(function(loc) {
//   logClicks(loc.screenX,loc.screenY);
//});
var projects = {
	"projects":[{
		"title":"Mobile app user acceptance testing",
		"dates":"10/11/2015-11/11/2015",
		"description":"Testing mobile apps following predefined steps and at the end writing a report with sugestions and conclusions, in order to help the design team to improve the user experience.",
		"images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNMXcxgRTHDHRjj97rEcXH3Y7C6ftIsMMx6BmD12PUPQXdXPQQg"],
        "url": "#"
    },
          {
          "title" : "Game of life",
          "dates" : "17/12/2016-21/12/2016",
          "description":" My first game app following the Conway's Game of Life rules",
          "images":[],
          "url": "https://gist.github.com/alinaberlin/1755e81d5000f34656948d0239be9521"
    }
	],
	"display": function () {



		for (var index in this.projects){
			$("#projects").append(HTMLprojectStart);
			var projectLine = HTMLprojectTitle.replace("%data%", this.projects[index].title).replace("%dataUrl%", this.projects[index].url) + 
			HTMLprojectDates.replace("%data%", this.projects[index].dates) +
			 HTMLprojectDescription.replace("%data%", this.projects[index].description);
			for (image in this.projects[index].images){
				projectLine = projectLine + HTMLprojectImage.replace("%data%", this.projects[index].images[image]);
			}
			$(".project-entry:last").append(projectLine);
			}
		}
}

projects.display();

/*$("#main").append(internationalizeButton);
function inName(){
	var names = bio.name.split(" ");
	var fName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lName = names[1].toUpperCase();
	return fName + " " + lName;
}*/
 
$("#mapDiv").append(googleMap);
initializeMap();
