(function () {
    const $like = document.querySelector('#like');
    $like.addEventListener('click', () => $like.style.color = $like.style.color !== 'red' ? 'red' : 'black');
})();

(function () {
    const $date = document.querySelector('#current-date');
    $date.innerHTML = new Date();
})();