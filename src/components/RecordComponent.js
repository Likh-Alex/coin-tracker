import React, {Component} from 'react'
import './styles/Record.css'

export default class RecordComponent extends Component {
    render() {
        const amout = this.props.record.amount;
        const description = this.props.record.description;
        const date = new Date(this.props.record.time).toLocaleString('en-GB', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
        return (
            <div className='recordWrapper'>
                <div className='row'>
                    <span className='label'>Date:</span>
                    <span>{date}</span>
                </div>
                <div className='row'>
                    <span className='label'>Amount:</span>
                    <span>{amout} UAH</span>
                </div>
                <div className='row'>
                    <span className='label'>Description:</span>
                    <span>{description}</span>
                </div>
            </div>
        )
    }
}
