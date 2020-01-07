import React, { Component } from 'react'
import ChampionList from '../components/ChampionList'

export default class Champions extends Component {
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
      `https://ddragon.leagueoflegends.com/cdn/${this.state.patch}/data/${this.state.region}/champion.json`
    )
      .then(res => {
        return res.json()
      })
      .then(response => {
        let champs = response.data
        let dataChamps = []
        for (let i in champs) {
          dataChamps.push(champs[i])
        }
        this.setState({
          data: dataChamps
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className='container flex flex-wrap justify-center'>
          <ChampionList info={this.state.data} />
        </div>
      </React.Fragment>
    )
  }
}
