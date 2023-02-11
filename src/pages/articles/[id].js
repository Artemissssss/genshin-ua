import Post from "@/components/Post/Post"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Id({id}) {
    const [data, setData] = useState([])
    const [route, useRoute] = useState("/articles/[id]")
    const router = useRouter()
    
  useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      console.log(router.asPath)
      const res = await fetch(`/api${router.asPath}`)
      const dat = await res.json()
      setData(dat)
    }
    route !== '/articles/[id]' ? fetchData() : useRoute(router.asPath);
  }, [])
  useEffect(()=>{
    console.log(router)
    const fetchData = async () => {
      const res = await fetch(`/api${router.asPath}`)
      const data = await res.json()
      setData(data)
    }
    fetchData()
  },[route])
  if(data.length === 0) return <div style={{color:'white'}}>{router.asPath} ok {route}</div>
  return (
    <>
    <p style={{color:'white'}} >{router.asPath}</p>
    {/* <p>{data[0]}</p> */}
    <Post component={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {id:context.params.id}, // will be passed to the page component as props
  }
}
export default Id