// toggle navigation bar

const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelectorAll(".nav-item");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navItems.forEach(item => {
    item.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})

// popup window

document.querySelector(".contact-form").addEventListener("submit", () => {
    document.querySelector("#blocker").classList.add("show");
    document.querySelector(".form-complete-popup").classList.add("completed");
})


// // contact form

// const fName = document.querySelector("#first-name");
// const lName = document.querySelector("#last-name");
// const address = document.querySelector("#address");
// const email = document.querySelector("#email");
// const enquiry = document.querySelector("#enquiry");
// const submitBtn = document.querySelector(".submit");

// const fNameAlert = document.querySelector("#first-name-alert");
// const lNameAlert = document.querySelector("#last-name-alert");
// const emailAlert = document.querySelector("#email-alert");

// const fNameRequired = document.querySelector("#first-name-required");
// const lNameRequired = document.querySelector("#last-name-required");
// const emailRequired = document.querySelector("#email-required");
// const enquiryRequired = document.querySelector("#enquiry-required");

// // complete form animation
// const formPopup = document.querySelector(".form-complete-popup");

// // regex 

// const namePattern = /[A-Za-z/d ]+/;
// const emailPattern = /^[A-Za-z\d]+([A-Za-z\d!#$%&'*+-\=.?^_`{|]+)?@[A-Za-z\d]+.[A-Za-z\d].?[A-Za-z\d]?$/;

// // check for required inputs

// const checkFirstNameRequired = input => {
//     if (input.value=="") {
//         fNameRequired.classList.add("show");
//         input.focus();
//         return false;
//     } else {
//         fNameRequired.classList.remove("show");
//         return true;
//     }
// }

// const checkLastNameRequired = input => {
//     if (input.value=="") {
//         lNameRequired.classList.add("show");
//         input.focus();
//         return false;
//     } else {
//         lNameRequired.classList.remove("show");
//         return true;
//     }
// }

// const checkEmailRequired = input => {
//     if (input.value=="") {
//         emailRequired.classList.add("show");
//         input.focus();
//         return false;
//     } else {
//         emailRequired.classList.remove("show");
//         return true;
//     }
// }

// const checkEnquiryRequired = input => {
//     if (input.value=="") {
//         enquiryRequired.classList.add("show");
//         input.focus();
//         return false;
//     } else {
//         enquiryRequired.classList.remove("show");
//         return true;
//     }
// }

// // check for input regex validation

// const checkFirstName = text => {
//     if (text.value.match(namePattern)) {
//         fNameAlert.classList.remove("show");
//         return true;
//     } else {
//         fNameAlert.classList.add("show");
//         text.focus();
//         return false;
//     }
// }

// const checkLastName = text => {
//     if (text.value.match(namePattern)) {
//         lNameAlert.classList.remove("show");
//         return true;
//     } else {
//         lNameAlert.classList.add("show")
//         text.focus();
//         return false;
//     }
// }

// const checkEmail = text => {
//     if (text.value.match(emailPattern)) {
//         emailAlert.classList.remove("show");
//         return true;
//     } else {
//         emailAlert.classList.add("show");
//         text.focus();
//         return false;
//     }
// }

// // shows alerts messages when input's are wrong or not filled in when required, and hides otherwise

// fName.addEventListener("focusout", () => {
//     checkFirstName(fName);
//     checkFirstNameRequired(fName);
// })

// lName.addEventListener("focusout", () => {
//     checkLastName(lName);
//     checkLastNameRequired(lName);
// })

// email.addEventListener("focusout", () => {
//     checkEmail(email);
//     checkEmailRequired(email);
// })

// // when everything is good to go, submit the form

// submitBtn.addEventListener("click", () => {
//     checkFirstNameRequired(fName);
//     checkLastNameRequired(lName);
//     checkEmailRequired(email);
//     checkEnquiryRequired(enquiry);
//     if (checkFirstNameRequired(fName)) {
//         document.querySelector(".contact-form").submit();
//         formPopup.classList.add("completed");
//     }
// })



