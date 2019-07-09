
//Data Section

var contactDetails = "Name : CHAHAT SHARMA \n, Phone:+91-9582293201, +91-8559053912, Email-chahatsharma1993@gmail.com";

var firstDivWithHeading = {"CAREER OBJECTIVE:": `To achieve organizational excellence with drive, initiative and commitment and come up in life as a talented professional inn any organization providing excellent growth opportunities, professional satisfaction and challenging work environment. A keen interest inn IT infrastructure management,
NMS/EMS innovation and exploitation off tools and processes too increase efficiency and reduce cost`,
"boldSection": "( 3.5 year off Professional Experience withh Wipro, working since January 2016 )"};

var secondDivWithHeading = {"Objective:" : "To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var thirdDivWithHeading = {"Projects": "key projects worked in"};

var firstTableData = {
"IT Infrastructure Tools": "HP OMI,HP OMW,HP OBR, HP NNM, HP SIS", 
"OS Platforms": "Windows And Linux", 
"Languages/Scripting":"C, SQL, bash shell",
"Databases -": "MS SQL,Vertica"
};

var firstBulletSection = {"PROFESSIONAL SUMMARY": [`A technocrat with overall 3.5 yrs of experience in NMS/EMS Designing, and
Troubleshooting/Technical Support.`,
" Presently associated with Wipro Ltd. as Administrator (Engineer) (HP) Tools.",
"Experienced in Enterprise Management System for HP suite: OMI, OMW, OBR and NNM.", "Skilled and disciplined in ITIL mainly Incident, Change Management and Problem Management practices and processes."]};

var secondBulletSection = {"CLIENT SERVICING": ["Managing customer service operations for rendering and achieving quality services.","Responsible for resolving customer complaints on performance bottlenecks.", "Providing value added customer services by attending customer queries and issues.", "Defining new processes and deployment of tools to continuously improve the Quality and efficiency of the team. Working with the team in carrying out installations, upgrades, patch management, research and changes as required."]};


var thirdBulletSection = {"BEHAVIORAL SKILLS":["IUnderstanding the technological needs of the business and end users and keeping them in mind when taking actions or making decisions.", "Taking innovative approaches to problem solving and creative solutions.", "Working co-operatively (rather than competitively) with others to achieve a common goal", "Interacting with team members, outsourcing agencies, customers and vendors for integration of operations, computer hardware, operating systems, communications, software applications and data processing while concern schedules, Budget and maximize the benefit of the product."]};

var fourthDivWithHeading = {"ORGANIZATIONAL EXPERIENCE" : ""};
var fithDivWithHeading = {"Centre for Railway Information System: " : "Responsible for Implementation of Products:  HP OMI, HP NNM, HP OMW, HP Site Scope, & HP OBR of CRIS infrastructure."};

var fourthBulletSection = {"HP OMI":["Configuration of Topology and Event syncing with NNM, OBR and OMW.", "Creation of Monitoring Dashboards with respective Business Views/Models and KPI/HI/ETI assignments for User monitoring","Configuration of custom business rules, propagation rules, KPI assignment rules and Event Suppression rules for different CI types.", "Installation and Integration with Other tools", "Creation of User accounts for the user view perspective."]};


var fifthBulletSection = {"HP OMW":["Enabled the monitoring of servers in environment by installing agents.", "Installed and upgraded the HP OMW.","Configuration of different custom policies on servers.","Created different user groups and accounts with their respective policy assignments."]};

var sixthBulletSection = {"HP OBR":["Integrated with HP OMI/Agents for server reporting and with HP NNM for Network reporting.", "Worked on Vertica DB and upgradation of HP OBR along with Vertica.","Configured the OBR for data collection from sources.","Designed the counterparts of reports by SAP BO."]};

var seventhBulletSection = {"HP SiteScope":["Enabled the URL Monitoring.", "Configured connected servers forr their performance monitoring.","Enabled the monitoring of Non-SNMP devices (Network& Server)."]};

var eighthBulletSection = { "HP NNM":["Integrated withh OBR and OMI forr further Performance views and reports.", "Monitoring enabled for SNMP and ICMP devices.","Configured the custom node groups and security groups for monitoring of large network devices under their different tenant NNMs.","Handle the traffic reports and its issues.","Reporting management by NPS for current data checks and OBR for any historical checks."]};

var ninethBulletSection = { "REWARDS AND RECOGNITION":["Received the Appreciation certificate and recognition for my efforts in CRIS.", "Received the Winner circle applause for my consistent performance.","Client appreciation for timely deliverables and quick responses during implementation.","Recognized by my Seniors and upper management for providing fruitful and quick solutions in project."]};

var sixthDivWithHeading = {"ACADEMICS " : ""};
var secondTableData = {
"2011-2015": "Chitkara University  BE(ECE) - 8.28 (CGPA)", 
"2011(12th)": "Govt Model Senior Secondary School-16, Chandigarh - 85.4%                                                 ", 
"2009(10th)":"Manav Mangal School, Panchkula - 93.2%"

};


var seventhDivWithHeading = {"PERSONAL INFORMATION" : ""};
var thirdTableData = {
"Father’s Name": "Krishan Kumar Sharma", 
"Mother’s Name": "Raj Bala Sharma", 
"Nationality": "Indian", 
"Languages":"English, Hindi",
"Permanent Address -": "2886 Sector 15 Panchkula Haryana 134113",
"Passport":"L4852582",
" Phone":	"+91-9582293201,  +91-8559053912",
"Email":"chahatsharma1993@gmail.com "

};

buildResume();
function buildResume(){
	
	addImage("./CuteDog.jpg", "myImage", "myImageClass");
	buildSections("div", "hiddenContact", "mainBody", "hiddenClass",  contactDetails );
	breakLineDiv("firstBreak", "hr");
	
	buildSectionWithHeading(firstDivWithHeading, "firstDiv", "mainBody", "divClass");
	breakLineDiv("secondBreak","br");

	buildSectionWithHeading(secondDivWithHeading, "secondDiv", "mainBody", "divClass");
	breakLineDiv("thirdBreak","hr");

	buildSectionWithHeading(thirdDivWithHeading, "thirdDiv", "mainBody", "divClass");
	buildTable(firstTableData, "table", "firstTable", "mainBody", "myTable");
	breakLineDiv("fourthBreak","hr");

	buildBulletSection(firstBulletSection,"firstBulletSection", "bulletSection", "mainBody");
	buildBulletSection(secondBulletSection,"secondBulletSection", "bulletSection", "mainBody");
	buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");
	
	breakLineDiv("fifthBreak","hr");
	
	buildSectionWithHeading(fourthDivWithHeading, "fourthDiv", "mainBody", "divClass");
	
	breakLineDiv("sixthBreak","hr");
	buildSectionWithHeading(fithDivWithHeading, "fifthDiv", "mainBody", "divClass");
	
	buildBulletSection(fourthBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
	buildBulletSection(fifthBulletSection,"fifthBulletSection", "bulletSection", "mainBody");
	
	buildBulletSection(sixthBulletSection,"sixthBulletSection", "bulletSection", "mainBody");
	buildBulletSection(seventhBulletSection,"seventhBulletSection", "bulletSection", "mainBody");
    buildBulletSection(eighthBulletSection,"eighthBulletSection", "bulletSection", "mainBody");
	
	breakLineDiv("seventhBreak","hr");
    buildBulletSection(ninethBulletSection,"ninethBulletSection", "bulletSection", "mainBody");
	
	breakLineDiv("eighthBreak","hr");
	buildSectionWithHeading(sixthDivWithHeading, "sixthDiv", "mainBody", "divClass");
	buildTable(secondTableData, "table", "secondTable", "mainBody", "myTable");
	breakLineDiv("ninethBreak","hr");
	
	buildSectionWithHeading(seventhDivWithHeading, "seventhDiv", "mainBody", "divClass");
	buildTable(thirdTableData, "table", "thirdTable", "mainBody", "myTable");

	breakLineDiv("tenthBreak","hr");
	crateButton("Download Resume", "BUTTON", "downloadResume", "myResumeButton", downloadResume, "mainBody")

}






function buildBulletSection(bulletSection, id, className, parrentID){
    Object.keys(bulletSection).forEach(function(key) {
		buildSections("ul", id, parrentID, className, key);
     	    bulletSection[key].forEach(function(entry) {
		    var childId = "child" + id;
			var childClassName = "child"+className;			
		    buildSections("li", childId, id, childClassName, entry);
        });
    });	
}

function buildSections(type, idToBeCreated, parentElementId, className,  content){
    var elementBuilt = document.createElement(type);
	elementBuilt.classList.add(className);
    elementBuilt.id = idToBeCreated;
	if(content != '' || content != undefined){
		elementBuilt.innerHTML = content;
	}
    document.getElementById(parentElementId).appendChild(elementBuilt);
}




//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}


function addImage(imagePath, id,className){
	var element = document.createElement('img');
	element.classList.add(className);
	element.src= imagePath;
	element.id=id;
	element.style.width = 170 + "px";
	element.style.height = 170 + "px";
	document.body.appendChild(element);
}

function breakLineDiv(id, type){
	buildSections("div", id, "mainBody", "breakDivsion", "");
	var childId = "child"+id;
	buildSections(type, childId, id, "newLine", "");
	
}

function buildSectionWithHeading(divSection, id, parrentID, className){
	Object.keys(divSection).forEach(function(key) {
		entry = divSection[key];
		var childId = "child" + id;
		if(key == "boldSection"){    
			var childClassName = "bold"+className;			
		    buildSections("div", childId, id, childClassName, entry);
        }else{
			buildSections("div", id, parrentID, className, key);
			var childClassName = "child"+className;
			buildSections("div", childId, id, childClassName, entry);
		}	
	});
}



function buildTable(tableData, type, idToBeCreated, parentElementId, className){
	buildSections(type, idToBeCreated, parentElementId, className, "" );
	Object.keys(tableData).forEach(function(key) {
		ceateRowforTable(idToBeCreated, key, tableData[key])
	});
}

function ceateRowforTable(id,  cellOne, cellSecond){
	var table = document.getElementById(id);
	if(cellOne != ""){
		var row = table.insertRow(-1);
		row.classList.add("tableRow");
		var firstCell = row.insertCell(0);
		
		firstCell.innerHTML = cellOne;
	}
	if(cellSecond != ""){
		var secondCell = row.insertCell(1);
		secondCell.innerHTML = cellSecond;
		firstCell.classList.add("tableCell");
		secondCell.classList.add("tableCell");
	}
}

function crateButton(content, type, id, className, behaviour, parentId){
    buildSections(type, id, parentId, className,  content);
	document.getElementById(id).addEventListener("click", behaviour);
}

function downloadResume() {
    var link = document.createElement('a');
    link.href = "https://github.com/SuyashGupta8/ChahatSharma/blob/master/Chahat_Sharma_resume.docx";//updated
    link.download = 'Chahat_Sharma_resume.docx';
    link.dispatchEvent(new MouseEvent('click'));
	}
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}


//BAckup
//Refactoring
//mobile bsed
//css attribute or bootstrap grid
//resume export option
