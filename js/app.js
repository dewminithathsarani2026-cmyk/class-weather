console.log("hello");



//add localStorage items
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// localStorage.setItem("city", "New York");

// retrieve localStorage items
// localStorage.removeItem("age")


//data read from localStorage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let city = localStorage.getItem("city");
// console.log(name, age, city);

//Objects in localStorage
//  let customer =[{
//     name : "Amal",
//     age: 25,
//     isMarried: true,
//  },
// {
//     name : "kmal",
//     age: 30,
//     isMarried: false,
// },
// {
//     name : "Manula",
//     age: 30,
//     isMarried: false,
// }]

// localStorage.clear();

// //---set customer in localStorage
// //1st step: convert object to string
// let stringCustomer = JSON.stringify(customer);
// //2nd step: store string in localStorage
// localStorage.setItem("customer", stringCustomer);


// //---get customer from localStorage--
// //1st step: retrieve string from localStorage
// let getcustomer =  localStorage.getItem("customer");
// //2nd step: convert string back to object
// let parsedCustomer = JSON.parse(getcustomer);
// console.log(parsedCustomer);




// ---------------------- CRUD operations in localStorage--------------------

// let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

// function btnaddCustomrOnAction() {

//     let customer = {
//         id:document.getElementById("txtid").value,
//         name:document.getElementById("txtname").value,
//         age:document.getElementById("txtage").value,
//         address:document.getElementById("txtaddress").value
//     }
//     // console.log(customer);
//     customerList.push(customer);
//     // console.log(customerList);
//     localStorage.setItem("customerList", JSON.stringify(customerList));
//     btnLoadTableOnAction();

// }

// function btnSearchCustomrOnAction() {
//     // alert("search customer");

//     let id =document.getElementById("txtid").value

//     let customer = customerList.find(c => c.id === id);

//     if(customer){
//         document.getElementById("txtname").value = customer.name;
//         document.getElementById("txtage").value = customer.age;
//         document.getElementById("txtaddress").value = customer.address;
//     }else{
//         alert("Customer not found");
//     }
// }

// function btnDeleteCustomrOnAction() {
//     // alert("delete customer");

//     let id =document.getElementById("txtid").value

//     let index = customerList.findIndex(c => c.id === id);

//     if(index !== -1){
//         customerList.splice(index, 1);
//         localStorage.setItem("customerList", JSON.stringify(customerList));
//         btnLoadTableOnAction();
//     }else{
//         alert("Customer not found");
//     }
// }

// function btnUpdateCustomrOnAction() {
//     // alert("update customer");
//     let id =document.getElementById("txtid").value

//     let customer = customerList.find(c => c.id === id);

//     if(customer){
//         customer.name = document.getElementById("txtname").value;
//         customer.age = document.getElementById("txtage").value;
//         customer.address = document.getElementById("txtaddress").value;

//         localStorage.setItem("customerList", JSON.stringify(customerList));
//         btnLoadTableOnAction();
//     }else{
//         alert("Customer not found");
//     }
// }

// function btnClearStorageOnAction() {
//     localStorage.clear();
//     customerList = [];
// }

// function btnLoadTableOnAction() {
//     // alert("load table");

//     let tblbdy = "";

//     customerList.forEach(customer => {
//         tblbdy += `
//             <tr>
//             <td>${customer.id}</td>
//             <td>${customer.name}</td>
//             <td>${customer.age}</td>
//             <td>${customer.address}</td>
//         </tr>
//         `;
//     });
//     document.getElementById("tblCustomer").innerHTML = tblbdy;
// }

// btnLoadTableOnAction();



// ---------------------Weather API---------------------
// const apiKey = "bdf15ef4a1514140b35105030261210";
// const baseUrl = "http://api.weatherapi.com/v1";

// fetch(`${baseUrl}/current.json?key=${apiKey}&q=Galle`).then(res => res.json()).then(data =>{
//     console.log(data);

//     document.getElementById("weatherInfo").innerHTML = `
//     <div>
//         <h1>${data.current.condition.text}</h1>
//         <img src="${data.current.condition.icon}" alt="">
//         <p>${data.current.temp_c}°C</p>
//         <p>${data.current.humidity}%</p>
//     </div>`
// });

function btnSearchCityOnAction() {
    let city = document.getElementById("txtcity").value;
    
    const apiKey = "bdf15ef4a1514140b35105030261210";
    const baseUrl = "http://api.weatherapi.com/v1";

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`).then(res => res.json()).then(data => {
        console.log(data);

        document.getElementById("weatherInfo").innerHTML = `
    <div>
        <h1>${data.location.name}</h1>
        <h1>${data.current.condition.text}</h1>
        <img src="${data.current.condition.icon}" alt="">
        <p>${data.current.temp_c}°C</p>
        <p>${data.current.humidity}%</p>
    </div>`
    });
}