(function () {
  const $like = document.querySelector("#like");
  const $counter = document.querySelector("#like-counter");
  $like.addEventListener("click", () => {
    let isLike = $like.classList.contains("unliked");

    let newIconColor, newBtnColor, counterContent;

    if (isLike) {
      $like.classList = ['liked'];
      counterContent = "1";
    } else {
        $like.classList = ['unliked'];
      counterContent = null;
    }

    $like.style.color = newIconColor;
    $like.style.backgroundColor = newBtnColor;
    $counter.textContent = counterContent;
  });
})();

(function () {
  const $date = document.querySelector("#current-date");
  setInterval(() => ($date.innerHTML = new Date().toLocaleString()), 1000);
})();
