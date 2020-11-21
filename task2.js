let tamFeed_text = document.querySelector('#tamFeed_text');
let tamWalk_text = document.querySelector('#tamWalk_text');
let tamSleep_text = document.querySelector('#tamSleep_text');
let tamDrink_text = document.querySelector('#tamDrink_text');
let tamRun_text = document.querySelector('#tamRun_text');
let tamWash_text = document.querySelector('#tamWash_text');
let tamChill_text = document.querySelector('#tamChill_text');
let tamStudy_text = document.querySelector('#tamStudy_text');
let tamDoctor_text = document.querySelector('#tamDoctor_text');

let tamFeed = document.querySelector('#tamFeed'); // 20
let tamWalk = document.querySelector('#tamWalk'); // 20
let tamSleep = document.querySelector('#tamSleep'); // 40
let tamDrink = document.querySelector('#tamDrink'); // 10
let tamRun = document.querySelector('#tamRun'); //30
let tamWash = document.querySelector('#tamWash'); //30
let tamChill = document.querySelector('#tamChill'); //30
let tamStudy = document.querySelector('#tamStudy'); //25
let tamDoctor = document.querySelector('#tamDoctor'); //50

let currentFeed = Number(tamFeed.textContent);
let currentWalk = Number(tamWalk.textContent);
let currentSleep = Number(tamSleep.textContent);
let currentDrink = Number(tamDrink.textContent);
let currentRun = Number(tamRun.textContent);
let currentWash = Number(tamWash.textContent);
let currentChill = Number(tamChill.textContent);
let currentStudy = Number(tamStudy.textContent);
let currentDoct = Number(tamDoctor.textContent);

let structureFeed = {
    imageSrc: 'images/cat_eat.jpg',
    idNeedsText: '#tamFeed_text',
    maxValue: 20
};

let structureWalk = {
    imageSrc: 'images/cat_walk.jpg',
    idNeedsText: '#tamWalk_text',
    maxValue: 20
};

let structureSleep = {
    imageSrc: 'images/cat_sleep.jpg',
    idNeedsText: '#tamSleep_text',
    maxValue: 40
};

let structureDrink = {
    imageSrc: 'images/cat_drink.jpg',
    idNeedsText: '#tamDrink_text',
    maxValue: 10
};

let structureRun = {
    imageSrc: 'images/cat_run.jpg',
    idNeedsText: '#tamRun_text',
    maxValue: 30
};

let structureWash = {
    imageSrc: 'images/cat_wash.jpg',
    idNeedsText: '#tamWash_text',
    maxValue: 30
};

let structureChill = {
    imageSrc: 'images/cat_beaty.jpg',
    idNeedsText: '#tamChill_text',
    maxValue: 30
};

let structureStudy = {
    imageSrc: 'images/cat_study.jpg',
    idNeedsText: '#tamStudy_text',
    maxValue: 25
};

let structureDoct = {
    imageSrc: 'images/cat_treatment.png',
    idNeedsText: '#tamDoctor_text',
    maxValue: 50
};

function setMaxValue(structure) {
    if (structure == structureFeed) {
        currentFeed = structureFeed.maxValue;
    }
    else if (structure == structureWalk) {
        currentWalk = structure.maxValue;
    }
    else if (structure == structureSleep) {
        currentSleep = structure.maxValue;
    }
    else if (structure == structureDrink) {
        currentDrink = structure.maxValue;
    }
    else if (structure == structureRun) {
        currentRun = structure.maxValue;
    }
    else if (structure == structureWash) {
        currentWash = structure.maxValue;
    }
    else if (structure == structureChill) {
        currentChill = structure.maxValue;
    }
    else if (structure == structureStudy) {
        currentStudy = structure.maxValue;
    }
    else if (structure == structureDoct) {
        currentDoct = structure.maxValue;
    }
}

function onCatNeeds(structure) {
    $("#cat_image").attr('src', structure.imageSrc);
    $(structure.idNeedsText).css("color", "red");
    $(structure.idNeedsText).click(function () {
        setMaxValue(structure);
        $(structure.idNeedsText).css("color", "black");
        backCat();
    })
}

function liveTam() {

    let timerId = setInterval(function () {

        if (currentFeed == 12) {
            onCatNeeds(structureFeed);
        }

        if (currentWalk == 12) {
            onCatNeeds(structureWalk);
        }

        if (currentSleep == 15) {
            onCatNeeds(structureSleep);
        }

        if (currentDrink == 5) {
            onCatNeeds(structureDrink);
        }

        if (currentRun == 12) {
            onCatNeeds(structureRun);
        }

        if (currentWash == 13) {
            onCatNeeds(structureWash);
        }

        if (currentChill == 11) {
            onCatNeeds(structureChill);
        }

        if (currentStudy == 8) {
            onCatNeeds(structureStudy);
        }

        if (currentDoct == 15) {
            onCatNeeds(structureDoct);
        }

        if (currentFeed == 5 ||
            currentWalk == 4 ||
            currentSleep == 7 ||
            currentDrink == 2 ||
            currentRun == 6 ||
            currentWash == 8 ||
            currentChill == 9 ||
            currentStudy == 5 ||
            currentDoct == 8) {
            sadCat();
        }

        if (currentFeed == 0 ||
            currentWalk == 0 ||
            currentSleep == 0 ||
            currentDrink == 0 ||
            currentRun == 0 ||
            currentWash == 0 ||
            currentChill == 0 ||
            currentStudy == 0 ||
            currentDoct == 0) {
            catDeath();
            clearInterval(timerId);
        }

        currentFeed--;
        currentWalk--;
        currentSleep--;
        currentDrink--;
        currentRun--;
        currentWash--;
        currentChill--;
        currentStudy--;
        currentDoct--;

        tamFeed.textContent = currentFeed;
        tamWalk.textContent = currentWalk;
        tamSleep.textContent = currentSleep;
        tamDrink.textContent = currentDrink;
        tamRun.textContent = currentRun;
        tamWash.textContent = currentWash;
        tamChill.textContent = currentChill;
        tamStudy.textContent = currentStudy;
        tamDoctor.textContent = currentDoct;

    }, 1000);
}

liveTam();

function sadCat() {
    $("#cat_image").attr('src', 'images/cat_sad.jpg');
}

function catDeath() {
    document.querySelector('#cat_name').textContent = 'Mr. Kitty is dead';
    $("#cat_image").attr('src', 'images/cat_death.jpg');
}

function backCat() {
    $("#cat_image").attr('src', 'images/def_cat.jpg');
}
