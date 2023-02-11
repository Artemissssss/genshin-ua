export default async function handler(req, res) {
    try {
        const filter = {_id: new ObjectId(req.query.id)};
    
        const coll = [{
            key: 1,
            name: "Цікаве про Сяо",
            imgPost: "/img/xiao-article.png",
            width: "247",
            height: "139",
            route: "/articles/xiao",
            content: "<h1 classname='articles-title'>Сяо<h1/>",
            comments:[],
        }, ];
        const cursor = coll.find(filter);
        const result = await cursor.toArray();
        
        await client.close();
        if(result && result[0]){
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Not found"})
        }
    } catch {
        res.status(404).json({message: "Not found"})
    }
}