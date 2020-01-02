import React, { Component } from 'react'

class ChampionCard extends Component {
  remder() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col s6 m3'>
            <div className='card'>
              <div className='card-image'>
                <img src='' alt='' />
                <span className='card-title'>{this.props.champ.name}</span>
              </div>
              <div className='card-content'>
                <p>{this.props.champ.blurb}</p>
              </div>
              <div className='card-action'>
                <a href=''></a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default class ChampionList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.info.map(champs => {
            return (
              <li key={champs.id}>
                <ChampionCard champ={champs} />
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}
