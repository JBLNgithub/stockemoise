const IsNewLocalityInput = ({isNewLocalityState}) => {
  const [isNewLocality, setIsNewLocality] = isNewLocalityState

  return (
    <>
      <input type="radio" id="knownLocality" name="localityType" value={false} onChange={e => setIsNewLocality(false)} defaultChecked={true} className="mr-2" />
      <label htmlFor="html">Localité connu</label><br />
      <input type="radio" id="newLocality" name="localityType" value={true} onChange={e => setIsNewLocality(true)} className="mr-2" />
      <label htmlFor="css">Nouvelle localité</label><br className='mb-4' />
    </>
  )
}

export default IsNewLocalityInput