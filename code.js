 var urlBase = 'http://cop4331-group16.xyz/LAMPAPI';
var extension = 'php';
var contactList = [];
var userId = 0;
var tempid="";
//Cookies
function saveCookie()
{ 
	alert("this cookie:");
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	alert('test');
	alert(this.firstName);
	alert("test2");
	document.cookie = "firstName=" + firstName + ",lastName=" + lastName + ",userId=" + userId + ";expires=" + date.toGMTString();
	alert("document.cookie created");
}

function readCookie()
{
	userId = -1;
	var data = document.cookie;
	var splits = data.split(",");
	for(var i = 0; i < splits.length; i++) 
	{
		var thisOne = splits[i].trim();
		var tokens = thisOne.split("=");
		if( tokens[0] == "firstName" )
		{
			firstName = tokens[1];
		}
		else if( tokens[0] == "lastName" )
		{
			lastName = tokens[1];
		}
		else if( tokens[0] == "userId" )
		{
			userId = parseInt( tokens[1].trim() );
		}
	}
	
	if( userId < 0 )
	{
		
		//window.location.href = "./index.html";
	}
	else
	{
		document.getElementById("userName").innerHTML = "Logged in as " + firstName + " " + lastName;
	}
	document.getElementById("userName").innerHTML= "Username";
}
// toggle functions
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function loginSwitch(){
	
	document.getElementById("login").style.left="50px";
	document.getElementById("register").style.left="450px";
	document.getElementById("btn").style.left="0px";
}
function registerSwitch(){
	document.getElementById("login").style.left="-400px";
	document.getElementById("register").style.left="50px";
	document.getElementById("btn").style.left="110px";
}


// functionality
function login(){



	var login = document.getElementById("login-username").value;
	alert(login);
	var password = document.getElementById("password-username").value;
	var hash = md5( password );
	document.getElementById("loginResult").innerHTML = " Test";



var object = new Object();
	object.login = login;
	object.password= hash;	
	
	var jsonPayload = JSON.stringify(object);
	
	var url = urlBase + '/Login.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				var jsonObject = JSON.parse( xhr.responseText );
				userId = jsonObject.id;
		
				if( userId < 1 )
				{		
					document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
					return;
				}
		
				firstName = jsonObject.firstName;
				lastName = jsonObject.lastName;

				saveCookie(fistName, LastName, userId);
	
				window.location.href = "./contact.html";
				
			} 
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("loginResult").innerHTML = err.message;
	}
	
	
	window.location.href="./contact.html";
