import axios from 'axios'
import {
GET_SURAH_DONE,
GET_SURAH_ERROR,
GET_SURAH_REQUEST
} from '../Type/SurahType'
import { URL_Quran } from '../secret'


export const getSurah = (surah) => {
    return dispatch => {
        dispatch({
            type: GET_SURAH_REQUEST
        })
        axios({
            method: 'GET',
            url: URL_Quran + '/'+ surah + '/ar.alafasy'
        })
            .then((response) => {
                dispatch({
                    type: GET_SURAH_DONE,
                    payload: {
                        surah: response.data.data.ayahs
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_SURAH_ERROR
                })
            })
    }
}