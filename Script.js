        //   Hide or unHide

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

window.addEventListener('DOMContentLoaded', (event) => {    // use this bcz this not in function when i put this code in function its #work
    for( let i=0; i<user.length; i++){
        console.log("Manan");
    

                // FIRST METHOD 

        // var tableBody = document.getElementById("table-body");
        // var tableRow  = document.createElement("tr");
        // tableRow.className= "row";
    
        // var firstNameCol = document.createElement("td");
        // firstNameCol.innerText = user[i].firstName;
    
        // var middleNameCol = document.createElement("td");
        // middleNameCol.innerText = user[i].middleName;
    
        // var lastNameCol = document.createElement("td");
        // lastNameCol.innerText = user[i].lastName;

        // var emailCol = document.createElement("td");
        // emailCol.innerText = user[i].email;

        // var roleCol = document.createElement("td");
        // roleCol.innerText = user[i].role;

        // var phoneCol = document.createElement("td");
        // phoneCol.innerText = user[i].phone;

        // var addressCol = document.createElement("td");
        // addressCol.innerText = user[i].address;
    
        
        // tableRow.appendChild(firstNameCol);
        // tableRow.appendChild(middleNameCol);
        // tableRow.appendChild(lastNameCol);
        // tableRow.appendChild(emailCol);
        // tableRow.appendChild(roleCol);
        // tableRow.appendChild(phoneCol);
        // tableRow.appendChild(addressCol);
        // tableBody.append(tableRow);
        
    
        // console.log(user[i].firstName);

                // SECOND METHOD

        var tableBody = document.getElementById("table-body");
        var tableRow = document.createElement("tr");
        tableRow.className = "row";
        tableRow.setAttribute("id","body-row");

        for(var j = 0; j < userInfo.length; j++){
            var column = document.createElement("td");
            column.className = "col";
            column.innerText = user[i][userInfo[j]];
            tableRow.appendChild(column);
            tableBody.appendChild(tableRow);
        };

            // Edit Button
            var colEdit = document.createElement("td");
            var edtbtn = document.createElement("button");
            edtbtn.className = "btn"
            edtbtn.innerText = "Edit"
            edtbtn.addEventListener('click', ()=>{
                console.log("row" + " " + i);
                column.innerText= "ok"    
            });



            

            // Delete button
            var dltbtn = document.createElement("button");
            dltbtn.className = "btn"
            dltbtn.innerText = "Delete"

            tableRow.appendChild(colEdit);
            colEdit.appendChild(edtbtn);
            colEdit.appendChild(dltbtn);
            }

        });




                            // TRY

        // edtBtn.addEventListener('click',function(){
        //     let html = column.innerHTML;
        //     column.innerHTML = <textarea class="form-control" class="text-area" id = "text-area">${html}</textarea>

        // });




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











