function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE reservation");
    fetch('http://127.0.0.1:8090/admin/reservation/' + id, {
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
        //Name
        //broadcastID
        //seatID
        //userID
        document.getElementById('Name').value = data.Name;
        document.getElementById('broadcastID').value = data.broadcastID;
        document.getElementById('seatID').value = data.seatID;
        document.getElementById('userID').value = data.userID;

    });

    document.getElementById('updateReservation').addEventListener('click', e => {
            e.preventDefault();
           
            const data = {
                Name: document.getElementById('Name').value,
                broadcastID: document.getElementById('broadcastID').value,
                seatID: document.getElementById('seatID').value,
                userID: document.getElementById('userID').value,
            };
    
            fetch('http://127.0.0.1:8090/admin/reservation/'+id, {
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
              
                let up = confirm("reservation updated!");
            })
    
        });
}