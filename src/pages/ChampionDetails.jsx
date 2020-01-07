import React, { Component } from 'react'

class ChampionDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    region: 'en_US',
    patch: '9.24.2',
    champ: this.props.match.params.champ
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      fetch(
        `https://ddragon.leagueoflegends.com/cdn/${this.state.patch}/data/${this.state.region}/champion/${this.state.champ}.json`
      )
        .then(res => {
          return res.json()
        })
        .then(response => {
          let champ = response.data
          console.log(champ)
          this.setState({
            loading: false,
            data: champ
          })
        })
    } catch (error) {}
  }
  render() {
    return <div>/nada/</div>
  }
}

export default ChampionDetails
