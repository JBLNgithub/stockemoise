import IsNewLocalityInput from './IsNewLocalityInput'
import NewLocalityInput from './NewLocalityInput'
import KnownLocalityInput from './KnownLocalityInput'


const LocalityInput = ({isNewLocalityState}) => {
  const [isNewLocality, setIsNewLocality] = isNewLocalityState

    return (
        <>
          <IsNewLocalityInput isNewLocalityState={isNewLocalityState} />
          {isNewLocality
            ? <NewLocalityInput />
            : <KnownLocalityInput />
          }
        </>
    )
}

export default LocalityInput