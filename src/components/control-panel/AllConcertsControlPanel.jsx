import RedirectButton from '../RedirectButton'


const AllConcertsControlPanel = () => {
  return (
    <>
      <RedirectButton label='Ajouter un concert' path='/concerts/ajouter' />
      <RedirectButton label='Ajouter un évènement' />
    </>
  )
}

export default AllConcertsControlPanel