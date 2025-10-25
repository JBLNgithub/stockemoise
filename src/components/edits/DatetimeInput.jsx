const DatetimeInput = ({datetimeEvent, setDatetimeEvent, style}) => {
  return (
    <>
        <label htmlFor='datetimeEvent'>Date* et Heure*</label>
        <br />
        <input className={style} type='datetime-local' name='datetimeEvent' required min='2025-10-25T12:30' value={datetimeEvent} onChange={(e) => setDatetimeEvent(e.target.value)} />
        <br className='mb-4' />
    </>
  )
}

export default DatetimeInput