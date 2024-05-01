const http = require('http');
const path = require('path')
const { mainRouteController, gameRouteController, voteRouteController, defaultRouteController } = require('./controllers')


const server = http.createServer((req, res) => {
    console.log('Пришёл запрос!');
    const url = req.url;
    switch (url) {
        case "/":
            console.log("запрос по url = '/'")
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            console.log("запрос по url = '/game'")
            gameRouteController(res)
            break;
        case "/vote":
            console.log("запрос по url = '/vote'")
            voteRouteController(req, res)
            break;
        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005);
