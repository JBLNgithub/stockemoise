import IsNewLocalityInput from './IsNewLocalityInput'
import NewLocalityInput from './NewLocalityInput'
import KnownLocalityInput from './KnownLocalityInput'


const LocalityInput = ({knownLocalityState, isNewLocalityState, newLocalityStates, style}) => {
  const [isNewLocality, setIsNewLocality] = isNewLocalityState

    return (
        <>
          <IsNewLocalityInput isNewLocalityState={isNewLocalityState} />
          {isNewLocality
            ? <NewLocalityInput newLocalityStates={newLocalityStates} style={style} />
            : <KnownLocalityInput knownLocalityState={knownLocalityState} />
          }
        </>
    )
}

export default LocalityInput