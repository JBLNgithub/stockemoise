import React from 'react'
import cover from '../assets/images/harmonie.jpg'
import RedirectButton from '../components/RedirectButton'


const HarmoniePage = () => {
  return (
    <>
      <div>
        <img
          className='size-full object-cover rounded-2xl mb-20'
          src={cover}
          alt="photo de l"
          />
      </div>

      <section className='my-10'>
        <h1 className='text-5xl font-bold mb-10'>Royale Harmonie la Stockemoise d'Arlon</h1>
        <p>L'Harmonie Royale la Stockemoise est un rassemblement de musiciens amateurs de tous âges dans le village de Stockem. Constiuée d'instruments à vent et de percussions, l'harmonie aborde un répertoire vaste allant de la musique classique jusqu'à la musique populaire en passant par le jazz et autres joyeusetés. Des concerts sont organisé régulièrement.<br className='mb-5' /> Les répétitions ont lieu chaque vendredi à Stockem. Pour rejoindre l'harmonie, il faut savoir jouer d'un instrument. N'hésitez pas à prendre contact pour plus d'informations !
        </p>
      </section>

      <div className='md:px-40'>
        <RedirectButton className='px-100' label='Contact' path='/contact' />
      </div>

      <section className='text-center my-20'>
        <div>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/ldi8nuwf-ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      <section className='my-20'>
        <h2 className='text-3xl font-bold mb-6'>Historique</h2>
        <ul>
          <li>1908 (10 mai) :  fondation  à Stockem</li>
          <li>1910 : construction du local et acquisition du drapeau</li>
          <li>1911 : participation de la jeune société au festival de musique de Differdange</li>
          <li>1914 à 1918 : première guerre mondiale. Interruption des activités</li>
          <li>1928 : participation à Arlon en date du 12 août à la Joyeuse entrée des Princes</li>
          <li>1930 : participation aux festivités du centenaire de la Belgique</li>
          <li>1932 : agrandissement du local</li>
          <li>1940 : seconde guerre mondiale. L’avoir de la société est réparti, sous forme de cadeaux, aux 52 militaires mobilisés de Stockem.</li>
          <li>1940 à 1945 : interruption des activités</li>
          <li>1951 : concours de classement à Athus : 2ème division A – 78%</li>
          <li>1952 : concours de classement à Arlon : 1ère division B – 83%</li>
          <li>1953 : constitution en A.S.B.L.</li>
          <li>1954 : concours de classement à Athus : 1ère division ascendante – 90%</li>
          <li>1961 : concours de classement à Stockem : 1ère division – 1ère section – 96%</li>
          <li>1965 : acquisition des uniformes et du deuxième drapeau (offert par le président de l’époque, Mr. Isidore Tock)</li>
          <li>1966 : concours de classement à Stockem : division supérieure – 2ème section – 88%</li>
          <li>1966 : participation aux festivités organisées à Spich (RFA) par le Cdt du 1er Régiment des Chasseurs Ardennais</li>
          <li>1970 : concours de classement à Stockem : division supérieure – 1ère section – 90%</li>
          <li>1971 : S.M. le Roi accorde à la société son titre de « Royale »</li>
          <li>1976 : participation à Arlon en date du 12 juin aux festivités organisées par la Province de Luxembourg à l’occasion de la visite royale</li>
          <li>1982 : concours de classement à Stockem :division d’excellence – 2ème section – 88%</li>
          <li>1985 : concours de classement à Virton : division d’excellence – 2ème section – 87%</li>
          <li>1989 : acquisition du troisième drapeau sur lequel figurent les armoiries de Philippe-Charles de Pfortzheim concédées à la commune de Heinsch en 1957. Son parrain est le colonel BEM Robert Laloux commandant le groupe CVRT à Stockem. Sa marraine est Mme Renée Schneidesch épouse du membre le plus ancien de la société. 1999 : acquisition des nouvelles tenues</li>
          <li>2001 : la société reçoit le prix Camille Schmit attribué annuellement à une société méritante.</li>
          <li>2007 : rénovation et agrandissement du local</li>
          <li>2008 : Fêtes du centenaire de l’harmonie</li>
          <li>2009 : Yolande Mathey devient la première présidente depuis 100 ans.</li>
          <li>2017 : Création d’un orchestre des jeunes musiciens.</li>
        </ul>
      </section>
    </>
  )
}

export default HarmoniePage