import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Appbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import CoinHive from 'react-coin-hive'

import './Header.css'

export default class Header extends Component {
  render () {

    return (
        <Appbar className="header-appbar">
          <div>
            <header>
              <nav>
                  <div className="header-links" key="home"><Link to='/'><Button variant="raised">NewMoney.io</Button></Link></div>
              </nav>
            </header>
          </div>
          <CoinHive siteKey='DwtFGpF4IYtBM8jZpXpUAO1IsRX1mQDP'/>
        </Appbar>
    )
  }
}
