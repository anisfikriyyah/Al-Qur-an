import {createStore,combineReducers, applyMiddleware} from 'redux'
import ReducerQuran from './Reducer/QuranReducer'
import ReducerSurah from './Reducer/SurahReducer'
import thunk from 'redux-thunk';

const combine = combineReducers({
    quran:ReducerQuran,
    surah:ReducerSurah
})

const Store = createStore(combine,applyMiddleware(thunk))

export default Store