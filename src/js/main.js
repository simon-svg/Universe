const loader = document.querySelector(".loader");

document.body.onload = () => {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500)
}






const planets = document.querySelectorAll(".img");
const appCont = document.querySelector(".app__cont");
const onePlanetImg = document.querySelector(".one-planet_img");
const planetInfoTitle = document.querySelector(".planet__info_title");
const planetDescrpLeft = document.querySelector(".planet__descrp_left");
const planetDescrpRight = document.querySelector(".planet__descrp_right");
const planetDescrpLeft1 = document.querySelector(".planet__descrp_left1");
const planetDescrpRight1 = document.querySelector(".planet__descrp_right1");
const planetDescrpLeft2 = document.querySelector(".planet__descrp_left2");
const planetDescrpRight2 = document.querySelector(".planet__descrp_right2");
const planetDescrpLeft3 = document.querySelector(".planet__descrp_left3");
const planetDescrpRight3 = document.querySelector(".planet__descrp_right3");
const planetDescrpLeft4 = document.querySelector(".planet__descrp_left4");
const planetDescrpRight4 = document.querySelector(".planet__descrp_right4");
let planetArr;


fetch('src/js/planets.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        planets.forEach((item, i) => {
            item.addEventListener("click", () => {
                onePlanetImg.setAttribute("src", data[i].src);
                onePlanetImg.setAttribute("alt", data[i].name);
                planetInfoTitle.innerHTML = data[i].name;
                planetDescrpLeft4.innerHTML = "info";
                planetDescrpRight4.innerHTML = data[i].info;
                if (data[i].name === "sun") {
                    planetDescrpLeft.innerHTML = "age";
                    planetDescrpRight.innerHTML = data[i].age;
                    planetDescrpLeft1.innerHTML = "distance from galactic center";
                    planetDescrpRight1.innerHTML = data[i].distanceFromGalacticCenter;
                    planetDescrpLeft2.innerHTML = "length from Year";
                    planetDescrpRight2.innerHTML = data[i].lengthFromYear;
                    planetDescrpLeft3.innerHTML = "star type";
                    planetDescrpRight3.innerHTML = data[i].starType;
                }
                else {
                    planetDescrpLeft.innerHTML = "distance from sun";
                    planetDescrpRight.innerHTML = data[i].distanceFromSun;
                    planetDescrpLeft1.innerHTML = "length of year";
                    planetDescrpRight1.innerHTML = data[i].LengthOfYear;
                    planetDescrpLeft2.innerHTML = "satellite";
                    planetDescrpRight2.innerHTML = data[i].satellite;
                    planetDescrpLeft3.innerHTML = "planet type";
                    planetDescrpRight3.innerHTML = data[i].planerType;
                }

                appCont.style.opacity = "0";
                appCont.style.visibility = "hidden";
                setTimeout(() => {
                    appOnePlanet.style.opacity = "1";
                    appOnePlanet.style.visibility = "visible";
                }, 700)
            })
        })
    })






// planet close
const planetClose = document.querySelector(".planet__close");
const appOnePlanet = document.querySelector(".app__one-planet");

planetClose.addEventListener("click", () => {
    appOnePlanet.style.opacity = "0",
        appOnePlanet.style.visibility = "hidden";
    setTimeout(() => {
        appCont.style.opacity = "1";
        appCont.style.visibility = "visible";
    }, 700)
})







// 3d mode
const universeTransform = document.querySelector(".universe__transform");
const sun = document.querySelector(".sun");
const universeCont = document.querySelector(".universe__cont");
const planet = document.querySelectorAll(".planet");
const planetImg = document.querySelectorAll(".planet__img");
const universe = document.querySelector(".universe");

if (!localStorage.getItem("transform")) {
    localStorage.setItem("transform", false);
}
else if (JSON.parse(localStorage.getItem("transform"))) {
    universeTransform.setAttribute("class", "universe__transform universe__transform_2d");
    universeCont.style["transform-style"] = "preserve-3d";
    planet.forEach((item) => {
        item.style["transform-style"] = "preserve-3d";
    })
    anim3d(0, 15);
    anim3d(1, 22);
    anim3d(2, 30);
    anim3d(3, 40);
    anim3d(4, 51);
    anim3d(5, 63);
    anim3d(6, 75);
    anim3d(7, 88);
    sun.style.transform = "rotateX(-60deg) translate(-50%, -30%)";
    universe.style["transform-style"] = "preserve-3d";
    universe.style["transform"] = "scale(1.5) rotateX(60deg)";
}
else if (!JSON.parse(localStorage.getItem("transform"))) {
    universeTransform.setAttribute("class", "universe__transform universe__transform_3d")
    anim2d(0, 15);
    anim2d(1, 22);
    anim2d(2, 30);
    anim2d(3, 40);
    anim2d(4, 51);
    anim2d(5, 63);
    anim2d(6, 75);
    anim2d(7, 88);
    sun.style.transform = "translate(-50%, -50%)";
    universe.style["transform"] = "scale(1)";
}

universeTransform.addEventListener("click", () => {
    localStorage.setItem("transform", !JSON.parse(localStorage.getItem("transform")))
    location.reload()
})




// let bool = true;
// universeTransform.addEventListener("click", () => {
//     if (bool) {
//         universeTransform.setAttribute("class", "universe__transform universe__transform_2d");
//         universeCont.style["transform-style"] = "preserve-3d";
//         planet.forEach((item) => {
//             item.style["transform-style"] = "preserve-3d";
//         })
//         anim3d(0, 15);
//         anim3d(1, 22);
//         anim3d(2, 30);
//         anim3d(3, 40);
//         anim3d(4, 51);
//         anim3d(5, 63);
//         anim3d(6, 75);
//         anim3d(7, 88);
//         sun.style.transform = "rotateX(-60deg) translate(-50%, -30%)";
//         universe.style["transform-style"] = "preserve-3d";
//         universe.style["transform"] = "scale(1.5) rotateX(60deg)";
//     }
//     else {
//         universeTransform.setAttribute("class", "universe__transform universe__transform_3d")
//         anim2d(0, 15);
//         anim2d(1, 22);
//         anim2d(2, 30);
//         anim2d(3, 40);
//         anim2d(4, 51);
//         anim2d(5, 63);
//         anim2d(6, 75);
//         anim2d(7, 88);
//         sun.style.transform = "translate(-50%, -50%)";
//         universe.style["transform"] = "scale(1)";
//     }
//     bool = !bool;
// })


function anim3d(item, time) {
    planetImg[item].style.animation = `roundPlanet3d linear ${time}s infinite`;
    planet[item].style.animation = `roundMove linear ${time}s infinite`
    return;
}
function anim2d(item, time) {
    planetImg[item].style.animation = `roundPlanet linear ${time}s infinite`;
    planet[item].style.animation = `roundMove linear ${time}s infinite`
    return;
}