function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8000/api/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.email}</li>`;
            });
        });

    fetch('http://127.0.0.1:8000/api/messages', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('msgLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Body: ${el.body}, User: ${el.user.id}</li>`;
            });
        });

    document.getElementById('msgBtn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            body: document.getElementById('body').value
        };

        document.getElementById('body').value = '';

        fetch('http://127.0.0.1:8000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    alert(el.msg);
                } else {
                    document.getElementById('msgLst').innerHTML += `<li>ID: ${el.id}, Body: ${el.body}</li>`;
                }
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}