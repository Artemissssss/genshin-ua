import { StatusContext } from "@/context/context"
import { useRouter } from "next/router"
import { useContext } from "react"

function AdminLink() {
    const {setStatus} = useContext(StatusContext)
    const router = useRouter()
  return (
    <section className="AdminLinkSect">
        <div className="AdminLinkSectWrapper">
            <h2 className="AdminLinkText">Відділи</h2>
            <div className="AdminLinkLine"></div>
            <ul className="AdminLinkList">
                <li className="AdminLinkListItem"><h3 onClick={()=>{router.push("/admin/articles")}} className="AdminLinkListItemText">Статті</h3></li>
                <li className="AdminLinkListItem"><h3 onClick={()=>{router.push("/admin/heroes")}} className="AdminLinkListItemText">Персонажі</h3></li>
                <li className="AdminLinkListItem"><h3 onClick={()=>{router.push("/admin/bilds")}} className="AdminLinkListItemText">Білди</h3></li>
                <li className="AdminLinkListItem"><h3 onClick={()=>{router.push("/admin/geography")}} className="AdminLinkListItemText">Географія</h3></li>
            </ul>
            <button className="AdminLinkButton" onClick={() =>{setStatus(false)}}>Вийти</button>
        </div>
    </section>
  )
}
export default AdminLink