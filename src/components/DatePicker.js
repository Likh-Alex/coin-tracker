import React, {Component} from 'react'
import './styles/DatePicker.css'

export default class DatePicker extends Component {
    render() {
        return (
            <div className='datePickerContainer'>
                <span>{this.props.label}</span>
                <input name='date' type="date"
                       onChange={(event) => this.props.onChange(event.target.value, this.props.label)}></input>
            </div>
        )
    }
}
