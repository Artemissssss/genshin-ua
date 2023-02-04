export default function handler(req, res) {
    res.status(200).json([{
        key: 1,
        name: "Цікаве про Сяо",
        imgPost: "/img/xiao-article.png",
        width: "247",
        height: "139",
        route: "/articles/xiao",
        content: "<h1 classname='articles-title'>Сяо<h1/>"
    }, ])
}