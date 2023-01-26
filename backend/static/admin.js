/** 
const res = require("express/lib/response");
const { redirect } = require("express/lib/response");
*/

function init() {
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    document.getElementById('admin').addEventListener('click', e => {
        console.log("tok" + token);
        if(token === ''){
            alert('You are not logged in!');
         ///   window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
            let payload = token.split('.')[1];
            let res = JSON.parse(atob(payload));
            console.log(res);
            let id = res.userId;
            console.log(id);

            window.location.href = 'http://127.0.0.1:8000/admin/users';
       }
        
    });
    document.getElementById('movies').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/movies';
        }
        
    });
    document.getElementById('cinema').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/cinema';
        }
        
    });
    document.getElementById('dimension').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/dimension';
        }
        
    });
    document.getElementById('actor').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/actor';
        }
        
    });
    document.getElementById('director').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/director';
        }
        
    });
    document.getElementById('cinema').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/cinema';
        }
        
    });
    document.getElementById('directing').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/directing';
        }
        
    });
    document.getElementById('seat').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/seat';
        }
        
    });
    document.getElementById('genre').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/genre';
        }
        
    });
    document.getElementById('cast').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/cast';
        }
        
    });
    document.getElementById('broadcast').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/broadcast';
        }
        
    });
    document.getElementById('reservation').addEventListener('click', e => {
        if(token === ''){
            alert('You are not logged in!');
            window.location.href = 'http://127.0.0.1:8000/login';
        }
        else{
           window.location.href = 'http://127.0.0.1:8000/admin/reservation';
        }
        
    });
    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/login';
    });
}