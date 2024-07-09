var app = new Framework7({
    el: '#app',
    name: 'NUMMUS',
    id: 'br.com.quintinno.nummus',
    panel: {
        swipe: true,
    },
    routes: [
        {
            path: '/',
            url: './index.html',
        },
        {
            path: '/detalhe-conta-bancaria/',
            url: './detalhe-conta-bancaria.html',
            animate: true,
        }
    ],
});

var mainView = app.views.create('.view-main', { url: '/index/' });