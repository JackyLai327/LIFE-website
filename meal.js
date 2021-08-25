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

// meal choose

const meat = document.querySelector("#meat");
const veggie = document.querySelector("#veggie");
const vegan = document.querySelector("#vegan");
const ketogenic = document.querySelector("#ketogenic");
const diets = document.querySelectorAll(".diet");

const result = document.querySelector(".result");
const noResult = document.querySelector(".no-result");

diets.forEach(diet => {
    diet.addEventListener("click", () => {
        document.querySelector(".diet.selected")?.classList.remove("selected")
        diet.classList.toggle("selected");
    })
})

// calories

const caloriesInput = document.querySelector("#calories");

// foods

const apple = {
    food: "apple",
    calories: 95,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>apple(1) - 95cal</figcaption>
    </figure>`
};

const avocado = {
    food: "avocado",
    calories: 320,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>avocado(1) - 320cal</figcaption>
    </figure>`
};

const banana = {
    food: "banana",
    calories: 111,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>banana(1) - 111cal</figcaption>
    </figure>`
};

const fruitSalad = {
    food: "fruit salad",
    calories: 125,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fruit salad(249g) - 125cal</figcaption>
    </figure>`
};

const baconAndEggs = {
    food: "bacon and eggs",
    calories: 539,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>bacon and eggs(214g) - 539cal</figcaption>
    </figure>`
};

const burrito = {
    food: "burrito",
    calories: 326,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>burrito(200g) - 326cal</figcaption>
    </figure>`
};

const fishAndChips = {
    food: "fish and chips",
    calories: 585,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fish and chips(300g) - 585cal</figcaption>
    </figure>`
};

const friedRice = {
    food: "fried rice",
    calories: 662,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fried rice(356g) - 662cal</figcaption>
    </figure>`
};

const sausageRoll = {
    food: "sausage roll",
    calories: 101,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>sausage roll(34g) - 101cal</figcaption>
    </figure>`
};

const taco = {
    food: "taco",
    calories: 213,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>taco(98g) - 213cal</figcaption>
    </figure>`
};

const instantNoodle = {
    food: "instant noodle",
    calories: 380,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>instant noodle(85g) - 380cal</figcaption>
    </figure>`
};

const pizza = {
    food: "pizza",
    calories: 272,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>pizza(1 slice) - 272cal</figcaption>
    </figure>`
};

const porkChop = {
    food: "pork chop",
    calories: 295,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>pork chop(131g) - 295</figcaption>
    </figure>`
};

const meatPie = {
    food: "meat pie",
    calories: 290,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>meat pie(1 slice) - 290cal</figcaption>
    </figure>`
};

const carrot = {
    food: "carrot",
    calories: 25,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>carrot(1) - 25cal</figcaption>
    </figure>`
};

const cauliflower = {
    food: "cauliflower",
    calories: 30,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>cauliflower(130g) - 30cal</figcaption>
    </figure>`
};

const eggplant = {
    food: "eggplant",
    calories: 115,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>eggplant(458g) - 115cal</figcaption>
    </figure>`
};

const lettuce = {
    food: "lettuce",
    calories: 90,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>lettuce(600g) - 90cal</figcaption>
    </figure>`
};

const potato = {
    food: "potato",
    calories: 164,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>potato(213g) - 164cal</figcaption>
    </figure>`
};

const sweetPotato = {
    food: "sweetPotato",
    calories: 112,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>sweetPotato(130g) - 112cal</figcaption>
    </figure>`
};

const wasabi = {
    food: "wasabi",
    calories: 184,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>wasabi(169g) - 184cal</figcaption>
    </figure>`
};

const zucchini = {
    food: "zucchini",
    calories: 33,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>zucchini(196g) - 33cal</figcaption>
    </figure>`
};

const goatMilk = {
    food: "goat milk",
    calories: 168,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>goat milk(244g) - 168cal</figcaption>
    </figure>`
};

const hotChocolate = {
    food: "hot chocolate",
    calories: 237,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>hot chocolate(266g) - 237cal</figcaption>
    </figure>`
};

const milk = {
    food: "milk",
    calories: 149,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>milk(244g) - 149cal</figcaption>
    </figure>`
};

const yogurt = {
    food: "yogurt",
    calories: 138,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>yogurt(227g) - 138cal</figcaption>
    </figure>`
};

