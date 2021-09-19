
function myFunction(){
    var a = document.getElementsByClassName("refresh-data")[2];
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
};


// Learning For loop 

var user = [
    {
        firstName: "Harsh",
        midleName: " ",
        lastnmae: "Kurra",
        email: "hk@gmail.com",
        role: "Employe",
        phone: "807745546",
        address: "Chandigarah"
    }
];

for(var i=0; i<user.length; i++){
console.log(user[i].firstName);
};





