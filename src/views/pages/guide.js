import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from './../../UserAPI'
import Toast from '../../Toast'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, { newUser: false}, 'json')
      console.log('user updated')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">

      <h3 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h3>
      <p>This is a quick tour to teach you the basics to buying your pastries!</p>

      <h1>This app is here to help you place orders for your favorite pastries, please navigate to the orders section, Thank you and live your pastry dreams!</h1>
      

      
      <sl-button type="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()