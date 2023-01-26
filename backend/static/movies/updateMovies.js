

function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE GENRE");
    fetch('http://127.0.0.1:8090/admin/movies/' + id, {
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
        document.getElementById('name').value = data.name;
        document.getElementById('genreID').value = data.genreID;
        /// <a href="/admin/updateUser/${el.id}" class="btn btn-primary update" id = "updateUser">
    });

    document.getElementById('updateMovies').addEventListener('click', e => {
            e.preventDefault();
           
            const data = {
                name: document.getElementById('name').value,
                genreID: document.getElementById('genreID').value,
            };
            

            fetch('http://127.0.0.1:8090/admin/movies/'+id, {
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
                let up = confirm("Genre updated!");
            })
    
        });
}