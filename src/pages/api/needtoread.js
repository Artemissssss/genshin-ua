export default function handler (req,res){
    res.status(200).json([{
        name: "Мондштадт",
        imgPost: "/img/mondstadt.png",
        width: "381",
        height: "214",
        route: "/geography/mondstadt",
    },{
        key: 1,
        name: "Сяо",
        imgPost: "/img/xiao-hero.png",
        width: "381",
        height: "214",
        route: "/heroes/xiao",
    },])
}
