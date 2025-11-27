import { useEffect } from "react"
import LocationInput from "./LocationInput"
import DatetimeInput from "./DatetimeInput"


const IsEventInput = ({style, isUpdate, isEventState, datetimeEvent, setDatetimeEvent, knownLocationState, isNewLocationState, newLocationStates, knownLocalityState, isNewLocalityState, newLocalityStates}) => {
    const [isEvent, setIsEvent] = isEventState

    useEffect(() => {
        isNewLocationState[1](false)
    }, [isEvent])

    return (
        <>
            <input type="checkbox" name="isEvent" id="isEvent" className="mr-2" value={isEvent} disabled={isUpdate} onChange={e => setIsEvent(e.target.checked)} />
            <label htmlFor="isEvent">Évènement</label>
            <br className='mb-4' />

            {isEvent && <DatetimeInput datetimeEvent={datetimeEvent} setDatetimeEvent={setDatetimeEvent} style={style} />}
            {isEvent && <LocationInput isUpdate={isUpdate} knownLocationState={knownLocationState} isNewLocationState={isNewLocationState} newLocationStates={newLocationStates} knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={style} />
            }
        </>
    )
}

export default IsEventInput