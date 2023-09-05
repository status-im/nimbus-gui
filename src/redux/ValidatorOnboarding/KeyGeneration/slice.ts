import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type KeyGenerationState = {
  words: string[]
}

type wordProps = {
  index: number
  word: string
}

const initialState: KeyGenerationState = {
  words: Array(24).fill(''),
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
  },
})

export const { setWord, setMnemonic } = keyGenerationSlice.actions

export default keyGenerationSlice.reducer
