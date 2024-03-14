function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if (themeName === 'dark-theme') {
        icon.src = "image/dark.png";
    } else {
        icon.src = "image/white.png";
    }
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

var icon = document.getElementById("icon");
icon.addEventListener('click', function() {
    toggleTheme();
});

if (localStorage.getItem('theme') === 'dark-theme') {
    setTheme('dark-theme');
} else {
    setTheme('light-theme');
}