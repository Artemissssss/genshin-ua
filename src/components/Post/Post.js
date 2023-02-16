import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const parse = require('html-react-parser');

function PostList({ component }) {
 const [components,getComponents] = useState("")
 useEffect(()=>{
  getComponents(component)
 },[])
  return (
    <section className="postList">
        <div className="postListWrap"></div>
        {parse(`${components.content}`)}
        <div className="postListWrap2"></div>
    </section>
  )
}
export default PostList