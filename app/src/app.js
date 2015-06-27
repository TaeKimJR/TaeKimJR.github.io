import app from 'ampersand-app'
import Router from './router'
import Styles from './styles/main.styl'

window.app = app

app.extend({
  init(){
    this.Router = new Router()
    this.Router.history.start()
  }
})

app.init()