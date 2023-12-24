function showScreen(screenId) {
    var screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen) {
        if (screen.id === screenId) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
}
