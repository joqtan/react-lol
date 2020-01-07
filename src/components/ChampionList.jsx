import React, { Component, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

class ChampionCard extends Component {
  render() {
    let source = 'https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/'
    return (
      <React.Fragment>
        <div className='p-1'>
          <div className='flex items-center p-2 h-20 w-48 shadow-lg bg-gray-700 rounded-lg '>
            <div className='w-3/12'>
              <div className='w-12'>
                <img
                  className='rounded-full'
                  src={source + this.props.champ.id + `.png`}
                  alt=''
                />
              </div>
            </div>
            <div className='ml-4 w-9/12'>
              <h2 className='text-sm text-white font-semibold capitalize'>
                {this.props.champ.name}
              </h2>
              <p className='text-xs text-white font-light capitalize'>
                {this.props.champ.title}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function useSearchChamp(champs) {
  const [query, setQuery] = useState('')

  const [filteredChamps, setFilteredChamps] = useState(champs)

  useMemo(() => {
    const result = champs.filter(champ => {
      return `${champ.name}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredChamps(result)
  }, [champs, query])
  return { query, setQuery, filteredChamps }
}

export default function ChampionList(props) {
  const champs = props.info
  const { query, setQuery, filteredChamps } = useSearchChamp(champs)

  return (
    <React.Fragment>
      <div className='container flex flex-wrap justify-center'>
        <div className='container flex flex-wrap justify-center items-center py-4'>
          <label className='text-sm text-white mr-4'>Search by name</label>
          <div className='bg-gray-700 rounded'>
            <input
              className='bg-gray-700 text-white text-md outline-none rounded appearance-none p-4 h-6'
              type='text'
              value={query}
              onChange={e => {
                setQuery(e.target.value)
              }}
            />
          </div>
        </div>
        {filteredChamps.map(champ => {
          return (
            <React.Fragment key={champ.id}>
              <Link to={`/champs/${champ.id}`}>
                <ChampionCard champ={champ} />
              </Link>
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}
