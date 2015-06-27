import app from 'ampersand-app'
import Router from './router'
import Styles from './styles/main.styl'
import Me from './models/me'

window.app = app

app.extend({
    init(){
    	this.me = new Me()
    	this.me.fetchInitialData()
      this.Router = new Router()
      this.Router.history.start()
    }
})

app.init()