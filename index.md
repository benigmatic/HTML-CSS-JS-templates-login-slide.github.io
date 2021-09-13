<!DOCTYPE html><html>
<head>
	<title>Login-Slider-Page</title>
  <script src="./js/md5.js"></script>
	<script type="text/javascript" src="code.js"></script>
    <link rel="stylesheet" href="styles.css" >	
    

  </head>
<body> 
  <div class="container">
    <h1>Contact Manager App</h1>
    <!--switch between register and login-->
    <div class="form">
      <div class="switch-box">
        <div id="btn"></div>
        <button type="button" class="switch" onClick="loginSwitch()"> Log in</button>
        <button type="button" class="switch" onClick="registerSwitch()"> Register</button>
      </div>
      <div id="login" class="input-form" >
        
        <input type="text" class="input-field" placeholder="Username" id="login-username" required>
        <input type="password" class="input-field" placeholder="Password" id="password-username" required>   
        <button type="submit" class="submit-btn" onClick="login()">Log in</button> 
        <span id="loginResult" class="Error"></span>
      </div>
      <div id="register" class="input-form">
        <input type="text" class="input-field" placeholder="First Name" id="reg-first-name" required>
        <input type="text" class="input-field" placeholder="Last Name" id="reg-last-name" required>
        <input type="text" class="input-field" placeholder="Username" id="reg-username" required>
        <input type="password" class="input-field" placeholder="Password" id="reg-password" required>
        <input type="password" class="input-field" placeholder="Confirm your password" id="reg-confirm" required>   
        <button type="submit" class="submit-btn" onClick="register()">Sign up</button> 
        <span id="registerResult" class= "Error"></span>
      </div>
    </div> <!--end form-->
     </div>
     <script>       
       
     </script>
</body>

</html>
