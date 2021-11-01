import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'


class LogbuyView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
    
<style>  
body  
{  
background-image:url("/images/bg.jpg");  
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
position: relative;
max-width: 100%;
margin: 0px;
padding: 0;
}  
</style>  
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
   
      <nav>
      <ul>
        <img id="log" src="/images/logo.png" />
        <li><a href="#plants">Plants</a></li>
        <li>
          <a href="#best-plants">Best Sellers</a>
        </li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a @click="${() => gotoRoute('/signin')}">Sign In</a></li>
        <sl-dropdown>
        <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
          <sl-avatar style="--size: 5vw;" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar> ${this.user && this.user.firstName}
        </a>
        <sl-menu>            
          <sl-menu-item @click="${() => gotoRoute('/profile')}">Profile</sl-menu-item>
          <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
      </ul>
    </nav>

    <va-pastry>
   
    </va-pastry>

     
    `
    render(template, App.rootEl)
  }
}

export default new LogbuyView()