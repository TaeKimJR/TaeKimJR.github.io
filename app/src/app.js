import app from 'ampersand-app'
import Router from './router'
import MainStyle from './styles/main.less'
import RotatingImageStyle from './styles/rotating-images.less'
import AnimatedTextStyle from './styles/animated-text.less'
import RotatingText from './styles/rotating-text.less'

window.app = app

app.extend({
  init(){
    this.Router = new Router()
    this.Router.history.start()
  }
})

app.init()