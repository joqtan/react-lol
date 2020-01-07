import React, { Component, useState, useMemo } from 'react'
class ItemCard extends Component {
  render() {
    let source = 'https://ddragon.leagueoflegends.com/cdn/9.24.2/img/item/'
    return (
      <React.Fragment>
        <div className='p-2'>
          <div className='flex items-center p-2 w-40 shadow-2xl bg-gray-700 rounded-lg '>
            <div className='w-3/12'>
              <div className='w-10'>
                <img
                  className='rounded-full'
                  src={source + this.props.item.image.full}
                  alt=''
                />
              </div>
            </div>
            <div className='ml-4 w-9/12'>
              <h2 className='text-xs text-white'>{this.props.item.name}</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function useSearchItem(items) {
  const [query, setQuery] = useState('')

  const [filteredItems, setFilteredItems] = useState(items)

  useMemo(() => {
    const result = items.filter(item => {
      return `${item.name}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredItems(result)
  }, [items, query])

  return { query, setQuery, filteredItems }
}

export default function ItemList(props) {
  const items = props.info
  const { query, setQuery, filteredItems } = useSearchItem(items)

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
        {filteredItems.map(items => {
          return (
            <React.Fragment key={items.image.full}>
              <ItemCard item={items} />
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}
