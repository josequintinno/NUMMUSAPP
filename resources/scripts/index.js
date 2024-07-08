var app = new Framework7({
    el: '#app',
    name: 'Meu Projeto',
    id: 'com.meu.projeto',
    panel: {
        swipe: true,
    },
    routes: [
        {
            path: '/',
            url: './index.html',
        },
    ],
});
