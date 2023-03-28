import { useLocation, Link } from "react-router-dom"
import "./breadcrumb.css"

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
   <div className="w-full">
     <div className="breadcrumbs ml-[2.5%] mt-4 ">
      {crumbs}
    </div>
   </div>
  )
}