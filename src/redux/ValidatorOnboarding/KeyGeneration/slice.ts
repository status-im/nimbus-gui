import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type KeyGenerationState = {
  mnemonic: string[]
  isCopyPastedPhrase: boolean
  validWords: boolean[]
  generatedMnemonic: string[]
  isConfirmPhraseStage: boolean
}

type wordProps = {
  index: number
  word: string
}

const initialState: KeyGenerationState = {
  mnemonic: Array(24).fill(''),
  isCopyPastedPhrase: false,
  validWords: Array(24).fill(true),
  generatedMnemonic: Array(24).fill(''),
  isConfirmPhraseStage: false,
}

const keyGenerationSlice = createSlice({
  name: 'keyGeneration',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<wordProps>) => {
      const newMnemonic = [...state.mnemonic]
      newMnemonic[action.payload.index] = action.payload.word
      state.mnemonic = newMnemonic
    },
    setMnemonic: (state, action: PayloadAction<string[]>) => {
      state.mnemonic = action.payload
    },
    setIsCopyPastedPhrase: (state, action: PayloadAction<boolean>) => {
      state.isCopyPastedPhrase = action.payload
    },
    setValidWords: (state, action: PayloadAction<boolean[]>) => {
      state.validWords = action.payload
    },
    setGeneratedMnemonic: (state, action: PayloadAction<string[]>) => {
      state.generatedMnemonic = action.payload
    },
    setIsConfirmPhraseStage: (state, action: PayloadAction<boolean>) => {
      state.isConfirmPhraseStage = action.payload
    },
  },
})

export const {
  setWord,
  setMnemonic,
  setIsCopyPastedPhrase,
  setValidWords,
  setGeneratedMnemonic,
  setIsConfirmPhraseStage,
} = keyGenerationSlice.actions

export default keyGenerationSlice.reducer
