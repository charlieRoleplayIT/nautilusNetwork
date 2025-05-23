document.body.style.overflow = 'hidden';

setTimeout(function () {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.transition = 'opacity 1s';
    loadingScreen.style.opacity = '0';

    setTimeout(function () {
        document.body.style.overflow = 'auto';
        loadingScreen.style.display = 'none';
    }, 200);
}, 2000);