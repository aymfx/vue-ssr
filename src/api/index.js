import {
    resolve
} from "upath";
import axios from 'axios'

const api = 'http://localhost:3001'


const getDate = ({
    url,
    method = 'get',
    data = {}
} = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: api + url,
            data
        }).then((data) => {
            resolve(data)
        }).fail((err) => {
            reject(err)
        })
    })
}

export function getItem() {
    return getDate({
        url: 'result'
    })
}