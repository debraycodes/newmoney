import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Button from 'muicss/lib/react/button'

import './Sidebar.scss'

export default class Sidebar extends Component {
    render() {

return (
    <div className="sidebar-panel">
        <div className="sidebar-links">
                <div><Link to='/'><Button variant="raised"><strong>Home</strong></Button></Link></div>
                <div><strong>Top 10 Gainers</strong></div>
                <div><Link to='/toptengainers/1h'><Button variant="raised"><strong>1hour</strong></Button></Link></div>
                <div><Link to='/toptengainers/24h'><Button variant="raised"><strong>24hrs</strong></Button></Link></div>
                <div><Link to='/toptengainers/7d'><Button variant="raised"><strong>7days</strong></Button></Link></div>
                <div><strong>Top 10 Losers</strong></div>
                <div><Link to='/toptenlosers/1h'><Button variant="raised"><strong>1hour</strong></Button></Link></div>
                <div><Link to='/toptenlosers/24h'><Button variant="raised"><strong>24hrs</strong></Button></Link></div>
                <div><Link to='/toptenlosers/7d'><Button variant="raised"><strong>7days</strong></Button></Link></div>
        </div>
    </div>)
    }
}
