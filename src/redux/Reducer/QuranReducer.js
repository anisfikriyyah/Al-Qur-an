import { GET_QURAN_DONE,GET_QURAN_REQUEST,GET_QURAN_ERROR } from '../Type/QuranType'

const initialState = {
  quran: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QURAN_REQUEST:
      return {
        ...state,
        isLoaded: true
      }
    case GET_QURAN_DONE:
      return {
        ...state,
        quran: action.payload.quran,
        isLoaded: false
      }
    case GET_QURAN_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}