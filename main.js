import "./style.css";

const ua = window.detect.parse(navigator.userAgent);
console.log(ua.browser);

AFRAME.registerComponent("spawn-model", {
  init: function () {
    const marker = this.el.object3D;
    const sceneEl = document.querySelector("a-scene");
    const modelEl = document.querySelector("#model");
    const model2El = document.querySelector("#model2");

    marker.addEventListener("markerFound", function () {
      alert("Hello! I am an alert box!!");
      if (this.id === "model") {
        sceneEl.appendChild(modelEl.cloneNode(true));
      } else if (this.id === "model2") {
        sceneEl.appendChild(model2El.cloneNode(true));
      }
    });

    marker.addEventListener("markerLost", function () {
      const spawnedModelEls = document.querySelectorAll(".spawned-model");
      spawnedModelEls.forEach(function (spawnedModelEl) {
        spawnedModelEl.parentNode.removeChild(spawnedModelEl);
      });
    });
  },
});

const marker1 = document.querySelector("#model");
const marker2 = document.querySelector("#model2");

marker1.setAttribute("spawn-model", "");
marker2.setAttribute("spawn-model", "");
