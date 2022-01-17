module.exports = {
    purge: [
        './public/**/*.html'
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../assets/img/wave-white.png)',
                'wave-pattern-dots': 'url(../assets/img/pattern-white-dots.png)',
                'pattern-characters-red': 'url(../assets/img/pattern-characters-red.png)',
                'character-mario': 'url(../assets/img/character-l.png)',
                'wave-pink': 'url(../assets/img/wave-pink.png)',
                'yellow-dots': 'url(../assets/img/pattern-yellow-dots.png)',
            }),
            screens: {
                'hover-hover': { 'raw': '(hover: hover)' },
                'xsm': '320px'
            },
        },
    },
    utilies: {
        extends: {},
    },
    plugins: [],
}