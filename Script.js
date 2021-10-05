        //   Hide or unHide
window.editState ={};
window.dltState = {};
function myFunction(){
    var a = document.getElementById("refresh-data");
    console.log("ok");
    if (a.style.display === "none"){
        a.style.display = "block";
    } 
    else {
        a.style.display = "none";
    }
};

// function deleteRows(){
//     var rowCount = tableBody.row.length;
//     if(rowCount > 7) {
//         tableBody.deleteRows(i-1);
//     }
//     else{
//         alert("Please insert atleast one row")
//     }
// };



function emptyTable() {
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
  };


    //    Create table

function createTable(){
    for( let i=0; i<user.length; i++){
        console.log("Manan");
        
        var tableBody = document.getElementById("table-body");
        var tableRow = document.createElement("tr");
        tableRow.className = "row";
        tableRow.setAttribute("id","body-row" +i);
        
        for (var j = 0; j < userInfo.length; j++) {
            var column = document.createElement("td");
            column.className = "col";
            if (editState[i]) {
              column.innerHTML = "<input class='input' value=" + user[i][userInfo[j]] + ">";
            } 
            else {
              column.innerText = user[i][userInfo[j]];
            }
            tableRow.appendChild(column);
            tableBody.appendChild(tableRow);
          }



            // Edit Button
            var colEdit = document.createElement("td");
            var edtbtn = document.createElement("button");
            edtbtn.className = "btn"
            if(editState[i]) {
                edtbtn.innerText = "save"
            }else{
                edtbtn.innerText = "Edit"
            }
            edtbtn.addEventListener('click', ()=>{
                console.log("row" + " " + i);
                emptyTable();
                if (editState[i]) {
                    editState={};
                }
                else {
                    editState={};
                    editState[i] = true;
                }
                createTable();
            });

            
            // Delete button
            var dltbtn = document.createElement("button");
            dltbtn.className = "btn"
            dltbtn.innerText = "Delete"
            dltbtn.addEventListener('click', ()=>{
                // console.log("dlt" + i);
                var rowToDelete = document.getElementById("body-row"+i);
                console.log("row" + " " + i);
                var tableBody = document.getElementById("table-body");
                if(tableBody.rows.length >1) {
                    rowToDelete.remove();
                }
                else {
                    alert("Please insert atleast one row")
                }
            }); 


        tableRow.appendChild(colEdit);
        colEdit.appendChild(edtbtn);
        colEdit.appendChild(dltbtn);
    };
};

    


window.addEventListener('DOMContentLoaded', (event) => {
    createTable()
});





// END Learning For loop 

var user = [
    {
        firstName: "Harsh",middleName: " ",lastName: "Kurra",email: "hk@gmail.com",role: "Manager",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Manan",middleName: " ",lastName: "Arora",email: "M@gmail.com",role: "Employe",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Manish",middleName: "Kumar",lastName: "Singla",email: "ms@gmail.com",role: "Super Admin",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Rohit ",middleName: "kumar",lastName: "singla",email: "r@gmail.com",role: "Suscriber",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Rockey",middleName: " ",lastName: "singla",email: "rs@gmail.com",role: "client",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Tom",middleName: "kumar",lastName: "singla",email: "ts@gmail.com",role: "Amin",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Harry",middleName: "kumar",lastName: "singla",email: "hs@gmail.com",role: "QA",phone: "807745546",address: "Chandigarah"
    }
];

var userInfo = [
    "firstName",
    "middleName",
    "lastName",
    "email",
    "role",
    "phone",
    "address"
];











