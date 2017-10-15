import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TopTenCoins from './topTenCoins'
import TopTenGainers7d from './topTenGainers7d'
import TopTenLosers7d from './topTenLosers7d'
import TopTenGainers24h from './topTenGainers24h'
import TopTenLosers24h from './topTenLosers24h'
import TopTenGainers1h from './topTenGainers1h'
import TopTenLosers1h from './topTenLosers1h'
import Sidebar from './Sidebar/Sidebar'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import './index.scss'

const Main = () => (
  <Container fluid={true}>
    <Row>
      <Col sm="12" md="2">
        <Sidebar className="sidebar"/>
      </Col>
      <Col md="6">
        <main>
          <Switch>
            <Route exact path='/' component={ TopTenCoins }/>
            <Route path='/topTenGainers/1h' component={ TopTenGainers1h }/>
            <Route path='/topTenGainers/24h' component={ TopTenGainers24h }/>
            <Route path='/topTenGainers/7d' component={ TopTenGainers7d }/>
            <Route path='/topTenLosers/7d' component={ TopTenLosers7d }/>
            <Route path='/topTenLosers/24h' component={ TopTenLosers24h }/>
            <Route path='/topTenLosers/1h' component={ TopTenLosers1h }/>
          </Switch>
        </main>
      </Col>
      <Col md="4">
      </Col>
    </Row>
  </Container>
)

export default Main
