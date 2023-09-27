// Your code here
function moveDodgerLeft() {
const dodger = document.getElementById('dodger'); 
document.addEventListener("keydown", function (l) {
    if (l.key === "ArrowLeft") {
      moveDodgerLeft();
      dodger.style.left = 180 - 'px';
    }
  });
}
moveDodgerLeft();

function moveDodgerRight() {
    const dodger = document.getElementById('dodger'); 
    document.addEventListener("keydown", function (r) {
        if (r.key === "ArrowRight") {
          moveDodgerRight();
          dodger.style.right = 180 + 'px';
        }
      });
}

moveDodgerRight();

