import './style.css'

AFRAME.registerComponent("spawn-model", {
  init: function() {
    const marker = this.el.object3D;
    const sceneEl = document.querySelector("a-scene");
    const modelEl = document.querySelector("#model");
    const model2El = document.querySelector("#model2");

    marker.addEventListener("markerFound", function() {
      if (this.id === "model-marker") {
        sceneEl.appendChild(modelEl.cloneNode(true));
      } else if (this.id === "model2-marker") {
        sceneEl.appendChild(model2El.cloneNode(true));
      }
    });

    marker.addEventListener("markerLost", function() {
      const spawnedModelEls = document.querySelectorAll(".spawned-model");
      spawnedModelEls.forEach(function(spawnedModelEl) {
        spawnedModelEl.parentNode.removeChild(spawnedModelEl);
      });
    });
  }
});

const marker1 = document.querySelector("#model-marker");
const marker2 = document.querySelector("#model2-marker");

marker1.setAttribute("spawn-model", "");
marker2.setAttribute("spawn-model", "");