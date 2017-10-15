import React, { Component } from 'react'
import Panel from 'muicss/lib/react/panel'
import './index.scss'

export default class TopTenLosers1h extends Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    const headers = new Headers()

    const options = {
      method: 'GET',
      headers,
      mode: 'cors'
    }


    return fetch('http://localhost:5000/api/toptenlosers/1h', options)
      .then( response => response.json() )
      .then( items => {

        return this.setState({items})
      })
  }
  render(){
    let {items} = this.state
    return (
      <div className="coin-list">
        <h1>Top Ten Losers (1h)</h1>
        {items.map(item => <Panel key={item.symbol}>
            <span><h1><b>{item.rank}</b> {item.name}</h1></span>
            <span>
              <div className="main-coin-info"><h2>{item.symbol}</h2>
                <h2> Price in USD: $ {item.price_usd} </h2>
                <h2> Price in BTC: Ƀ {item.price_btc} </h2>
                <p> 24h Volume USD: $ {item["24h_volume_usd"]}</p>
              </div>
                <div className="price-change">
                <p>Percent Change 1h: {item.percent_change_1h}</p>
                <p>Percent Change 24h: {item.percent_change_24h}</p>
                <p>Percent Change 7 days: {item.percent_change_7d}</p>
              </div>
            </span>
          </Panel>)
        }
      </div>
    )
  }
}
