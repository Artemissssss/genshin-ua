export default function handler(req, res) {
    res.status(200).json([{
        key: 1,
        name: "Запрошення до мирського життя",
        img: "/img/xiao-banner.png",
        width: "263",
        height: "148",
    }, {
        key: 2,
        name: "Обережність у впевненості",
        img: "/img/al-haitam-banner.png",
        width: "263",
        height: "148",
    }, {
        key: 3,
        name: "Божественна лита форма",
        img: "/img/weapon-banner.png",
        width: "263",
        height: "148",
    }, {
        key: 4,
        name: "Заклик до подорожей",
        img: "/img/standart-banner.png",
        width: "263",
        height: "148",
    }])
}