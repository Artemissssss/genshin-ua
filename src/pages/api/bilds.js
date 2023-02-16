export default function handler (req,res){
    res.status(200).json([{
        key: 1,
        name: "Білд на Сяо",
        imgPost: "/img/xiao-bild.png",
        width: "247",
        height: "139",
        route: "/xiao",
        link: "/bilds/xiao",
        content: "<h1 classname='articles-title'>Сяо<h1/>",
        comments:[],
    },])
}
