document.getElementById('signupForm').addEventListener('submit',signupFunc);
function signupFunc(e){
    e.preventDefault();
    const email=document.getElementById('email').value;  //using getinputid we will collect the data from the user that is store is that input id
    const pass=document.getElementById('pass').value;
                                    //var email=signupform['email']
    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
        document.getElementById('signupForm').reset()  
    })
    alert('user added');

}
document.getElementById('loginForm').addEventListener('submit',loginFunc);
function loginFunc(e){
    e.preventDefault();
    const email=document.getElementById('lEmail').value;  
    const pass=document.getElementById('lpass').value;
    auth.signInWithEmailAndPassword(email,pass).then(cred=>{
        document.getElementById('loginForm').reset()  
          alert('user logged in');
    window.location.replace('logout.html');
    })
  
}