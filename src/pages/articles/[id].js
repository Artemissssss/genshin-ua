import Post from "@/components/Post/Post"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function id() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [])
  if(loading) return <div>loading</div>
  return (
    <>
    <p>{router.asPath}</p>
    {/* <p>{data[0]}</p> */}
    <Post component={data} />
    </>
  )
}
export default id