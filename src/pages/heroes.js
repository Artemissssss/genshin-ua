import PostList from '@/components/PostList/PostList'
import {
  useState,
  useEffect
} from 'react'

export default function Profile(z) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch('/api/heroes')
      const data = await res.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [])
  if(loading) return <div>loading</div>
  return (
    <PostList name="Персонажі Геншина" posts={data}/>
  )
}