const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];
function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    console.log(token+" MOVIES");
    fetch('http://127.0.0.1:8090/admin/movies', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })/** 
        .then( res => {
            if (res.ok) {
                return res.json();
              } else {
                throw new Error(res);
              }
            })
            */
        .then(res => res.json())
        .then( data => {
           
          // console.log(data);
           if(data.msg!=null)
           if(data.msg){
            alert(data.msg);
            return;
            }
           //genreID
            const lst = document.getElementById('movieLst');

             lst.innerHTML += `<tr><th> ID </th> <th> Name </th><th> genreID </th> </tr>`;
            data.forEach( el => {
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.name} </td>  <td> ${el.genreID} </td> </tr>
                <a href="/admin/movies/updateMovies/${el.id}" class="btn btn-primary update"> 
                   Update
                </a>
                <button data-id="${el.id}" class="btn btn-secondary btn-dark delete" onclick="deleteUser(this)">
                  Delete
                </button>
            </td> </tr>`;
            });
            
        })
    document.getElementById('movieBtn').addEventListener('click', e => {
        e.preventDefault();

    
        const data = {
            name: document.getElementById('name').value,
            genreID:document.getElementById('genreID').value,
            lastLogged: new Date()
        };
        
        fetch('http://127.0.0.1:8090/admin/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data)
        })
            .then( res => res.json())
           /// .then( res => res.json() )
            .then( data => {
                if(data.msg){
                    alert(data.msg);
                    return;
                }
                document.getElementById('name').value = '';
                document.getElementById('genreID').value = '';
                document.getElementById('movieLst').innerHTML += `<tr> <td> ${data.id} </td> <td> ${data.name} </td>  <td> ${data.genreID} </td> </tr> 
                <a href="/admin/movies/updateMovies/${data.id}" class="btn btn-primary update">
                   Update
                </a>
                <button data-id="${data.id}" class="btn btn-secondary btn-dark delete" onclick="deleteUser(this)">
                Delete
              </button>
            </td> </tr>`;
            })
    });

}

function deleteUser(obj) {
    let result = confirm("Want to delete?");
    let id;
    if (result) {
         id = obj.getAttribute('data-id');

        fetch('http://127.0.0.1:8090/admin/movies/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.msg){
                alert(data.msg);
                return;
            }
        var table = document.getElementById('movieLst');
        let i, row, colId;
        console.log(id);
        for (i = 1, row; row = table.rows[i]; i++) {
            colId = row.cells[0].innerText;
             if(colId === id){
                document.getElementsByTagName('tr')[i].remove();
             }
           }  
        });
    }
    location.reload();
}

function getCurrUser(){
    let token = document.cookie.split(';')[0].split('=')[1];
    console.log(token);
    if(token === ''){
        console.log("uso");
        return 'no user';
    }
    let payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

function bannedView(){
    var blurDiv = document.createElement("div");
    blurDiv.id = "blurDiv";
    blurDiv.style.cssText = "position:absolute; top:0; right:0; width:" + screen.width + "px; height:" + screen.height + "px; background-color: #000000; opacity:0.5; filter:alpha(opacity=50)";
 
    document.getElementsByTagName("body")[0].appendChild(blurDiv);
}
