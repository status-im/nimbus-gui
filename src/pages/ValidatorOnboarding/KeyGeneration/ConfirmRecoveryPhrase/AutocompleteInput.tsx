import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wordlist from 'web-bip39/wordlists/english'

import { RootState } from '../../../../redux/store'
import {
  setIsCopyPastedPhrase,
  setMnemonic,
  setValidWords,
  setWord,
} from '../../../../redux/ValidatorOnboarding/KeyGeneration/slice'
import styles from './AutocompleteInput.module.css'

type AutocompleteInputProps = {
  index: number
}

const AutocompleteInput = ({ index }: AutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const word = useSelector((state: RootState) => state.keyGeneration.words[index])
  const isValidWord = useSelector((state: RootState) => state.keyGeneration.validWords[index])
  const validWords = useSelector((state: RootState) => state.keyGeneration.validWords)
  const dispatch = useDispatch()

  useEffect(() => {
    setSuggestions(getNewSuggestions(word))
  }, [word])

  const getNewSuggestions = (word: string) => {
    return wordlist.filter(w => w.startsWith(word.toLowerCase()))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isFocused) {
      handleInputFocus()
    }

    const value = e.target.value
    const mnemonic = value.trim().split(' ').slice(0, 24)
    const mnemonicLength = mnemonic.length
    let newValidWords = [...validWords]

    if (mnemonicLength === 1) {
      dispatch(setWord({ index, word: value }))

      newValidWords[index] = wordlist.includes(value) || getNewSuggestions(value).length > 0
    } else if (mnemonicLength === 24) {
      dispatch(setMnemonic(mnemonic))
      dispatch(setIsCopyPastedPhrase(true))

      mnemonic.forEach((m, i) => {
        newValidWords[i] = wordlist.includes(m)
      })
    } else {
      for (let i = index; i < mnemonicLength + index; i++) {
        const mnemonicWord = mnemonic.shift() || ''
        dispatch(setWord({ index: i, word: mnemonicWord }))
        newValidWords[i] = wordlist.includes(mnemonicWord)
      }

      dispatch(setIsCopyPastedPhrase(true))
    }

    dispatch(setValidWords(newValidWords))
  }

  const handleSuggestionClick = (e: React.MouseEvent, suggestion: string) => {
    e.preventDefault()

    setIsFocused(false)
    dispatch(setWord({ index, word: suggestion }))

    let newValidWords = [...validWords]
    newValidWords[index] = wordlist.includes(suggestion)
    dispatch(setValidWords(newValidWords))
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)

    let newValidWords = [...validWords]
    newValidWords[index] = wordlist.includes(word)
    dispatch(setValidWords(newValidWords))
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
          style={inputStyle(index, isFocused, isValidWord)}
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

const inputStyle = (index: number, isFocused: boolean, isValidWord: boolean) => {
  const style = {
    outline: 'none',
    padding: `12px 16px 12px ${index + 1 < 10 ? '35px' : '45px'}`,
    border: isValidWord ? '2px solid #f7f8f9' : '2px solid #E53E3E',
  }

  if (isFocused) {
    return {
      ...style,
      border: isValidWord ? '2px solid #4360DF' : '2px solid #E53E3E',
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
