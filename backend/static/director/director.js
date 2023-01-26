const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];
function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    console.log(token+" director");
    fetch('http://127.0.0.1:8090/admin/director', {
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
           
            const lst = document.getElementById('directorLst');
//37 linija promeni
             lst.innerHTML += `<tr><th> ID </th> <th> firstName </th> <th> lastName </th> </tr>`;
            data.forEach( el => {
                lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.firstName} </td> <td> ${el.lastName} </td>  
                <a href="/admin/director/updateDirector/${el.id}" class="btn btn-primary update"> 
                   Update
                </a>
                <button data-id="${el.id}" class="btn btn-secondary btn-dark delete" onclick="deleteUser(this)">
                  Delete
                </button>
            </td> </tr>`;
            });
            
            /// <a href="/admin/updateUser/${el.id}" class="btn btn-primary update" id = "updateUser">
        })
    document.getElementById('directorBtn').addEventListener('click', e => {
        e.preventDefault();

     

        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            lastLogged: new Date()
        };
        
        fetch('http://127.0.0.1:8090/admin/director', {
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
                document.getElementById('firstName').value = '';
                document.getElementById('lastName').value = '';
                document.getElementById('directorLst').innerHTML += `<tr> <td> ${data.id} </td> <td> ${data.firstName} </td>  <td> ${data.lastName} </td> </tr> 
                <a href="/admin/director/updateDirector/${data.id}" class="btn btn-primary update">
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

        fetch('http://127.0.0.1:8090/admin/director/' + id, {
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
        var table = document.getElementById('directorLst');
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
