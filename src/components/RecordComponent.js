import React, {Component} from 'react'
import './styles/Record.scss'

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
                <span className={'rowCell date'}>{date}</span>
                <span className={'rowCell description'}>{description}</span>
                <span className={'rowCell amount'}>{amout} UAH</span>
            </div>
        )
    }
}
