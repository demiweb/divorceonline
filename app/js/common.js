function helloConsole() {
    var e = "Made with ❤️ by Demiweb", t = "> https://demiweb-studio.com.ua/", o = [`
 %c ${e} %c ${t} %c %c 

`, "border: 1px solid #000;color: #fff; background: #000; padding:5px 0;", "color: #fff; background: #ff5112; padding:5px 0;border: 1px solid #000;", "background: #fff; padding:5px 0;", "color: #b0976d; background: #fff; padding:5px 0;"];
    if (-1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode) window.console.log(e + " - " + t); else if (-1 != navigator.userAgent.indexOf("Chrome")) {
        for (var r = "%c", l = 0; l < 12; l++) r += " ";
        window.console.log.apply(console, o), window.console.log(r, "font: 56px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUxIiBoZWlnaHQ9IjM3IiBmaWxsPSJub25lIj4NCiAgICA8cGF0aCBkPSJNMTUuNzczIDIzLjI1OGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4IDUuNjg0Yy0yLjI0OCAwLTQuMDM5LS43NS01LjM3MS0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTRWMjguNjNoLTQuNTNsLS40NjgtMS43MThoLS4xNTZjLTEuMTI0IDEuMzUzLTIuNTgyIDIuMDMtNC4zNzIgMi4wM3ptMjAuOTIzIDBjLTIuNzQ5IDAtNC44NzMtLjc1LTYuMzcyLTIuMjQ5LTEuNDc4LTEuNTItMi4yMTctMy42ODUtMi4yMTctNi40OTYgMC0yLjc3Ljc2LTQuOTE0IDIuMjgtNi40MzQgMS41Mi0xLjU0IDMuNjIzLTIuMzExIDYuMzA5LTIuMzExIDIuNTgxIDAgNC42MDEuODEyIDYuMDU5IDIuNDM2IDEuNDc4IDEuNjAzIDIuMjE3IDMuNjU0IDIuMjE3IDYuMTUzbC0uMTU2IDEuNzE3SDM0LjU0Yy40MTYgMS44NzQgMS41MSAyLjgxMSAzLjI4IDIuODExIDEuMjI4IDAgMi4xNzUtLjQxNiAyLjg0MS0xLjI0OWg1LjI3OWE3LjIxIDcuMjEgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzczLjUzem0tMy40MzYtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI2IDEuMDYyLTEuMDkzIDEuODEyek00OC44OTUgMjguNjNWMTEuNzY0aDQuNTI4bC40NjkgMS43MThoLjE1NmMuOTU4LTEuMzUzIDIuMjA3LTIuMDMgMy43NDgtMi4wMy43MjkgMCAxLjM4NC4xMTQgMS45NjcuMzQzLjYwNC4yMDkgMS4wNzMuNDggMS40MDYuODEyLjM1NC4zMzQuNjE0LjYxNS43OC44NDQuMTg4LjIyOS4zMTMuNDE2LjM3NS41NjJoLjE1N2MuMTA0LS4yMy4yOTEtLjUxLjU2Mi0uODQzLjI5MS0uMzM0LjgzMy0uNjk4IDEuNjI0LTEuMDk0Ljc5MS0uNDE2IDEuNjc2LS42MjQgMi42NTUtLjYyNCAxLjYyNCAwIDMuMDQuNTkzIDQuMjQ3IDEuNzggMS4yMjkgMS4xNjYgMS44NDMgMi44MSAxLjg0MyA0LjkzNXYxMC40NjJoLTUuMTU0di05LjUyNWMwLS45NzktLjIwOC0xLjcxOC0uNjI0LTIuMjE4LS40MTYtLjUtLjk5LS43NS0xLjcxOC0uNzUtLjY2NiAwLTEuMTk3LjI1LTEuNTkzLjc1LS4zOTUuNS0uNTkzIDEuMjQtLjU5MyAyLjIxOHY5LjUyNmgtNS4xNTN2LTkuNTI2YzAtLjk3OS0uMjA5LTEuNzE4LS42MjUtMi4yMTgtLjQxNi0uNS0uOTktLjc1LTEuNzE4LS43NS0uNjY2IDAtMS4xOTcuMjUtMS41OTMuNzUtLjM5NS41LS41OTMgMS4yNC0uNTkzIDIuMjE4djkuNTI2aC01LjE1M3ptMjcuNzg1IDBWMTEuNzY0aDUuMTU0VjI4LjYzSDc2LjY4em00LjY1NC0xOC44OTZjLS41Mi41Mi0xLjIxOC43OC0yLjA5My43OC0uODc0IDAtMS41NzItLjI2LTIuMDkyLS43OC0uNTItLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgtMS45OTkuNTIxLS41NDEgMS4yMTktLjgxMiAyLjA5My0uODEyLjg3NSAwIDEuNTcyLjI3IDIuMDkzLjgxMi41NDEuNTIuODEyIDEuMTg3LjgxMiAxLjk5OXMtLjI3IDEuNDg5LS44MTIgMi4wM3ptNi45MTQgMTguODk2TDgzLjcyIDExLjc2NGg1LjMxbDIuNDk4IDEwLjQ2MyAyLjY1NC0xMC40NjNoNC45OThsMi42NTQgMTAuNDYzIDIuNDk5LTEwLjQ2M2g1LjMwOWwtNC41MjggMTYuODY2aC01Ljc3OGwtMi42NTUtOS4zNy0yLjY1NSA5LjM3aC01Ljc3OHptMzAuNzY2LjMxMmMtMi43NDggMC00Ljg3Mi0uNzUtNi4zNzEtMi4yNDktMS40NzgtMS41Mi0yLjIxNy0zLjY4NS0yLjIxNy02LjQ5NiAwLTIuNzcuNzYtNC45MTQgMi4yOC02LjQzNCAxLjUyLTEuNTQgMy42MjItMi4zMTEgNi4zMDgtMi4zMTEgMi41ODIgMCA0LjYwMi44MTIgNi4wNTkgMi40MzYgMS40NzkgMS42MDMgMi4yMTggMy42NTQgMi4yMTggNi4xNTNsLS4xNTYgMS43MTdoLTExLjU1NmMuNDE2IDEuODc0IDEuNTA5IDIuODExIDMuMjc5IDIuODExIDEuMjI5IDAgMi4xNzYtLjQxNiAyLjg0Mi0xLjI0OWg1LjI3OWE3LjIyIDcuMjIgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzc0LjUzem0tMy40MzUtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI3IDEuMDYyLTEuMDkzIDEuODEyem0yMC41NyA0LjkzNmMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnptMy40NjYgNS42ODRjLTEuNzkgMC0zLjI0OC0uNjc3LTQuMzcyLTIuMDNoLS4xNTZsLS40NjkgMS43MThoLTQuNTI4VjYuNzY3aDUuMTUzdjYuNTU5aC4xNTZjMS0xLjI1IDIuNDA1LTEuODc0IDQuMjE2LTEuODc0IDIuMjQ5IDAgNC4wMjkuNzUgNS4zNDEgMi4yNDggMS4zMzMgMS41IDEuOTk5IDMuNjY1IDEuOTk5IDYuNDk3cy0uNjY2IDQuOTk3LTEuOTk5IDYuNDk2Yy0xLjMxMiAxLjUtMy4wOTIgMi4yNDktNS4zNDEgMi4yNDl6bTE0LjAyLS45NjhjLS41NDEuNTQxLTEuMjA4LjgxMi0xLjk5OS44MTItLjc5MSAwLTEuNDU3LS4yNzEtMS45OTktLjgxMmEyLjc4NSAyLjc4NSAwIDAxLS44MTItMmMwLS43Ny4yNzEtMS40MjUuODEyLTEuOTY3YTIuNjY4IDIuNjY4IDAgMDExLjk5OS0uODQzYy43OTEgMCAxLjQ1OC4yODEgMS45OTkuODQzYTIuNjggMi42OCAwIDAxLjgxMiAxLjk2OGMwIC43Ny0uMjcxIDEuNDM2LS44MTIgMS45OTl6bTEwLjAzMy45NjhjLTEuMzc0IDAtMi41NzItLjE2Ny0zLjU5Mi0uNS0xLjAyLS4zNTQtMS44MTEtLjgzMy0yLjM3My0xLjQzNy0uNTYzLS42MDMtLjk4OS0xLjIyOC0xLjI4MS0xLjg3M2E2Ljk0NCA2Ljk0NCAwIDAxLS41NjItMi4xMjRoNS4zMDljLjA4NC40MTYuMzU0Ljc4LjgxMiAxLjA5My40NTguMzEyIDEuMDIxLjQ2OCAxLjY4Ny40NjggMS42NjYgMCAyLjQ5OC0uMzY0IDIuNDk4LTEuMDkzIDAtLjM1NC0uMjM5LS42MzUtLjcxOC0uODQzLS40NzktLjIwOC0xLjA4My0uMzQ0LTEuODExLS40MDZhMTUuMDU5IDE1LjA1OSAwIDAxLTIuMzEyLS40MDYgMTUuNDg3IDE1LjQ4NyAwIDAxLTIuMzQyLS43OGMtLjcwOC0uMzEzLTEuMzAxLS44MzQtMS43OC0xLjU2My0uNDc5LS43MjgtLjcxOC0xLjYzNC0uNzE4LTIuNzE3IDAtMS41NjEuNjM1LTIuODMxIDEuOTA1LTMuODEgMS4yNy0xIDMuMDI5LTEuNSA1LjI3OC0xLjUgMi40OTggMCA0LjM1Mi41NTMgNS41NTkgMS42NTYgMS4yMDggMS4wODMgMS45MDUgMi40MDUgMi4wOTMgMy45NjdoLTUuMzFjLS4wNDEtLjM1NC0uMjYtLjY0Ni0uNjU2LS44NzUtLjM3NC0uMjUtLjkzNy0uMzc1LTEuNjg2LS4zNzUtMS4yNDkgMC0xLjg3NC4zNjUtMS44NzQgMS4wOTMgMCAuMzM0LjIzOS41OTQuNzE4Ljc4MS40NzkuMTg4IDEuMDczLjMyMyAxLjc4MS40MDYuNzI4LjA2MyAxLjUwOS4yMDkgMi4zNDIuNDM4LjgzMy4yMDggMS42MDMuNDY4IDIuMzExLjc4LjcyOS4zMTMgMS4zMzMuODQ0IDEuODEyIDEuNTkzLjQ3OC43MjkuNzE4IDEuNjM1LjcxOCAyLjcxN2E0LjY3IDQuNjcgMCAwMS0uMzQ0IDEuNzhjLS4yMjkuNTYzLS42MTQgMS4xMjUtMS4xNTUgMS42ODctLjUyMS41NjItMS4zMjIgMS4wMS0yLjQwNSAxLjM0My0xLjA4My4zMzMtMi4zODQuNS0zLjkwNC41em0xNy40OTEtLjMxMmMtMS45OTkgMC0zLjQzNS0uNDE3LTQuMzEtMS4yNS0uODc0LS44NTQtMS4zMTItMi4xNTUtMS4zMTItMy45MDRWMTYuNDVoLTIuNjU0di00LjY4NWgyLjY1NGwuNzgxLTQuMzcyaDQuMzczdjQuMzcyaDMuOTA0djQuNjg1aC0zLjkwNHY2LjA5YzAgLjM5Ni4xMzUuNzI5LjQwNiAxIC4yNy4yNy42MDMuNDA2Ljk5OS40MDZoMi40OTl2NC42ODRoLTMuNDM2em0xMi4zMjMuMzEyYy0xLjY0NCAwLTMuMDUtLjU3My00LjIxNi0xLjcxOC0xLjE0NS0xLjE2Ni0xLjcxOC0yLjg4NC0xLjcxOC01LjE1M1YxMS43NjRoNS4xNTR2OS41MjZjMCAuOTM3LjIyOSAxLjY2Ni42ODcgMi4xODYuNDU4LjUyIDEuMTE0Ljc4MSAxLjk2Ny43ODEuNzkyIDAgMS40MjctLjI2IDEuOTA1LS43OC41LS41NDIuNzUtMS4yNy43NS0yLjE4N3YtOS41MjZoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjE4NyAxLjM1My0yLjY5NiAyLjAzLTQuNTI5IDIuMDN6bTE4LjQwNy01LjY4NGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4MSA1LjY4NGMtMi4yNDkgMC00LjA0LS43NS01LjM3Mi0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjEyNCAxLjM1My0yLjU4MiAyLjAzLTQuMzcyIDIuMDN6bTEzLjExNC0uMzEyVjExLjc2NGg1LjE1M1YyOC42M2gtNS4xNTN6bTQuNjUzLTE4Ljg5NmMtLjUyLjUyLTEuMjE4Ljc4LTIuMDkyLjc4LS44NzUgMC0xLjU3Mi0uMjYtMi4wOTMtLjc4LS41MjEtLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgxLTEuOTk5LjUyMS0uNTQxIDEuMjE4LS44MTIgMi4wOTMtLjgxMi44NzQgMCAxLjU3Mi4yNyAyLjA5Mi44MTIuNTQxLjUyLjgxMiAxLjE4Ny44MTIgMS45OTlzLS4yNzEgMS40ODktLjgxMiAyLjAzem0xNy44MTUgMTYuOTI4Yy0xLjQ3OSAxLjUyLTMuNTUgMi4yOC02LjIxNiAyLjI4LTIuNjY1IDAtNC43MzYtLjc2LTYuMjE1LTIuMjgtMS40NzgtMS41Mi0yLjIxNy0zLjY3NS0yLjIxNy02LjQ2NXMuNzM5LTQuOTQ1IDIuMjE3LTYuNDY1YzEuNDc5LTEuNTIgMy41NS0yLjI4IDYuMjE1LTIuMjggMi42NjYgMCA0LjczNy43NiA2LjIxNiAyLjI4IDEuNDc4IDEuNTIgMi4yMTcgMy42NzUgMi4yMTcgNi40NjVzLS43MzkgNC45NDUtMi4yMTcgNi40NjV6bS04LjU4OS0zLjQwNGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnoiDQogICAgICAgICAgZmlsbD0iIzAwMCI+PC9wYXRoPg0KPC9zdmc+);")
    } else {
        var o = `
%c${(r = "demiweb").split("").join("%c %c")}%c
`, c = [],
            i = ["font: 32px/1.5 Helvetica, Arial, sans-serif", "text-transform: uppercase", "color: #fff", "background-color: #ffd800", "padding: 4px 14px"].join(";");
        r.split("").forEach(() => {
            c.push(i), c.push("")
        }), window.console.log(e + " - " + t), window.console.log(o, ...c)
    }
}

