import React, {Component} from 'react'
import Select from 'react-select';
import './styles/AccountSelect.css'

const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {

        return {
            ...styles,
            backgroundColor: isDisabled ? 'orange' : 'white',
            color: 'black',
            cursor: isDisabled ? 'not-allowed' : 'default'
        }
    }
}

export default class AccountSelectComponent extends Component {
    render() {
        return (
            <div className='accountSelectContainer'>
                <Select placeholder='Select account' options={this.props.options} onChange={this.props.onChange}
                        styles={colourStyles}/>
            </div>
        )
    }
}
