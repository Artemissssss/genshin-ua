export default function handler (req,res){
    res.status(200).json([{
        key: 1,
        name: "Сяо",
        imgPost: "/img/xiao-hero.png",
        width: "247",
        height: "139",
        route: "/xiao",
        link: "/heroes/xiao",
        content: "<h1 classname='articles-title'>Сяо<h1/>",
        comments:[],
    },])
}