helloConsole();

var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


//video


$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);

});


//anim

//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 40;
            })
        })
    }
}

addCoutingDelay();

var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                        eles[i].classList.add('done');
                        eles[i].style.setProperty('--del', (entry.target.dataset.animDelay * i) + 'ms');
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


$('.single-faq__head').click(function () {
    // $(this).closest('.single-faq').toggleClass(' open ');
    //$(this).siblings().removeClass(' active ');

    if ($(this).closest('.single-faq').hasClass('open')) {
        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideUp();
        $(this).closest('.single-faq').removeClass('open');
    } else {
        $(this).closest('.faq-owner').find('.single-faq__cont').stop().slideUp();
        $(this).closest('.faq-owner').find('.single-faq').removeClass('open');

        $('.single-faq.open').find('.single-faq__cont').stop().slideUp();
        $('.single-faq.open').removeClass('open');

        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideDown();
        $(this).closest('.single-faq').addClass('open');

    }

    return false;
});
let hh = $('header').outerHeight();

// control footer
function updateHeaderHeight() {
    hh = $('header').outerHeight();
    document.body.style.setProperty('--headerheight', `${hh}px`);
}

updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


let footerMen = [...document.querySelectorAll('.footer-opens')];

function controlFooterMenu() {
    if (footerMen.length) {
        footerMen.forEach((block) => {
            let btn = block.querySelector('span');
            btn.addEventListener('click', () => {
                block.classList.toggle('open');
            })
        })
    }
}

