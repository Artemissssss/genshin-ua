import { useEffect, useState } from "react"

function Comments({router}) {
    const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/comments${router}`)
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="CommentsSect">
    <h3 className="CommentsSectQuant">{data.length} {data.length === 1? "коментар":"коментарів"}</h3>
    <div className="CommentsSectLine"></div>
    {data.length !== 0 ? (
    <div className="CommentsSectList">
        {
            data.map((arr,i)=>{return (<div className="postCommentsList" key={i}><h4 className="postCommentsName">{arr.name}</h4> <p className="postCommentsText">{arr.text}</p></div>)})
        }
    </div>
    ): null}
    </div>
  )
}
export default Comments