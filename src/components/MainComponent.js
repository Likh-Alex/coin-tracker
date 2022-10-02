import React, {Component} from 'react'
import DatePicker from './DatePicker'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ItemListComponent from './ItemListComponent'
import AccountSelectComponent from './AccountSelectComponent';
import ButtonComponent from './ButtonComponent';

import {apiService} from '../services/apiService';
import {data} from '../statics/user.js'

import * as _ from 'lodash';

import './styles/MainComponent.css'
import {components} from "react-select";

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: '',
            dateTo: '',
            accountList: this.getAccountList(),
            account: {},
            recordsList: []
        };
    }

    getAccountList() {
        return _.map(_.filter(data.info.accounts, account => account.maskedPan.length), account => {
            return {value: account.id, label: account.maskedPan[0]}
        })
    }

    onAccountSelect(account) {
        this.setState({
            account: account
        });
    }

    onDateChange(date, type) {
        this.setState({
            [`date${type}`]: new Date(date).getTime()
        })
    }

    loadData() {
        const accountId = this.state.account.value
        const dateFrom = this.state.dateFrom
        const dateTo = this.state.dateTo
        apiService.getTransactionRecords(accountId, dateFrom, dateTo).then(response => {
            this.setState({recordsList: response})
        })
    }

    render() {
        const accountList = this.state.accountList;
        const account = this.state.account;
        const recordsList = this.state.recordsList;
        const dateFrom = this.state.dateFrom;

        return (
            <div className='mainContainer'>
                <HeaderComponent></HeaderComponent>
                <AccountSelectComponent options={accountList}
                                        onChange={this.onAccountSelect.bind(this)}></AccountSelectComponent>

                <div className='datePickers'>
                    <DatePicker label='From' onChange={this.onDateChange.bind(this)}></DatePicker>
                    <DatePicker label='To' onChange={this.onDateChange.bind(this)}></DatePicker>
                </div>

                <ButtonComponent disabled={account.value && dateFrom ? false : true} onClick={this.loadData.bind(this)}
                                 text='Load data'></ButtonComponent>

                <ItemListComponent recordsList={recordsList}></ItemListComponent>

                <FooterComponent></FooterComponent>
            </div>
        )
    }
}
