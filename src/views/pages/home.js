import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
        <h1 class="anim-in">Hey ${Auth.currentUser.firstName}</h1>

        <br>
        <h2>Welcome to 'La Maison' where all your sweet dreams come true!<br>Please go to our pastries section to make orders!</h2>

        



      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()