import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wordlist from 'web-bip39/wordlists/english'

import { RootState } from '../../../../redux/store'
import {
  setIsCopyPastedPhrase,
  setMnemonic,
  setWord,
} from '../../../../redux/ValidatorOnboarding/KeyGeneration/slice'
import styles from './AutocompleteInput.module.css'

type AutocompleteInputProps = {
  index: number
  isValid: boolean
  changeIsValid: (isValid: boolean, index: number) => void
}

const AutocompleteInput = ({ index, isValid, changeIsValid }: AutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const word = useSelector((state: RootState) => state.keyGeneration.words[index])
  const dispatch = useDispatch()

  useEffect(() => {
    const newSuggestions = getNewSuggestions(word)
    setSuggestions(newSuggestions)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isFocused) {
      handleInputFocus()
    }

    const value = e.target.value
    const mnemonic = value.trim().split(' ')
    const mnemonicLength = mnemonic.length

    if (mnemonicLength === 1) {
      dispatch(setWord({ index, word: value }))

      const newSuggestions = getNewSuggestions(value)
      setSuggestions(newSuggestions)

      changeIsValid(isWordValidTyping(value, newSuggestions), index)
    } else if (mnemonicLength === 24) {
      dispatch(setMnemonic(mnemonic))
      dispatch(setIsCopyPastedPhrase(true))
    } else {
      for (let i = index; i < mnemonicLength + index; i++) {
        dispatch(setWord({ index: i, word: mnemonic.shift() || '' }))
      }
      dispatch(setIsCopyPastedPhrase(true))
    }
  }

  const handleSuggestionClick = (e: React.MouseEvent, suggestion: string) => {
    e.preventDefault()

    setIsFocused(false)
    dispatch(setWord({ index, word: suggestion }))

    changeIsValid(isWordValidBlur(suggestion), index)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    changeIsValid(isWordValidBlur(word), index)
  }

  const getNewSuggestions = (value: string) => {
    return wordlist.filter(w => w.startsWith(value.toLowerCase()))
  }

  const isWordValidTyping = (value: string, newSuggestions: string[]) => {
    return wordlist.includes(value) || newSuggestions.length > 0 || value === ''
  }

  const isWordValidBlur = (value: string) => {
    return wordlist.includes(value)
  }

  return (
    <div style={autocompleteContainerStyle(isFocused)} className={styles['autocomplete-container']}>
      <div className={styles['input-wrapper']}>
        <span className={styles['input-number']}>{index + 1}.</span>
        <input
          className={styles['autocomplete-input']}
          value={word}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={inputStyle(index, isFocused, isValid)}
        />
      </div>
      <div className={isFocused ? styles['suggestion-list'] : ''}>
        {isFocused &&
          suggestions.map(suggestion => (
            <div
              key={suggestion}
              className={styles['suggestion-item']}
              onMouseDown={e => handleSuggestionClick(e, suggestion)}
            >
              {suggestion}
            </div>
          ))}
      </div>
    </div>
  )
}

export default AutocompleteInput

const inputStyle = (index: number, isFocused: boolean, isValid: boolean) => {
  const style = {
    outline: 'none',
    padding: `12px 16px 12px ${index + 1 < 10 ? '35px' : '45px'}`,
    border: isValid ? 'none' : '2px solid #E53E3E',
  }

  if (isFocused) {
    return {
      ...style,
      border: isValid ? '2px solid #4360DF' : '2px solid #E53E3E',
      backgroundColor: '#f1f2f4',
    }
  } else {
    return style
  }
}

const autocompleteContainerStyle = (isFocused: boolean) => {
  if (isFocused) {
    return {
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
    }
  } else {
    return {
      borderRadius: '24px',
    }
  }
}
