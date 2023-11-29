document.getElementById('game-trigger').addEventListener('click', function () {
    document.getElementById('cloud1').style.left = '-300px';
    document.getElementById('cloud2').style.left = '-310px';
    document.getElementById('cloud3').style.left = '1300px';
    document.getElementById('cloud4').style.left = '1500px';
    setTimeout(() => {
        // paste you game showcase page here
        location.href = "";
    }, 300);
});
