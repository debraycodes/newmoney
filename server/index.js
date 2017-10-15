const express = require( 'express' )
const app = express()
const requestPromise = require( 'request-promise' )
const cors = require( 'cors' )

app.use( cors() )

app.get('/api/toptencoins', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/?limit=10',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      const coins = JSON.parse( data )
      res.status( 200 ).json( coins )
    })
})

app.get( '/api/toptengainers/1h', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last hour
      coins = coins.sort( ( a, b ) => a.percent_change_1h - b.percent_change_1h ).reverse().slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

app.get( '/api/toptenlosers/1h', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last hour
      coins = coins.sort( ( a, b ) => a.percent_change_1h - b.percent_change_1h ).slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

app.get('/api/toptengainers/24h', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last day
      coins = coins.sort( ( a, b ) => a.percent_change_24h - b.percent_change_24h ).reverse().slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

app.get('/api/toptenlosers/24h', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last day
      coins = coins.sort( ( a, b ) => a.percent_change_24h - b.percent_change_24h ).slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

app.get('/api/toptengainers/7d', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last week
      coins = coins.sort( ( a, b ) => a.percent_change_7d - b.percent_change_7d ).reverse().slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

app.get('/api/toptenlosers/7d', ( req, res ) => {
  const options = {
    uri: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }
  return requestPromise( options )
    .then( data => {
      let coins = JSON.parse( data )
      // Sort the coins by the percent change in the last week
      coins = coins.sort( ( a, b ) => a.percent_change_7d - b.percent_change_7d ).slice( 0, 10 )
      res.status( 200 ).json( coins )
    })
})

const port = process.env.PORT || 5000
app.listen( port, () => console.log( `App listening on ${port}` ) )
