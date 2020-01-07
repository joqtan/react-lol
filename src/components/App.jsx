import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Champions from '../pages/Champions'
import Items from '../pages/Items'
import ChampionDetails from '../pages/ChampionDetails'
import ItemDetails from '../pages/ItemDetails'

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen relative bg-gray-800'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Champions} />
            <Route exact path='/champs' component={Champions} />
            <Route exact path='/champs/:champ' component={ChampionDetails} />
            <Route exact path='/items' component={Items} />
            <Route exact path='/item/:item' component={ItemDetails} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  )
}
