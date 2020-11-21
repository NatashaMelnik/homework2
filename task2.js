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

function liveTam() {

    let timerId = setInterval(function () {

        if (currentFeed == 12) {
            $("#cat_image").attr('src', 'images/cat_eat.jpg');
            $('#tamFeed_text').css("color", "red");
            $('#tamFeed_text').click(function () {
                currentFeed = 20;
                $('#tamFeed_text').css("color", "black");
                backCat();
            })
        }

        if (currentWalk == 7) {
            $("#cat_image").attr('src', 'images/cat_walk.jpg');
            $('#tamWalk_text').css("color", "red");
            $('#tamWalk_text').click(function () {
                currentWalk = 20;
                $('#tamWalk_text').css("color", "black");
                backCat();
            })
        }

        if (currentSleep == 15) {
            $("#cat_image").attr('src', 'images/cat_sleep.jpg');
            $('#tamSleep_text').css("color", "red");
            $('#tamSleep_text').click(function () {
                currentSleep = 40;
                $('#tamSleep_text').css("color", "black");
                backCat();
            })
        }

        if (currentDrink == 5) {
            $("#cat_image").attr('src', 'images/cat_drink.jpg');
            $('#tamDrink_text').css("color", "red");
            $('#tamDrink_text').click(function () {
                currentDrink = 10;
                $('#tamDrink_text').css("color", "black");
                backCat();
            })
        }

        if (currentRun == 12) {
            $("#cat_image").attr('src', 'images/cat_run.jpg');
            $('#tamRun_text').css("color", "red");
            $('#tamRun_text').click(function () {
                currentRun = 30;
                $('#tamRun_text').css("color", "black");
                backCat();
            })
        }

        if (currentWash == 13) {
            $("#cat_image").attr('src', 'images/cat_wash.jpg');
            $('#tamWash_text').css("color", "red");
            $('#tamWash_text').click(function () {
                currentWash = 30;
                $('#tamWash_text').css("color", "black");
                backCat();
            })
        }

        if (currentChill == 11) {
            $("#cat_image").attr('src', 'images/cat_beaty.jpg');
            $('#tamChill_text').css("color", "red");
            $('#tamChill_text').click(function () {
                currentChill = 30;
                $('#tamChill_text').css("color", "black");
                backCat();
            })
        }

        if (currentStudy == 8) {
            $("#cat_image").attr('src', 'images/cat_study.jpg');
            $('#tamStudy_text').css("color", "red");
            $('#tamStudy_text').click(function () {
                currentStudy = 25;
                $('#tamStudy_text').css("color", "black");
                backCat();
            })
        }

        if (currentDoct == 15) {
            $("#cat_image").attr('src', 'images/cat_treatment.png');
            $('#tamDoctor_text').css("color", "red");
            $('#tamDoctor_text').click(function () {
                currentDoct = 50;
                $('#tamDoctor_text').css("color", "black");
                backCat();
            })
        }


        if (currentFeed == 5 || currentWalk == 4 || currentSleep == 7 || currentDrink == 2 || currentRun == 6 || currentWash == 8 || currentChill == 9 || currentStudy == 5 || currentDoct == 8) {
            sadCat();
        }

        if (currentFeed == 0 || currentWalk == 0 || currentSleep == 0 || currentDrink == 0 || currentRun == 0 || currentWash == 0 || currentChill == 0 || currentStudy == 0 || currentDoct == 0) {
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

    }, 2000);
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
