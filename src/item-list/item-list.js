import React, { Component } from 'react'
import Item from '../item/item'

export class ItemList extends Component {
    render() {
        return <ul>
            {this.props.array.map(item =>
                <Item
                    key={item.id}
                    name={item.name}
                    clicker={() => this.props.onElemClick(item.id)}
                />
            )}
        </ul>
    }
}

