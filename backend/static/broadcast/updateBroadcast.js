function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE broadcast");
    fetch('http://127.0.0.1:8090/admin/broadcast/' + id, {
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
//dimensionID
//cinemaID
//movieID
        document.getElementById('dimensionID').value = data.dimensionID;
        document.getElementById('cinemaID').value = data.cinemaID;
        document.getElementById('movieID').value = data.movieID;
        /// <a href="/admin/updateUser/${el.id}" class="btn btn-primary update" id = "updateUser">
    });

    document.getElementById('updateBroadcast').addEventListener('click', e => {
            e.preventDefault();
           
            const data = {
                dimensionID: document.getElementById('dimensionID').value,
                cinemaID: document.getElementById('cinemaID').value,
                movieID: document.getElementById('movieID').value,
            };
    
            fetch('http://127.0.0.1:8090/admin/broadcast/'+id, {
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
                console.log(movieID.value+"  fdgbfdg");
                let up = confirm("Broadcast updated!");
            })
    
        });
}