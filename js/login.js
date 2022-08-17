document.getElementById("btn").addEventListener("click", function() {
  const getUserMail= document.getElementById('user-email')
  const userMail = getUserMail.value;

  const getUserPasword = document.getElementById('user-pass') 
  const userPassword= getUserPasword.value;

  if (userMail === 'mahamud@gmail.com' && userPassword ==='12345')
  {
    window.location.href = "dashboard.html"
  }
  else {
    alert("please, Enter valid Email or Password!")
  }

})