return false;

}
function ValidatePassword(pass1, pass2){
 if(pass1=="") return false; 
 if(pass1 != pass2) return false; 
 return true;
}
function saveRegCookie()
{ 
	alert("this cookie:");
	var minutes = 20;
	var date = new Date();
	date.setTime(date.getTime()+(minutes*60*1000));	
	alert('test');
	alert(firstRegName);
	alert("test2");
	document.cookie = "firstName=" + firstRegName + ",lastName=" + lastRegName + ",userId=" + userId + ";expires=" + date.toGMTString();
	alert("document.cookie created");
}
function register(){
	
	
	userId = 0;
	
 	var firstname = document.getElementById("reg-first-name").value;
	var lastname = document.getElementById("reg-last-name").value;
	var userName = document.getElementById("reg-username").value;
	var password = document.getElementById("reg-password").value;
	var password2 = document.getElementById("reg-confirm").value;	
	var date = new Date();
	var json= JSON.stringify(date);
    if (!ValidatePassword(password, password2)){
		alert("Password don't match");
		return;
	} 
	var hash = md5( password );
	

	userId=1;
	alert("saving cookie");
	firstRegName=firstname;
	lastRegName=lastname;
	saveRegCookie();
	alert("Saved Cookie");
	
	document.getElementById("registerResult").innerHTML = "";
	
	// create json payload
	var object = new Object();
	object.firstName = firstname;
	object.lastName= lastname;
	object.username=userName;
	
	var jsonPayload = JSON.stringify(object);
 alert(jsonPayload);
	//TODO: change to a different path to php file for login
	var url = urlBase + '/Register.' + extension;

	/*
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				var jsonObject = JSON.parse( xhr.responseText );
				userId = jsonObject.id;
		
						
				firstName = jsonObject.firstName;
				lastName = jsonObject.lastName;
				username=jsonObject.username;

				
	
				window.location.href = "./contact.html";
				
			} 
		};
		xhr.send(jsonPayload);
	}
	catch(err)
	{
		document.getElementById("registerResult").innerHTML = err.message;
	}
 */

	window.location.href = "contact.html";
	document.getElementById("userName").innerHTML = "Hello,  " + firstName + " " + lastName;
	
return false;
}
 function logOut(){
   // delete the coockie
   window.location.href="./index.html";
 }
 function searchContact(){
	
	 var srch= document.getElementById("SearchText").value;
	 document.getElementById('id04').style.display='block';
	 document.getElementById("SearchResult").innerHTML = "";

	 // json Payload:
	 var object = new Object();
	 object.search = srch;

	
	 

			var	jsonObjects = [
					"FirstName , LastName, 407-344-6714, email",
					"AnotherName , LastName, 407-344-6714, email",
					"FirstName , LastName, 407-344-6714, email",
					"FirstName , LastName, 407-344-6714, email",
					"Different Name, Name, 407-344-6714, email",
					"FirstName , LastName, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"TestName, TestLast, 407-344-6714, email@gmail.com",
					"Test, Test, 407-344-6714, email",
					"Test, Test, 407-344-6714, email",
					"FirstName , LastName, 407-344-6714, email"
				
				];
				// alert(jsonObjects.length);
				
			
								for( var i=0; i<jsonObjects.length; i++ )
				{
					
					let newStr = jsonObjects[i].replace(',',' ');
					
				contactList[i]= newStr + "<br />";
					// alert(newStr);	 
				document.getElementById("SearchResult").innerHTML += contactList[i]+"<br />";
				//buttons
				//version 1:
				//EDIT:
				var btn = document.createElement('BUTTON');
				btn.className="EditButton";
				btn.innerHTML="Edit";
				btn.value = i;
			     document.getElementById("SearchResult").appendChild(btn);
				 //DELETE
				 var btnDel = document.createElement("button");
				 btnDel.className="DeleteButton";
				 btnDel.innerHTML="Delete";
				 btnDel.value = i;
			     document.getElementById("SearchResult").appendChild(btnDel);
				// version 2: 
				 // var buttons = " <button class='edit-btn' onClick=\" searchEdit(tempInput);\">Edit</button>   <button class='edit-btn' onClick=\" searchDelete();\">Delete</button>";
				 //adding the line between contacts
				 document.getElementById("SearchResult").innerHTML+= "<br /><hr />\n";
                
						
				}
				
				var btns = document.querySelectorAll(".EditButton");
				btns.forEach(btn => {
					btn.onclick = function() { searchEdit(btn.value);
					};
				  });
				  var btnsDel = document.querySelectorAll(".DeleteButton");
				btnsDel.forEach(btnDel=> {
					btnDel.onclick = function() {searchDelete(btnDel.value);
					};
				  });
				  
			
	 
 }
 function addContact(){
	 alert("Add contact");
	var firstname = document.getElementById("add-firstname").value;
	var lastname = document.getElementById("add-lastname").value;
	var addPhone = document.getElementById("add-phone").value;
	var addEmail = document.getElementById("add-email").value;
	var object = new Object ();
	object.firstName=firstname;
	object.lastName =lastname;
	object.phone = addPhone;
	object.email = addEmail;

	var jsonPayload = JSON.stringify(object);
	var url = urlBase + '/AddContact.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				var jsonObject = JSON.parse( xhr.responseText );
				
			} 
		};

		//alert(jsonPayload);
		xhr.send(jsonPayload);
		document.getElementById('id01').style.display='none';
		document.getElementById("add-result").innerHTML = "";
	}
	catch(err)
	{
		document.getElementById("add-result").innerHTML = err.message;
	}
	// alert("Contact was added");
	
 }
 function editContact(){
	 alert("Edit Contact function");
	var obj = new Object();
	obj.FirstName = document.getElementById("edit-firstname").value;
	obj.LastName = document.getElementById("edit-lastname").value;
	obj.Phone = document.getElementById("edit-phone").value;
	obj.Email = document.getElementById("edit-email").value;
	obj.ID=tempid;
	
	alert(obj.ID);

	var jsonPayload = JSON.stringify(obj);
	alert(jsonPayload);
	var url = urlBase + '/EditContact.' + extension;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	try
	{
		xhr.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200) 
			{
				var jsonObject = JSON.parse( xhr.responseText );
				
			} 
		};

		//alert(jsonPayload);
		xhr.send(jsonPayload);
		document.getElementById('edit-modal').style.display='none';
		document.getElementById("edit-result").innerHTML = "";
	}
	catch(err)
	{
		document.getElementById("edit-result").innerHTML = err.message;
	}
	
}
 function deleteContact(){
	// var idvalue = ;
	 var firstName = document.getElementById("delete-firstname").value;
	 var lastName = document.getElementById("delete-lastname").value;
	var choice= confirm("Are you sure you want to delete " + firstName + " "+ lastName +"?")
if (choice){
    var object = new Object ();
	object.firstName=firstname;
	object.lastName =lastname; 

var jsonPayload = JSON.stringify(object);
var url = urlBase + '/DeleteContact.' + extension;

var xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
try
{
	xhr.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			var jsonObject = JSON.parse( xhr.responseText );
			
		} 
	};

	//alert(jsonPayload);
	xhr.send(jsonPayload);
	document.getElementById('id03').style.display='none';
	document.getElementById("delete-result").innerHTML = "";
}
catch(err)
{
	document.getElementById("delete-result").innerHTML = err.message;
}
}
document.getElementById('id03').style.display='none';
 }
 function searchDelete(id){

alert("Choice");
	var choice= confirm("Are you sure you want to delete this contact?");
	
	if (choice){
		var object = new Object ();
	object.ID=ID;
	// send json paylpad for delete here
	}
   
 }
 function searchEdit(id){
	
	document.getElementById('edit-modal').style.display='inline';
	// Saves the id of the contaCt to delete
    tempid = id;
	
 }



