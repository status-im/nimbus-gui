import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type KeyGenerationState = {
  words: string[]
  isCopyPastedPhrase: boolean
  isRightPhrase: boolean
  validWords: boolean[]
  generatedMnemonic: string[]
}

type wordProps = {
  index: number
  word: string
}

const initialState: KeyGenerationState = {
  words: Array(24).fill(''),
  isCopyPastedPhrase: false,
  isRightPhrase: false,
  validWords: Array(24).fill(true),
  generatedMnemonic: Array(24).fill(''),
}

const keyGenerationSlice = createSlice({
  name: 'keyGeneration',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<wordProps>) => {
      const newWords = [...state.words]
      newWords[action.payload.index] = action.payload.word
      return { ...state, words: newWords }
    },
    setMnemonic: (state, action: PayloadAction<string[]>) => {
      state.words = action.payload
    },
    setIsCopyPastedPhrase: (state, action: PayloadAction<boolean>) => {
      state.isCopyPastedPhrase = action.payload
    },
    setIsRightPhrase: (state, action: PayloadAction<boolean>) => {
      state.isRightPhrase = action.payload
    },
    setValidWords: (state, action: PayloadAction<boolean[]>) => {
      state.validWords = action.payload
    },
    setGeneratedMnemonic: (state, action: PayloadAction<string[]>) => {
      state.generatedMnemonic = action.payload
    },
  },
})

export const {
  setWord,
  setMnemonic,
  setIsCopyPastedPhrase,
  setIsRightPhrase,
  setValidWords,
  setGeneratedMnemonic,
} = keyGenerationSlice.actions

export default keyGenerationSlice.reducer
