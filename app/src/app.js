import app from 'ampersand-app'
import Router from './router'
import MainStyle from './styles/main.less'
import RotatingImageStyle from './styles/rotating-images.less'
import AnimatedTextStyle from './styles/animated-text.less'
import RotatingTextStyle from './styles/rotating-text.less'
import NavStyle from './styles/nav-slider.less'
import ContactFormStyle from './styles/contact-form.less'
import NavigationStyle from './styles/navigation.less'
import ResponsiveSquareImgStyle from './styles/responsive-square-image.less'

window.app = app

app.extend({
  init(){
    this.Router = new Router()
    this.Router.history.start()
  }
})

app.init()