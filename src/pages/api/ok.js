export default async function handler(req, res) {
    res.status(200).json([{fdf:req.method,ok:[req.method,req.body]}])
}