const cornPops = {
    food: "corn pops",
    calories: 139,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>corn pops(37.5g) - 139cal</figcaption>
    </figure>`
};

const oatmeal = {
    food: "oatmeal",
    calories: 636,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>oatmeal(175g) - 656cal</figcaption>
    </figure>`
};

const cherryTomato = {
    food: "cherry tomato",
    calories: 200,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>cherry tomato(10) - 200cal</figcaption>
    </figure>`
};

const corn = {
    food: "corn",
    calories: 562,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>corn(154g) - 562cal</figcaption>
    </figure>`
};

const cucumber = {
    food: "cucumber",
    calories: 66,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>cucumber(410g) - 66cal</figcaption>
    </figure>`
};

const mushroom = {
    food: "mushroom",
    calories: 20,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>mushroom(100g) - 20cal</figcaption>
    </figure>`
};

const pumpkin = {
    food: "pumpkin",
    calories: 51,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>pumpkin(196g) - 51cal</figcaption>
    </figure>`
};

const beefRibs = {
    food: "beef ribs",
    calories: 200,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>beef ribs(225g) - 536cal</figcaption>
    </figure>`
};

const chickenBreast = {
    food: "chicken breast",
    calories: 344,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>chicken breast(200g) - 344cal</figcaption>
    </figure>`
};

const chickenDrumstick = {
    food: "chicken drumstick",
    calories: 360,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>chicken drumstick(200g) - 360cal</figcaption>
    </figure>`
};

const groundBeef = {
    food: "ground beef",
    calories: 172,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>ground beef(70g) - 172cal</figcaption>
    </figure>`
};

const roastBeef = {
    food: "roast beef",
    calories: 721,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>roast beef(515g) - 721cal</figcaption>
    </figure>`
};

