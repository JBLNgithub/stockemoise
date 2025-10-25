const TitleInput = ({title, setTitle, style}) => {
  return (
    <>
      <label htmlFor='title'>Titre*</label>
      <br />
      <input className={style} type='text' name='title' required value={title} onChange={(e) => setTitle(e.target.value)} />
      <br className='mb-4' />
    </>
  )
}

export default TitleInput