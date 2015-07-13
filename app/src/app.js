import app from 'ampersand-app'
import Router from './router'
import MainStyle from './styles/main.less'
import HeaderStyle from './styles/header.less'
import HalfCarouselStyle from './styles/half-carousel.less'
import AboutStyle from './styles/about.less'

window.app = app

app.extend({
  init(){
    this.Router = new Router()
    this.Router.history.start()
  }
})

app.init()