const tBoneSteak = {
    food: "t bone steak",
    calories: 580,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>t bone steak(287g) - 580cal</figcaption>
    </figure>`
};

const anythingList = [apple, avocado, banana, fruitSalad, baconAndEggs, burrito, fishAndChips, friedRice, sausageRoll, taco, instantNoodle, pizza, porkChop, meatPie,carrot, cauliflower, eggplant, lettuce, potato, sweetPotato, wasabi, zucchini, goatMilk, hotChocolate, milk, yogurt, oatmeal, cornPops, cherryTomato, corn, cucumber, mushroom, pumpkin, beefRibs, chickenDrumstick, chickenBreast, groundBeef, roastBeef, tBoneSteak];
const vegetarianList = [apple, avocado, banana, fruitSalad, friedRice, instantNoodle, carrot, cauliflower, eggplant, lettuce, potato, sweetPotato, wasabi, zucchini, goatMilk, hotChocolate, milk, yogurt, cornPops, oatmeal, cherryTomato, corn, cucumber, mushroom, pumpkin];
const veganList = [apple, avocado, banana, fruitSalad, friedRice, carrot, cauliflower, eggplant, lettuce, potato, sweetPotato, wasabi, zucchini, cornPops, oatmeal, cherryTomato, corn, cucumber, mushroom, pumpkin];
const ketogenicList = [apple, avocado, banana, fruitSalad, baconAndEggs, burrito, sausageRoll, taco, porkChop, taco, meatPie, beefRibs, chickenDrumstick, chickenBreast, groundBeef, roastBeef, tBoneSteak];


const calculateAnything = (desiredCal) => {
    let calBreakfast = 0;
    let calLunch = 0;
    let calDinner =0;
    let index, randomFood;
    while (calBreakfast < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container.breakfast").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calBreakfast += randomFood.calories;
    }
    while (calLunch < desiredCal*(4/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container.lunch").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calLunch += randomFood.calories;
    }
    while (calDinner < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container.dinner").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calDinner += randomFood.calories;
    }
    let cal = calBreakfast + calLunch + calDinner;
    document.querySelector(".breakfast-calories").textContent = calBreakfast;
    document.querySelector(".lunch-calories").textContent = calLunch;
    document.querySelector(".dinner-calories").textContent = calDinner;
    document.querySelector(".total-calories").textContent = cal;
    if (calBreakfast + calDinner + calLunch != 0) {
        noResult.innerHTML = "";
    } 
}

const calculateVegetarian = (desiredCal) => {
    let calBreakfast = 0;
    let calLunch = 0;
    let calDinner =0;
    let index, randomFood;
    while (calBreakfast < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * vegetarianList.length);
        randomFood = vegetarianList[index];
        document.querySelector(".result-list-container.breakfast").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calBreakfast += randomFood.calories;
    }
    while (calLunch < desiredCal*(4/10) - 100) {
        index = Math.floor(Math.random() * vegetarianList.length);
        randomFood = vegetarianList[index];
        document.querySelector(".result-list-container.lunch").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calLunch += randomFood.calories;
    }
    while (calDinner < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * vegetarianList.length);
        randomFood = vegetarianList[index];
        document.querySelector(".result-list-container.dinner").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calDinner += randomFood.calories;
    }
    let cal = calBreakfast + calLunch + calDinner;
    document.querySelector(".breakfast-calories").textContent = calBreakfast;
    document.querySelector(".lunch-calories").textContent = calLunch;
    document.querySelector(".dinner-calories").textContent = calDinner;
    document.querySelector(".total-calories").textContent = cal;
    if (calBreakfast + calDinner + calLunch != 0) {
        noResult.innerHTML = "";
    } 
}

const calculateVegan = (desiredCal) => {
    let calBreakfast = 0;
    let calLunch = 0;
    let calDinner =0;
    let index, randomFood;
    while (calBreakfast < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * veganList.length);
        randomFood = veganList[index];
        document.querySelector(".result-list-container.breakfast").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calBreakfast += randomFood.calories;
    }
    while (calLunch < desiredCal*(4/10) - 100) {
        index = Math.floor(Math.random() * veganList.length);
        randomFood = veganList[index];
        document.querySelector(".result-list-container.lunch").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calLunch += randomFood.calories;
    }
    while (calDinner < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * veganList.length);
        randomFood = veganList[index];
        document.querySelector(".result-list-container.dinner").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calDinner += randomFood.calories;
    }
    let cal = calBreakfast + calLunch + calDinner;
    document.querySelector(".breakfast-calories").textContent = calBreakfast;
    document.querySelector(".lunch-calories").textContent = calLunch;
    document.querySelector(".dinner-calories").textContent = calDinner;
    document.querySelector(".total-calories").textContent = cal;
    if (calBreakfast + calDinner + calLunch != 0) {
        noResult.innerHTML = "";
    } 
}

const calculateKetogenic = (desiredCal) => {
    let calBreakfast = 0;
    let calLunch = 0;
    let calDinner =0;
    let index, randomFood;
    while (calBreakfast < desiredCal*(3/10) - 150) {
        index = Math.floor(Math.random() * ketogenicList.length);
        randomFood = ketogenicList[index];
        document.querySelector(".result-list-container.breakfast").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calBreakfast += randomFood.calories;
    }
    while (calLunch < desiredCal*(4/10) - 150) {
        index = Math.floor(Math.random() * ketogenicList.length);
        randomFood = ketogenicList[index];
        document.querySelector(".result-list-container.lunch").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calLunch += randomFood.calories;
    }
    while (calDinner < desiredCal*(3/10) - 150) {
        index = Math.floor(Math.random() * ketogenicList.length);
        randomFood = ketogenicList[index];
        document.querySelector(".result-list-container.dinner").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calDinner += randomFood.calories;
    }
    let cal = calBreakfast + calLunch + calDinner;
    document.querySelector(".breakfast-calories").textContent = calBreakfast;
    document.querySelector(".lunch-calories").textContent = calLunch;
    document.querySelector(".dinner-calories").textContent = calDinner;
    document.querySelector(".total-calories").textContent = cal;
    if (calBreakfast + calDinner + calLunch != 0) {
        noResult.innerHTML = "";
    } 
}

document.querySelector(".start").addEventListener("click", () => {
    if (meat.classList.contains("selected")) {
        calculateAnything(caloriesInput.value);
        document.querySelector(".start").classList.add("hide");
    }
    if (veggie.classList.contains("selected")) {
        calculateVegetarian(caloriesInput.value);
        document.querySelector(".start").classList.add("hide");
    }
    if (vegan.classList.contains("selected")) {
        calculateVegan(caloriesInput.value);
        document.querySelector(".start").classList.add("hide");
    }
    if (ketogenic.classList.contains("selected")) {
        calculateKetogenic(caloriesInput.value);
        document.querySelector(".start").classList.add("hide");
    }
})

document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
})