import React, {Component} from 'react'
import RecordComponent from './RecordComponent'
import './styles/ItemList.css'

export default class ItemListComponent extends Component {
    render() {
        const recordsList = this.props.recordsList;
        return (
            <div className='itemListContainer'>
                <div>{recordsList.length == 0 ? 'No Data' : ''}</div>
                {recordsList.map(function (record, index) {
                    return <RecordComponent key={record.id} record={record}/>
                })}
            </div>
        )
    }
}
