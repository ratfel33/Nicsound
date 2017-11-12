

 console.log("HOLA");

 const txemail = document.getElementById('txtmail');
 const txpass = document.getElementById('txtpass');
 const btnlog = document.getElementById('btnlog');
// const btnout = document.getElementById('btsalir');
// const mensaje = document.getElementById('errorlog');


const auth = firebase.auth();


 btnlog.addEventListener('click', e =>
{

  const email = txemail.value;
  const pass = txpass.value;
  const promise  = auth.signInWithEmailAndPassword(email, pass);
  promise.catch (e => console.log(e.message));


// sesiones inicia aqui:

firebase.auth().onAuthStateChanged(firebaseUser =>
{
  if (firebaseUser)
  {
    console.log('logeado');
      console.log(firebaseUser);

     location.href="main.html";

  }
  else
  {
    console.log('No logeado');
      
      document.getElementById('errorlog').style.display ="block";
      document.getElementById('txtmail').value="";
      document.getElementById('txtpass').value="";
     


  }
});
}
);


//  location.href="login-page.html";


/*
btnout.addEventListener('click', e =>
{
  firebase.auth().signOut();
  console.log('sesion cerrada');
  location.href="login-page.html";
}
);*/
