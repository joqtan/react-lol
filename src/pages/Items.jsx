import React, { Component } from 'react'

import ItemsList from '../components/ItemList'

export default class Items extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      region: 'en_US',
      patch: '9.24.2'
    }
  }

  componentDidMount() {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/${this.state.patch}/data/${this.state.region}/item.json`
    )
      .then(res => {
        return res.json()
      })
      .then(response => {
        let items = response.data
        let dataItems = []
        for (let i in items) {
          dataItems.push(items[i])
        }
        this.setState({
          data: dataItems
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <ItemsList info={this.state.data} />
      </React.Fragment>
    )
  }
}
