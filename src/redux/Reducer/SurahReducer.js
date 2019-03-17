import { GET_SURAH_DONE,GET_SURAH_REQUEST,GET_SURAH_ERROR } from '../Type/SurahType'

const initialState = {
  surah: [],
  isLoaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SURAH_REQUEST:
      return {
        ...state,
        isLoaded: true
      }
    case GET_SURAH_DONE:
      return {
        ...state,
        surah: action.payload.surah,
        isLoaded: false
      }
    case GET_SURAH_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}