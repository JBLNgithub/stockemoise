const contentInput = ({content, setContent, style}) => {
  return (
    <>
        <label htmlFor='description'>Description*</label>
        <br />
        <textarea className={style} name='description' required value={content} onChange={(e) => setContent(e.target.value)} />
        <br className='mb-4' />
    </>
  )
}

export default contentInput