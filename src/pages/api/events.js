export default function handler(req, res) {
    res.status(200).json([{
        name: "Нагороди за щоденний вхід",
        url: "https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481",
        img: "/img/everyday-event.png",
        width: "233",
        height: "104",
    }, {
        name: "Барвистість кольорів",
        url: "https://act.hoyoverse.com/ys/event/e20230129-lantern-vqhoj8/index.html",
        img: "/img/first-event.png",
        width: "233",
        height: "131",
    },])
}