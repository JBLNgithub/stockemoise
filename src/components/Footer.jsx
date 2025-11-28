import FooterLinkList from "./footer/FooterLinkList"
import ContactButton from "./ContactButton"


const Footer = () => {  
  // linkList = [[<name>, <path>], ...]
  const socials = [
    ['facebook', 'https://www.facebook.com/groups/stockemoise'],
    ['youtube', 'https://www.youtube.com/@harmonieroyalelastockemois7550']
  ]
  
  const members = [
    ['connexion', '/connexion']
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-800 text-neutral-200 text-center grid grid-cols-3 pt-10">

      <div className="col-span-3 md:col-span-1 my-3">
        <FooterLinkList title="Suivez-nous !" links={socials} />
      </div>

      <div className="col-span-3 md:col-span-1 my-3">
        <FooterLinkList title='Membres' links={members} />
      </div>

      <div className="col-span-3 md:col-span-1 my-3">
        <ContactButton />
      </div>

      <div className="col-span-3 py-5"><p>Copyrights © {year} la Stockemoise. Tous droits réservés.</p></div>
    </footer>
  )
}

export default Footer