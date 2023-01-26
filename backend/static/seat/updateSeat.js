function init() {
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    const urlParams = window.location.href.split('/');
    let id = urlParams[urlParams.length-1];
    console.log("UPDATE seat");
    fetch('http://127.0.0.1:8090/admin/seat/' + id, {
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
        document.getElementById('SeatNumber').value = data.SeatNumber;

    });

    document.getElementById('updateSeat').addEventListener('click', e => {
            e.preventDefault();
           
            const data = {
                SeatNumber: document.getElementById('SeatNumber').value,
            };
    
            fetch('http://127.0.0.1:8090/admin/seat/'+id, {
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
                let up = confirm("Seat updated!");
            })
    
        });
}