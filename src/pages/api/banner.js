export default function handler(req, res) {
    res.status(200).json([{
        "key": 1,
        "name": "Знавчиня таємничого",
        "img": "/img/first-banner.png",
        "width": "263",
        "height": "148",
    }, {
        "key": 2,
        "name": "Мить розквіту",
        "img": "/img/second-banner.png",
        "width": "263",
        "height": "148",
    }, {
        "key": 3,
        "name": "Божественна лита форма",
        "img": "/img/weapon-banner.png",
        "width": "263",
        "height": "148",
    }, {
        "key": 4,
        "name": "Заклик до подорожей",
        "img": "/img/standart-banner.png",
        "width": "263",
        "height": "148",
    }])
}