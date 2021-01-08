document.getElementById('logoutForm').addEventListener('submit',logoutFunc);
function logoutFunc(e){
    e.preventDefault();
    auth.signOut().then(()=>{
        alert('user signed out');
        window.location.replace('login.html');
    })  
}   