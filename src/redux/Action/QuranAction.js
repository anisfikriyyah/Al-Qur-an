import axios from 'axios'
import {
    GET_QURAN_DONE,
    GET_QURAN_ERROR,
    GET_QURAN_REQUEST
} from '../Type/QuranType'
import { URL_Quran } from '../secret'


export const getQuran = () => {
    return dispatch => {
        dispatch({
            type: GET_QURAN_REQUEST
        })
        axios({
            method: 'GET',
            url: URL_Quran
        })
            .then((response) => {
                dispatch({
                    type: GET_QURAN_DONE,
                    payload: {
                        quran: response.data.data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_QURAN_ERROR
                })
            })
    }
}