controlFooterMenu();
// control footer
// footer

let menuOption = [...document.querySelectorAll('.header-menu >ul li.menu-item-has-children>a')];

function controlMenuOpen() {
    if (menuOption.length) {
        menuOption.forEach((btn) => {
            let newArrMob = document.createElement('div');
            newArrMob.classList.add('arr');
            btn.appendChild(newArrMob);

            newArrMob.addEventListener('click', (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.menu-item-has-children').classList.toggle('open');
                }

            })
        })
    }
}

controlMenuOpen();


let blogSlider = [...document.querySelectorAll('.blog-slider')];

function startBlogSlider() {
    if (blogSlider.length) {
        blogSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldNext = sld.querySelector('.slider-btn--next');
            let pagin = sld.querySelector('.dots');
            let amount = 4;

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: 10,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: false,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 10,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }


            });


        })
    }
}

startBlogSlider();


// scrollbtn
let scrlBtn = [...document.querySelectorAll('.scroll-to')];

function controlScrollBtn() {
    scrlBtn.forEach((btn) => {
        let lnk = btn.dataset.to;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`.${lnk}`).offset().top - hh
            }, 600);

        })
    })
}

controlScrollBtn();


let ownerTabs = [...document.querySelectorAll('.tabs-owner')];

function controlTabs() {
    if (ownerTabs.length) {
        ownerTabs.forEach((tab) => {
            let tabOpen = [...tab.querySelectorAll('.tab-btn')];
            let singleTab = [...tab.querySelectorAll('.single-tab')];

            tabOpen.forEach((btn, k) => {
                btn.addEventListener('click', () => {
                    if (!btn.classList.contains('active')) {
                        tabOpen.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        singleTab.forEach((btn3) => {
                            btn3.classList.remove('active');
                        });
                        btn.classList.add('active');
                        singleTab[k].classList.add('active');
                    }
                })
            });
            singleTab.forEach((tab, l) => {
                if (tab.querySelector('.single-tab__head')) {
                    tab.querySelector('.single-tab__head').addEventListener('click', () => {
                        tabOpen[l].click();
                    })
                }

            })
        })
    }
}

