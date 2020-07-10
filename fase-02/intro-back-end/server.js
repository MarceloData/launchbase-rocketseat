const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
});

server.get("/", function (req, res) {
    const about = {
        avatar_url:
            "https://avatars3.githubusercontent.com/u/25375937?s=460&u=948854db635f76669ad6e3bba58fc10b058abadc&v=4",
        name: "Marcelo Renato",
        role: "Aluno - Rocketseat 🚀 ",
        description:
            'Aluno de desenvolvimento web em <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>',
        link: [
            { name: "Github", url: "https://github.com/MarceloData" },
            { name: "Twitter", url: "https://twitter.com/MarceloRenatoSA" },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/marcelo-renato-alves/",
            },
        ],
    };
    return res.render("about", { about: about });
});

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos });
});

server.get("/video", function (req, res) {
    const id = req.query.id;
    const video = videos.find(function (video) {
        return video.id == id;
    });
    if (!video) {
        return res.send("Video not found!");
    }

    return res.render("video", { item: video });
});

server.listen(5000, function () {
    console.log("Server is running");
});
