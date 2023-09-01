import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wordlist from 'web-bip39/wordlists/english'

import { RootState } from '../../../redux/store'
import { setMnemonic, setWord } from '../../../redux/ValidatorOnboarding/KeyGeneration/slice'

type AutocompleteInputProps = {
  index: number
}

const AutocompleteInput = ({ index }: AutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const word = useSelector((state: RootState) => state.keyGeneration.words[index])
  const dispatch = useDispatch()

  useEffect(() => {
    setSuggestions(wordlist.filter(w => w.startsWith(word)))
  }, [word])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const mnemonic = value.trim().split(' ')
    const mnemonicLength = mnemonic.length

    if (mnemonicLength === 1) {
      dispatch(setWord({ index, word: value }))
    } else if (mnemonicLength === 24) {
      dispatch(setMnemonic(mnemonic))
    } else {
      for (let i = index; i < mnemonicLength + index; i++) {
        dispatch(setWord({ index: i, word: mnemonic.shift() || '' }))
      }
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    dispatch(setWord({ index, word: suggestion }))
  }

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <div className="suggestion-list">
          {suggestions.map(s => (
            <div key={s} className="suggestion-item" onClick={() => handleSuggestionClick(s)}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AutocompleteInput
