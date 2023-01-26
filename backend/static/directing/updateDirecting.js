function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE Dim");
    fetch('http://127.0.0.1:8090/admin/directing/' + id, {
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
        document.getElementById('teamDirectors').value = data.teamDirectors;
        document.getElementById('directorID').value = data.directorID;
        document.getElementById('movieID').value = data.movieID;
        /// <a href="/admin/updateUser/${el.id}" class="btn btn-primary update" id = "updateUser">
    });

    document.getElementById('updateDirecting').addEventListener('click', e => {
            e.preventDefault();
           
            const data = {
                teamDirectors: document.getElementById('teamDirectors').value,
                directorID: document.getElementById('directorID').value,
                movieID: document.getElementById('movieID').value,
            };
    
            fetch('http://127.0.0.1:8090/admin/directing/'+id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.msg){
                    alert(data.msg);
                    return;
                }
                let up = confirm("Directing updated!");
            })
    
        });
}