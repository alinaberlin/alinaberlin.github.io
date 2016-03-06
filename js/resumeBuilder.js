

var bio = {"name":"Alina Ghetler","role":"Junior Developer",
 "skils": "skils", "telefonNumber": "0123456789","email":"alina.ghetler@gmail.com", "pictureUrl": "http://t1.gstatic.com/images?q=tbn:ANd9GcRI6C_T0Gc7gfNXs-sfvYYqxeoH2Mb-KnTPSAEZ3miDFYqjIkMZw68P",
"welcomeMessage":"Hello that's me!"};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
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
