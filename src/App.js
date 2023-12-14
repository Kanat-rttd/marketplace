import React from 'react';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Items from './components/items/items'
import Categories from './components/categories/categories';

class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        orders: [],
        currentItems: [],
        items: [
          {
            id: 1,
            title: 'CS:GO',
            img: '1bc7636d748467aab3c13ff3f43af0bf.jpg',
            desc: 'CS:GO очень знаменитый шутер в который играют по всему миру',
            category: 'shooter',
            price: '9.99',
          },
          {
            id: 2,
            title: 'Dota',
            img: 'f70a4d0192ec9af45f1316fa7e6809d2.jpg',
            desc: 'Dota это мобоигра в которую играют в основном школьники',
            category: 'mob',
            price: '0.99',
          },
          {
            id: 3,
            title: 'Fifa',
            img: '9fa013eaf8ba100d89e82c913db6077b.jpg',
            desc: 'Fifa самый знаменитый футбольный эмулятор в мире',
            category: 'football',
            price: '19.99',
          },
          {
            id: 4,
            title: 'Rocket League',
            img: '01e1f73fbd97647ea683a9c861a98b97.jpg',
            desc: 'Rocket League это игра про футбол на машинах',
            category: 'football',
            price: '4.99',
          },
          {
            id: 5,
            title: 'Minecraft',
            img: 'b9d239df0584991668f469cd404cf407.jpg',
            desc: 'Minecraft это одна из самых знаменитых игр про выживание в мире ',
            category: 'exploring',
            price: '9.99',
          },
          {
            id: 6,
            title: 'PUBG',
            img: '5e68e4a0cbe4a056aca1c33c5c6dcbbc.jpg',
            desc: 'PUBG это королевская битва в которой побеждает тот, кто остается последним',
            category: 'shooter',
            price: '4.99',
          },
        ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  render() {
  return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer/>
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
