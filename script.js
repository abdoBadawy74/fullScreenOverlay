let overlay = document.getElementsByClassName("overlay")[0];

overlay.style.cssText =
  "  position: fixed;left: 0;top: 0;background-color: rgba(0, 0, 0, 0.6);width: 100%;height: 100vh;transform: scale(0);transition: 0.3s;";

function openDiv() {
  overlay.style.transform = "scale(1)";
}

let content = document.getElementsByClassName("content")[0];

content.style.cssText =
  "  position: relative;top: 25%;text-align: center;margin-top: 4%;";

let close = document.getElementsByTagName("span")[0];

close.style.cssText =
  "  position: absolute;right: 20px;top: 20px;font-size: 60px;color: #fff;cursor: pointer;";

close.onclick = function () {
  overlay.style.transform = "scale(0)";
};

document.querySelectorAll(".content a").forEach((el) => {
  el.style.cssText =
    "  text-decoration: none;display: block;font-size: 30px;margin-bottom: 2%;color: #fff;";
});

let open = document.getElementsByTagName("span")[1];

open.onclick = openDiv;
