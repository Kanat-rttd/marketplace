import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'mob',
                    name: 'Мобо-игры'
                },
                {
                    key: 'shooter',
                    name: 'Шутеры'
                },
                {
                    key: 'football',
                    name: 'Футбол'
                },
                {
                    key: 'exploring',
                    name: 'Выживание'
                },
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