controlTabs();

// tabs


//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let btnClose = [...document.querySelectorAll('.btn-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                // alert('tut bude popup');
                modals.forEach((mod) => {

                    if (mod.dataset.modal === data) {
                        header.classList.remove('active');
                        document.body.classList.add('no-scroll');
                        if (document.querySelector('.modal-window.visible')) {
                            document.querySelector('.modal-window.visible').classList.remove('visible');
                        }
                        mod.classList.add('visible');
                        burger.forEach((brg) => {
                            brg.classList.remove('active');
                        })

                    }
                });

            })
        });


        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }

            })
        });

        btnClose.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');


            })
        });

        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

            })
        });


    }
}

controlModal();
$('body').on('click', '.btn-close', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.modal-window.visible').removeClass('visible');
    document.body.classList.remove('no-scroll');
})

//modal


//rating

function getRaty() {
    $('.rating-stars').each(function (index) {
        if ($(this).html() == '') {
            $(this).raty({
                readOnly: true,
                starHalf: 'catalog/view/theme/fpvua/img/star-full.svg',
                starOn: 'catalog/view/theme/fpvua/img/star-full.svg',
                starOff: 'catalog/view/theme/fpvua/img/star-clear.svg',
                hints: ['a', null, '', null, '', null]
            });
        }
    });
}

