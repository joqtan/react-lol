import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ChampionList from '../components/ChampionList'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    console.log('1')
  }

  componentDidMount() {
    fetch(
      'https://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json'
    )
      .then(res => {
        return res.json()
      })
      .then(response => {
        let champs = response.data
        for (let i in champs) {
          let champ = champs[i]
          this.setState.data = this.state.data.push(champ)
        }
      })
    console.log(this.state.data)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <ChampionList info={this.state.data} />
        </div>
      </React.Fragment>
    )
  }
}
