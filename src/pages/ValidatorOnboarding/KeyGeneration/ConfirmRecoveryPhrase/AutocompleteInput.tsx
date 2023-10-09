import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import wordlist from 'web-bip39/wordlists/english'

import { RootState } from '../../../../redux/store'
import {
  setIsCopyPastedPhrase,
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
  const word = useSelector((state: RootState) => state.keyGeneration.mnemonic[index])
  const isValidWord = useSelector((state: RootState) => state.keyGeneration.validWords[index])
  const { validWords, generatedMnemonic } = useSelector((state: RootState) => state.keyGeneration)
  const dispatch = useDispatch()

  useEffect(() => {
    setSuggestions(getNewSuggestions(word))
  }, [word])

  const getNewSuggestions = (word: string) => {
    return wordlist.filter(w => w.startsWith(word.toLowerCase()))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newMnemonic = value.trim().split(' ')
    const newMnemonicLength = newMnemonic.length
    let newValidWords = [...validWords]

    if (!isFocused) {
      handleInputFocus()
    }

    switch (newMnemonicLength) {
      case 1:
        updateWord(index, value, newValidWords)
        break
      case 24:
        dispatch(setIsCopyPastedPhrase(true))
        updateMultipleWords(newMnemonic, newValidWords)
        break
      default:
        const endIndex = Math.min(newMnemonicLength + index, 24)
        const partialMnemonic = newMnemonic.slice(0, endIndex - index)
        dispatch(setIsCopyPastedPhrase(true))
        updateMultipleWords(partialMnemonic, newValidWords, index)
        break
    }

    dispatch(setValidWords(newValidWords))
  }

  const updateWord = (idx: number, word: string, validWords: boolean[]) => {
    dispatch(setWord({ index: idx, word }))
    validWords[idx] = generatedMnemonic[idx] === word || generatedMnemonic[idx].startsWith(word)
  }

  const updateMultipleWords = (words: string[], validWords: boolean[], startIndex: number = 0) => {
    words.forEach((word, idx) => {
      const actualIdx = startIndex + idx
      dispatch(setWord({ index: actualIdx, word }))
      validWords[actualIdx] = generatedMnemonic[actualIdx] === word
    })
  }

  const handleSuggestionClick = (e: React.MouseEvent, suggestion: string) => {
    e.preventDefault()

    setIsFocused(false)
    dispatch(setWord({ index, word: suggestion }))

    let newValidWords = [...validWords]
    newValidWords[index] = generatedMnemonic[index] === suggestion
    dispatch(setValidWords(newValidWords))
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)

    let newValidWords = [...validWords]
    newValidWords[index] = generatedMnemonic[index] === word
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
