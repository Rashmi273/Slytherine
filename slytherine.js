/*Slideshow javascript*/

function plusSlides(n) {
  showSlides(slideIndex += n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}


/*Payment address form javascript validation*/

function validatefullName()
{
  var n = document.getElementById("fullName").value;
  if(n.length>=4 && n.length<=25)
  {
    var i;
    var flag=0;
    for(i=0;i<n.length;i++)
    {
      if(n.charAt(i)>='0'&&n.charAt(i)<='9')
      {
        flag++;
      }
    }
    if(flag==0)
    {
      document.getElementById("Name").style.color = "green";
      document.getElementById("Name").innerHTML = "Valid";
      return true;
    }
    else
    {
      document.getElementById("Name").style.color = "red";
      document.getElementById("Name").innerHTML = "*Name should not contain digits*";
      return false;
    }
  }
  else
  {
    document.getElementById("Name").style.color = "red";
    document.getElementById("Name").innerHTML = "*Please enter 4-25 characters*";
    return false;
  }
}
function validatePhone()
{
  var p = document.getElementById("phone").value;
  if(p.length==10)
  {
    document.getElementById("sphone").style.color = "green";
    document.getElementById("sphone").innerHTML = "Valid";
    return true;
  }
  else
  {
    document.getElementById("sphone").style.color = "red";
    document.getElementById("sphone").innerHTML = "*Mobile Number should contain 10 digits*";
    return false;
  }
}
function validatePincode()
{
  var p = document.getElementById("pin").value;
  if(p.length==6)
  {
    document.getElementById("spin").style.color = "green";
    document.getElementById("spin").innerHTML = "Valid";
    return true;
  }
  else
  {
    document.getElementById("spin").style.color = "red";
    document.getElementById("spin").innerHTML = "*Pincode contains 6 digits*";
    return false;
  }
}


/*payment gateway form javascript validation*/

function validateName()
{
  var n = document.getElementById("name").value;
  if(n.length >= 4 && n.length <= 25)
  {
    var i;
    var flag = 0;
    for(i = 0; i < n.length; i++)
    {
      if(n.charAt(i) >= '0' && n.charAt(i) <= '9')
        flag++;
    }
    if(flag == 0)
    {
      document.getElementById("sname").style.color = "green";
      document.getElementById("sname").innerHTML = "valid";
    }
    else
    {
      document.getElementById("sname").style.color = "red";
      document.getElementById("sname").innerHTML = "*Name should not contain digits*";
    }
  }
  else
  {
    document.getElementById("sname").style.color = "red";
    document.getElementById("sname").innerHTML = "*Please enter 4-25 characters*";
  }
}

function validateCard()
{
  var n = document.getElementById("card").value;
  if(n.length == 16)
  {
    document.getElementById("scard").style.color = "green";
    document.getElementById("scard").innerHTML = "valid";
  }
  else
  {
    document.getElementById("scard").style.color = "red";
    document.getElementById("scard").innerHTML = "*Please enter 16 digit card number*";
  }
}

/*Add to cart js*/
 function addToCart()
 {
   alert("Item has been added to cart. :)");
 }


/*Sign up form javascript validation*/

function validateUsername()
{
  var n = document.getElementById("username").value;
  if(n.length>=4 && n.length<=25)
  {
    var i;
    var flag=0;
    for(i=0;i<n.length;i++)
    {
      if(n.charAt(i)>='0'&&n.charAt(i)<='9')
      {
        flag++;
      }
    }
    if(flag==0)
    {
      document.getElementById("susername").style.color = "green";
      document.getElementById("susername").innerHTML = "Valid";
      return true;
    }
    else
    {
      document.getElementById("susername").style.color = "red";
      document.getElementById("susername").innerHTML = "*Name should not contain digits*";
      return false;
    }
  }
  else
  {
    document.getElementById("susername").style.color = "red";
    document.getElementById("susername").innerHTML = "*Please enter 4-25 characters*";
    return false;
  }
}

function validateMobileNumber()
{
  var p = document.getElementById("mobileNumber").value;
  if(p.length==10)
  {
    document.getElementById("smobileNumber").style.color = "green";
    document.getElementById("smobileNumber").innerHTML = "Valid";
    return true;
  }
  else
  {
    document.getElementById("smobileNumber").style.color = "red";
    document.getElementById("smobileNumber").innerHTML = "*Mobile Number should contain 10 digits*";
    return false;
  }
}

function validatePass()
{
  var n = document.getElementById("password").value;
  if(n.length>=6 && n.length<=25)
  {
    document.getElementById("spassword").style.color = "green";
    document.getElementById("spassword").innerHTML = "Valid";
    return true;
  }
  else
  {
    document.getElementById("spassword").style.color = "red";
    document.getElementById("spassword").innerHTML = "*Please enter 6-25 characters*";
    return false;
  }
}

function confirmPass()
{
  var n = document.getElementById("password").value;
  var m = document.getElementById("conpass").value;
  if(n==m)
  {
    document.getElementById("sconpass").style.color = "green";
    document.getElementById("sconpass").innerHTML = "Password Matched";
  }
  else
  {
    document.getElementById("sconpass").style.color = "red";
    document.getElementById("sconpass").innerHTML = "*Password not Matched*";
  }
}
 function validateEmail()
 {
   var n = document.getElementById("email").value;
   var flag=0;
   for(i=0;i<n.length;i++)
   {
     if(n.charAt(i)=='@')
       flag++;
   }
   if(flag==0)
   {
     document.getElementById("semail").style.color = "red";
     document.getElementById("semail").innerHTML = "*Email ID not valid*";
   }
   else
   {
     document.getElementById("semail").style.color = "green";
     document.getElementById("semail").innerHTML = "Valid";
   }
 }

/*Login form validation javascript*/

function validateUser()
{
  var user = document.getElementById('user').value;
  if(user.length >= 4 && user.length <= 25)
  {
    document.getElementById('username').style.color = "green";
    document.getElementById('username').innerHTML = "Valid";
  }
  else
  {
    document.getElementById('username').style.color = "red";
    document.getElementById('username').innerHTML = "*Please enter 4-25 characters*";
  }
}

function validatePass()
{
  var pass = document.getElementById('pass').value;
  if(pass.length >= 6 && pass.length <= 25)
  {
    document.getElementById('usep').style.color = "green";
    document.getElementById('usep').innerHTML = "Valid";
  }
  else
  {
    document.getElementById('usep').style.color = "red";
    document.getElementById('usep').innerHTML = "*Please enter 6-25 characters*";
  }
}


/*book store alert function*/

function book()
{
  alert("Check out our bookstore 'SlytherineBooks' to order this . There you will get much more exciting offers 😃");
}
