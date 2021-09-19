
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
        firstName: "Harsh",midleName: " ",lastName: "Kurra",email: "hk@gmail.com",role: "Manager",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Manan",midleName: " ",lastName: "Arora",email: "M@gmail.com",role: "Employe",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Manish",midleName: "Kumar",lastName: "Singla",email: "ms@gmail.com",role: "Super Admin",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Rohit ",midleName: "kumar",lastName: "singla",email: "r@gmail.com",role: "Suscriber",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Rockey",midleName: " ",lastName: "singla",email: "rs@gmail.com",role: "client",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Tom",midleName: "kumar",lastName: "singla",email: "ts@gmail.com",role: "Amin",phone: "807745546",address: "Chandigarah"
    },
    {
        firstName: "Harry",midleName: "kumar",lastName: "singla",email: "hs@gmail.com",role: "QA",phone: "807745546",address: "Chandigarah"
    }
];

for(var i=0; i<user.length; i++){
console.log(user[i].firstName);
};


var table = 10
for(var i = 0; i<=table; i = i+2){
    console.log("table");
}



