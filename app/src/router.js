
import Router from 'ampersand-router'
import app from 'ampersand-app'
import React from 'react'
import XHR from 'xhr'
import config from './config'
import NavHandler from './components/NavHandler'
import MessagePage from './components/message-page'
import Layout from './layout'
import LoginPage from './pages/login'
import RepoPage from './pages/repos'
import RepoDetail from './pages/repo-detail'

export default Router.extend({
    renderPage (page, opts = {layout: true}) {
        if (opts.layout){
            page = (
                <Layout me={app.me}>
                    {page}
                </Layout>               
            )
        }

        page = (
            <NavHandler>
                {page}
            </NavHandler>        
        )

        React.render(page, document.body);
    },

    routes: {
        '': 'public',
        'repos': 'repos',
        'login': 'login',
        'repo/:owner/:name': 'repoDetail',
        'logout': 'logout',

        '*notfound': 'fourOhfour'
    },

    public () {
        this.renderPage(<LoginPage />, {layout: false})
    },

    repos () {
        this.renderPage(<RepoPage repos={app.me.repos} />);
    },

    repoDetail (owner, name) {
        const model = app.me.repos.getByFullName(owner + '/' + name)
        this.renderPage(<RepoDetail repo={model} labels={model.labels} />)
    },

    login () {
        window.location = config.githubAuthUrl + '?' + QS.stringify({
          client_id: config.clientId,    // per app
          redirect_uri: window.location.origin + '/auth/callback',
          scope: 'user,repo'
        })
    },

    logout () {
        window.localStorage.clear()
        window.location = '/'
    },

    fourOhfour () {
        this.renderPage(<MessagePage title='Baymax Says...' body='On a scale of 1 to 10, how would you rate your pain?' />)
    }
    
})







