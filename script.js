// document.querySelector("#form").addEventListener("click", (e) => {
//   // const data = e.target.getAttribute("id");

//   document.querySelector("#span").innerText = "rahul";
// });

// const errorMessage = (msg) => {
//   return (document.createElement("span").innerText = msg);
// };

// function demo{
//   document.querySelector("h1").innerHTML = "rahul";

// }

//creating err message
const errMsg = (id, msg) => {
  document.getElementById(id).innerHTML = msg;
};

//clearing the err message
const clear = () => {
  let span = document.querySelectorAll("span");
  for (const data of span) {
    data.innerHTML = "";
  }
};

//handle on submite event
const handleSubmite = () => {
  let flag = true;
  clear();

  //name Validation
  let name = document.forms["myforms"]["name"].value.trim();
  if (name.length <= 2) {
    errMsg("name_err", "** Plz, Enter Valid length Name **");
    flag = false;
  }
  if (name.match(/[0-9]/g) !== null) {
    errMsg("name_err", "** Plz, Enter Valid Name **");
    flag = false;
  }

  //handle number validation
  let phone = document.forms["myforms"]["mobileNo"].value;
  if (!Number(phone)) {
    errMsg("phone_err", "** Plz, Enter valid Phone number **");
    flag = false;
  }

  if (phone.length !== 10) {
    errMsg("phone_err", "** Plz, Enter 10 Digit number **");
    flag = false;
  }
  if (phone.length === 0) {
    errMsg("phone_err", "** Plz, Enter Mobile number **");
    flag = false;
  }

  //date validation
  let date = document.forms["myforms"]["DOB"].value;
  if (date === "") {
    errMsg("date_err", "** Plz, Choose Your DOB **");
    flag = false;
  }

  //address validation
  let address = document.forms["myforms"]["address"].value.trim();
  if (address.length <= 2) {
    errMsg("address_err", "** Plz, Enter Valid Address **");
    flag = false;
  }

  if (address.length < 15) {
    errMsg("address_err", "** Plz, Enter Valid Address **");
    flag = false;
  }

  //select validation
  let dest = document.forms["myforms"]["dest"].value;
  console.log(dest);
  if (dest === "") {
    errMsg("select_err", "** Plz, Choose a Destrict **");
    flag = false;
  }

  return flag;
};

//handle age event and set age
const setAge = () => {
  let date = document.querySelector("#DOB").value;
  if (date !== null) {
    let age = new Date().getFullYear() - new Date(date).getFullYear();
    document.querySelector("#age").value = age;
  }
};
