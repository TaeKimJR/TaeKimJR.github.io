import Router from 'ampersand-router'
import React from 'react'
import config from './config'
import NavHandler from './components/NavHandler'
import Layout from './layout'
import MessagePage from './components/message-page'
import HomePage from './pages/home'

export default Router.extend({
  renderPage (page) {
    page = (
      <NavHandler>
        <Layout>
          {page}
        </Layout> 
      </NavHandler>        
    )

    React.render(page, document.body);
  },

  routes: {
    '': 'home',

    '*notfound': 'fourOhfour'
  },

  home () {
    this.renderPage(<HomePage />)
  },

  fourOhfour () {
    this.renderPage(<MessagePage title='Baymax Says...' body='On a scale of 1 to 10, how would you rate your pain?' />)
  }
})







