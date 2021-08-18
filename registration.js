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

// registration form

const registrationForm = document.querySelector("#registration-form")
const firstName = document.querySelector("#register-first-name");
const lastName = document.querySelector("#register-last-name");
const email = document.querySelector("#register-email");
const emailConfirm = document.querySelector("#register-email-confirm");
const phone = document.querySelector("#register-phone");
const age = document.querySelector("#register-age");
const studentYes = document.querySelector("#register-student-yes");
const studentNo = document.querySelector("#register-student-no");
const displayAge = document.querySelector("#display-age");
const submitBtn = document.querySelector("#submit-btn");
const employed = document.querySelector("#register-employed");
const unemployed = document.querySelector("#register-unemployed");

const firstNameAlert = document.querySelector("#first-name-alert");
const lastNameAlert = document.querySelector("#last-name-alert");
const emailAlert = document.querySelector("#email-alert");
const emailConfirmAlert = document.querySelector("#email-confirm-alert");
const phoneAlert = document.querySelector("#phone-alert");
const studentStatusNameAlert = document.querySelector("#student-status-alert");

const firstNameRequired = document.querySelector("#first-name-required");
const lastNameRequired = document.querySelector("#last-name-required");
const emailRequired = document.querySelector("#email-required");
const emailConfirmRequired = document.querySelector("#email-confirm-required");
const phoneRequired = document.querySelector("#phone-required");
const ageRequired = document.querySelector("#age-required");
const studentStatusRequired = document.querySelector("#student-status-required");
const employmentRequired = document.querySelector("#employment-required");

const emailPattern = /^[A-Za-z\d]+([A-Za-z\d!#$%&'*+-\=.?^_`{|]+)?@[A-Za-z\d]+.[A-Za-z\d].?[A-Za-z\d]?$/;
const namePattern = /[A-Za-z/d ]+/;
const phonePatter = /^(\+61|0)4\d{8}/;

const textbox = document.querySelectorAll(".textbox");

// complete form animation
const formPopup = document.querySelector(".form-complete-popup");

age.addEventListener("input", () => {
    displayAge.textContent = `${age.value}`;
})

// check for pattern

const checkPattern = (text, pattern, alert) => {
    if (text.value.match(pattern)) {
        alert.classList.remove("show");
        return true;
    } else {
        alert.classList.add("show");
        return false;
    }
}

const emailConfirmation = () => {
    if (emailConfirm.value != email.value) {
        emailConfirmAlert.classList.add("show");
        return false;
    } else {
        emailConfirmAlert.classList.remove("show");
        return true;
    }
}

// check for required

const checkRequired = (text, alert) => {
    if (text.value == "") {
        alert.classList.add("show");
        return false;
    } else { 
        alert.classList.remove("show");
        return true;
    }
}

const checkSelected = (text, alert) => {
    if (!text.checked) {
        alert.classList.add("show");
        return false;
    } else {
        alert.classList.remove("show");
        return true;
    }
}

const checkDragged = (text, alert) => {
    if (text.value == 120) {
        alert.classList.add("show");
        return false;
    } else {
        alert.classList.remove("show");
        return true;
    }
}

textbox.forEach(box => {
    box.addEventListener("focusout", () => {
        if (box.value == "") {
            box.focus();
        }
    })
})

firstName.addEventListener("focusout", () => {
    checkRequired(firstName, firstNameRequired);
    checkPattern(firstName, namePattern, firstNameAlert);
})

lastName.addEventListener("focusout", () => {
    checkRequired(lastName, lastNameRequired);
    checkPattern(lastName, namePattern, lastNameAlert);
})

email.addEventListener("focusout", () => {
    checkRequired(email, emailRequired);
    checkPattern(email, emailPattern, emailAlert);
})

emailConfirm.addEventListener("focusout", () => {
    checkRequired(emailConfirm, emailConfirmRequired);
    emailConfirmation();
})

phone.addEventListener("focusout", () => {
    checkRequired(phone, phoneRequired);
    checkPattern(phone, phonePatter, phoneAlert);
})

submitBtn.addEventListener("click", event => {
    event.preventDefault();
    checkRequired(firstName, firstNameRequired);
    checkPattern(firstName, namePattern, firstNameAlert);
    checkRequired(lastName, lastNameRequired);
    checkPattern(lastName, namePattern, lastNameAlert);
    checkRequired(email, emailRequired);
    checkPattern(email, emailPattern, emailAlert);
    emailConfirmation();
    checkPattern(emailConfirm, emailPattern, emailConfirmAlert);
    checkRequired(phone, phoneRequired);
    checkPattern(phone, phonePatter, phoneAlert);
    checkRequired(age, ageRequired);

    if (
        checkRequired(firstName, firstNameRequired) && 
        checkPattern(firstName, namePattern, firstNameAlert) && 
        checkRequired(lastName, lastNameRequired) && 
        checkPattern(lastName, namePattern, lastNameAlert) && 
        checkRequired(email, emailRequired) && 
        checkPattern(email, emailPattern, emailAlert) && 
        checkRequired(emailConfirm, emailConfirmRequired) && 
        emailConfirmation() && checkRequired(phone, phoneRequired) && 
        checkPattern(phone, phonePatter, phoneAlert) && 
        checkDragged(age, ageRequired) && 
        (checkSelected(studentNo, studentStatusRequired) || 
        checkSelected(studentYes, studentStatusRequired)) &&
        (checkSelected(employed, employmentRequired) ||
        checkSelected(unemployed, employmentRequired))
        ) {
        registrationForm.submit();
        document.querySelector("#blocker").classList.add("show");
        formPopup.classList.add("completed");
    } else {
        console.log("no");
    }
})


// annual fee calculator

// variables 
// will use those defined earlier
const annualFee = document.querySelector("#annual-fee");

// function
const calculateFee= () => {
    // define result to be 120 (10 monthly, 12 months a year)
    // define discount to be 1 (no discount at first)
    let result = 120;
    let discount = 0;
    // discount of 20% added to age between 16 and 20
    if (age.value >= 16 && age.value <= 20) {
        discount += 10;
    }
    // discount of 5% added to student if user checks yes 
    if (studentYes.checked) {
        discount += 5;
        if (studentNo.checked) {
            discount -= 5;
        }
    }
    // discount of 40% added if user checks unemployed
    if (unemployed.checked) {
        discount += 40;
    }
    // make sure if no discount, the price is not 0
    if (discount == 0) {
        return 120.00.toFixed(2);
    } else {
    // calculate results (discount must be divided by 100 to convert into percentage)
    result *= (1 - discount/100);
    result = result.toFixed(2);
    return result;
    }
}

// when user changes age, display changed fee
age.addEventListener("input", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

studentYes.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

studentNo.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})

employed.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})
unemployed.addEventListener("click", () => {
    annualFee.textContent = `$${calculateFee()}`;
})