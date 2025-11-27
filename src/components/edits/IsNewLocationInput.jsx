const IsNewLocationInput = ({isUpdate, isNewLocationState}) => {
  const [isNewLocation, setIsNewLocation] = isNewLocationState
  return (
    <>
      <input type="radio" id="knownLocation" name="locationType" value={false} onChange={e => setIsNewLocation(false)} defaultChecked={true} disabled={isUpdate} className="mr-2" />
      <label htmlFor="html">Lieu connu</label><br />
      <input type="radio" id="newLocation" name="locationType" value={true} onChange={e => setIsNewLocation(true)} disabled={isUpdate} className="mr-2" />
      <label htmlFor="css">Nouveau lieu</label><br className='mb-4' />
    </>
  )
}

export default IsNewLocationInput