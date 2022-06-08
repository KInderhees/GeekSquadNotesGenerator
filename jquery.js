/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
var win10 = document.getElementById('win10');
var win11 = document.getElementById('win11');
var pro = document.getElementById('pro');
var tuneup = document.getElementById('tuneup');
var diags = document.getElementById('diags');
var win10up = document.getElementById('win10up');
var win11up = document.getElementById('win11up');
var installed = document.getElementById('installed');
var zoom = document.getElementById('zoom');
var google = document.getElementById('google');
var firefox = document.getElementById('firefox');
var adobe = document.getElementById('adobe');
var itunes = document.getElementById('itunes');
var office = document.getElementById('office');
var wr = document.getElementById('wr');
var tm = document.getElementById('tm');










var initial = document.getElementById("initialsinput").value;
	

var textbox = document.getElementById('outputfield');

var str = "";
  
function updatebox(){
	var str = "";
	var verup2 = document.getElementById("verupinput2").value;
	var initial = document.getElementById("initialsinput").value;
	var user = document.getElementById("userinput").value;
	var addnotes = document.getElementById("addnotesinput").value;
	var gp = document.getElementById("gpinput").value;
	var fnf = document.getElementById("fnfinput").value;
	var data = document.getElementById("datainput").value;
	var infection = document.getElementById("infectioninput").value;
	var verup = document.getElementById("verupinput").value;
	var remove = document.getElementById("removeinput").value;
	var otherinstall = document.getElementById("otherinstallinput").value;
	
if(addnotesinput.value) // additional notes
    str+=addnotes + ", ";

  if(win10.checked) // windows 10 clean install
    str+="Performed clean install of windows 10 ";
	
  if(win11.checked) //windows 11 clean install
      str+="Performed clean install of windows 11, ";
	  
  if(pro.checked) // if its pro for clean installs
      str+="Pro ";
	  
  if(verupinput2.value) //version of clean windows
	str+="V." + verup2 + ", ";
	
  if(win10up.checked) // windows 10 update
      str+="Updated to latest version of windows 10, ";
	  
  if(win11up.checked) // windows 11 update
      str+="Updated to latest version of windows 11, ";
	  
   if(verupinput.value) // windows update version
	str+="V." + verup + ", ";
	
   if(userinput.value) // username
	str+= "Setup user profile as ( " + user + " ), ";
	
  if(datainput.value) // amount of data merged/transfered
	str+= "Transferred and merged: " + data + "GB of data,  ";
	
  if(fnfinput.value) // files not found
	str+= "removed (" + fnf + ") files not found, ";
	
  if(gpinput.value) // group polocies
	str+= "and (" + gp + ") group policies, ";
	
   if(infectioninput.value) // amount of infection
	str+= "Found and Removed: " + infection + " Traces of Infections, ";
	
  if(zoom.checked || google.checked || firefox.checked || adobe.checked || itunes.checked || office.checked || wr.checked || tm.checked || otherinstallinput.value) // installed software
      str+="Installed:  ";
	  
  if(zoom.checked)
      str+="Zoom, ";
  
  if(google.checked)
      str+="Google Chrome, ";
  
  if(firefox.checked)
      str+="Firefox, ";
  
  if(adobe.checked)
      str+="Adobe Reader, ";
  
  if(itunes.checked)
      str+="iTunes, " ;
  
  if(office.checked)
      str+="Microsoft Office, ";
  
  if(wr.checked)
      str+="WebRoot anti-virus, ";
  
  if(tm.checked)
      str+="TrendMicro anti-virus, ";
  
  if(otherinstallinput.value)
	str+= otherinstall + ", ";

  if(removeinput.value)
	str+= "removed, " + remove + ", ";

  if(diags.checked)
      str+="Ran hardware diagnostics (Passed), ";
  
  if(tuneup.checked)
      str+="as well as agent tune ups and optimizations,  ";
  
  if(initialsinput.value)
	str+= "Recommend client to return every 3-4 Months for subsequent tune-ups, Mission Complete! - " + initial ;


  textbox.value = str;

}
