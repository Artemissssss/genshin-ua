export default function handler (req,res){
    res.status(200).json([{
        key: 1,
        name: "Мондштадт",
        imgPost: "/img/mondstadt.png",
        width: "247",
        height: "139",
        route: "/geography/mondstadt",
        content: "<h1 classname='articles-title'>Мондштадт<h1/>"
    },])
}