getRaty();

// video blocks
let videoBlock = [...document.querySelectorAll('.video-block')];

function controlVideoBlock() {
    if (videoBlock.length) {
        videoBlock.forEach((block) => {
            let vid = block.querySelector('video');
            let btn = block.querySelector('.play');
            let id = btn.dataset.video;
            let modalVideo = $('.modal-window--video')[0];

            btn.addEventListener('click', () => {

                let videoBl = document.createElement('video');
                videoBl.src = id;
                videoBl.playsinline = true;
                videoBl.controls = true;
                modalVideo.querySelector('.video-container').append(videoBl);
                videoBl.play();
                modalVideo.classList.add('visible');
                document.querySelector('body').classList.add('no-scroll');

            })
        })
    }
}

controlVideoBlock();

// control seo
let seoBlock = [...document.querySelectorAll('.seo-block')];

function controlSeo() {
    if (seoBlock.length) {
        seoBlock.forEach((block) => {
            let btn = block.querySelector('.btn-white');
            let btnHide = btn.dataset.hide;
            let btnShow = btn.dataset.open;

            btn.addEventListener('click', () => {
                if (block.classList.contains('open')) {
                    btn.innerHTML = btnShow;
                    block.classList.remove('open');
                } else {
                    btn.innerHTML = btnHide;
                    block.classList.add('open');
                }
            })
        })
    }
}

controlSeo();

let blogCats = [...document.querySelectorAll('.blog-section__categories')];

function controlBlogCats() {
    if (blogCats.length) {
        blogCats.forEach((blg) => {
            let btn = blg.querySelector(':scope > span');
            btn.addEventListener('click', () => {
                blg.classList.toggle('open');
            })
        })
    }
}

controlBlogCats();

//control popup test

let testSection = [...document.querySelectorAll('.test-section')];

function controlTest() {
    if (testSection.length) {
        testSection.forEach((test) => {
            let questions = [...test.querySelectorAll('.test-section__block')];
            questions.forEach((block) => {
                let dat = block.dataset.quest;
                let btnNext = [...block.querySelectorAll('.nxt')];
                if (btnNext.length) {
                    btnNext.forEach((nxt) => {
                        nxt.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            let nextSect = nxt.dataset.next;
                            document.querySelector('.test-section__block.vis').classList.remove('vis');

                            document.querySelector(`.test-section__block[data-quest='${nextSect}']`).classList.add('vis');
                            document.querySelector(`.test-section__block[data-quest='${nextSect}'] .bck`).dataset.back = dat;
                        })
                    })
                }
            })
        });
        let bckBtns = [...document.querySelectorAll('.test-section__block .bck')];
        bckBtns.forEach((bkc) => {
            bkc.addEventListener('click', () => {
                let dataBack = bkc.dataset.back;
                document.querySelector('.test-section__block.vis').classList.remove('vis');
                document.querySelector(`.test-section__block[data-quest='${dataBack}']`).classList.add('vis');
            })
        })

    }
}

controlTest();