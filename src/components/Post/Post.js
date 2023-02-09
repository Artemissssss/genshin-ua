import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const parse = require('html-react-parser');

function PostList({ post }) {
 const [content,getContent] = useState("")
 useEffect(()=>{
    console.log(post)
    getContent(post)
 },[])
  return (
    <section className="postList">
        <div className="postListWrap"></div>
        {parse(`${content}`)}
        <div className="postListWrap2"></div>
    </section>
  )
}
export default PostList