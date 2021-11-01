import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class BuyView {
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

      </ul>
    </nav>

    <sl-card>
    <img class="orders" src="/images/1.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/2.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/3.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/4.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/5.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>
        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/14.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/7.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>
  
        <sl-card>
    <img class="orders" src="/images/13.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/10.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/11.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/12.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/15.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        

    </sl-card>
     
    `
    render(template, App.rootEl)
  }
}

export default new BuyView()