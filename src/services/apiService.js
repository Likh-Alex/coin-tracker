import { data } from '../statics/user.js'
import { urls } from '../statics/bankApi.js'
import * as _ from 'lodash';

export const apiService = {
    getTransactionRecords: getTransactionRecords
}

function getTransactionRecords(accountId, dateFrom, dateTo) {
    const headers = { 'X-Token': data.userToken }
    let url = urls.statement.replace('{account}', accountId).replace('{from}', dateFrom)
    if (dateTo) {
        url += `/to=${dateTo}`
    }
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Token': data.token
        }
    }
    return fetch(url, options)
        .then(response => response.json())
        .then(response => parseResponse(response))
}

function parseResponse(response) {
    return _.map(response, record => {
        return {
            id: record.id,
            time: record.time * 1000,
            description: record.description,
            amount: Math.abs(record.amount / 100),
        }
    })
}