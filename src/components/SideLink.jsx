import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import topThePage from '../utils/topThePage'
import datetimeToString from '../utils/datetimeToString'


const SideLink = ({baselink, id, title, location, dateEvent}) => {
    return (
        <div className='mb-1'>
            <Link
                to={`${baselink}${id}`}
                onClick={topThePage}
                className='hover:bg-blue-400 text-neutral-200 hover:text-neutral-800 block rounded-xl px-2 py-1'
            >
                {dateEvent ? <>{datetimeToString(dateEvent, 'short')}<br/></> : null}
                {title}
                {location ? <><br/><FaMapMarker className='inline mr-1 mb-1' />{location}</> : null}
            </Link>
        </div>
    )
}

export default SideLink