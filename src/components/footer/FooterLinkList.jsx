import { Link, useLocation } from "react-router-dom"
import topThePage from "../../utils/topThePage"


const FooterLinkList = ({title, links}) => {
	const location = useLocation()

    return (
        <>
            <div className="text-neutral-200 text-2xl mb-4">{title}</div>

            <ul>
                {links.map((link, id) => <li key={id}><Link to={link[1]} state={{from: location}} onClick={topThePage} className="hover:text-sky-600 py-2 px-4 mt-4">{link[0]}</Link></li>)}
            </ul>
        </>
    )
}

export default FooterLinkList