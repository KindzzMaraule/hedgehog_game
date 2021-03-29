const hedgehog = document.getElementById("hedgehog");
const tree = document.getElementById("tree");

document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (hedgehog.classList != "jump") {
    hedgehog.classList.add("jump");
  }

  setTimeout(function () {
    hedgehog.classList.remove("jump");
  }, 300);
}

let isAlaive = setInterval(function () {
  let hedgehogTop = parseInt(
    window.getComputedStyle(hedgehog).getPropertyValue("top")
  );
  let treeLeft = parseInt(
    window.getComputedStyle(tree).getPropertyValue("left")
  );

  if (treeLeft < 50 && treeLeft > 0 && hedgehogTop >= 140) {
    alert("GAME OVER!!");
  }
}, 10);
