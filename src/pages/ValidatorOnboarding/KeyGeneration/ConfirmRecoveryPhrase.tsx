import AutocompleteInput from './AutocompleteInput'

const ConfirmRecoveryPhrase = () => {
  return (
    <div>
      {Array.from({ length: 24 }).map((_, index) => (
        <AutocompleteInput key={index} index={index} />
      ))}
    </div>
  )
}

export default ConfirmRecoveryPhrase
