function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE USER");
    fetch('http://127.0.0.1:8090/admin/users/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
    })
    .then( res => res.json() )
    .then( data => {
        if(data.msg){
            alert(data.msg);
          
            return;
        }
       // console.log(data.firstName);
        document.getElementById('name').value = data.name;
//document.getElementById('firstName').value = data.firstName;
  //      document.getElementById('lastName').value = data.lastName;
        document.getElementById('email').value = data.email;
        document.getElementById('password').value = data.password;
        document.getElementById('admin').checked = data.admin;
        document.getElementById('moderator').checked = data.moderator;
        /// <a href="/admin/updateUser/${el.id}" class="btn btn-primary update" id = "updateUser">
    });

    document.getElementById('updateUsr').addEventListener('click', e => {
            e.preventDefault();
           
            let adm = false;
            let mod = false;
            if(document.getElementById('admin').checked)
                adm = true;
            if(document.getElementById('moderator').checked)
                mod = true;
            const data = {
           //     firstName: document.getElementById('firstName').value,
           //     lastName: document.getElementById('lastName').value,
                name: document.getElementById('name').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
                admin: adm,
                moderator: mod,
            };
    
            fetch('http://127.0.0.1:8090/admin/users/'+id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data+"gfgfsdg");
              //  if(data.msg==="firstName is srequired\n lastName is required\n"){
                if(data.msg){
                    console.log(data);
                    alert(data.msg);
                    return;
             //   }
            }
                let up = confirm("User updated!");
            })
    
        });
}