import App from '../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class SignInView {

  
  init(){
    console.log('SignInView.init')
    document.title = 'Sign In'
    this.render()
    Utils.pageIntroAnim()
  }

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute('loading')
    })
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
max-width: 100%;
margin: 0px;
padding: 0;
}  
</style> 
    <div class="page-content page-centered">
      <div class="signinup-box">
        <img class="signinup-logo" src="/images/logo.png">          
        <sl-form class="form-signup dark-theme" @sl-submit=${this.signInSubmitHandler}>          
          <div class="input-group">
            <sl-input name="email" type="email" placeholder="Email" required></sl-input>
          </div>
          <div class="input-group">
            <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
          </div>
          <sl-button class="submit-btn" type="primary" submit style="width: 100%;">Sign In</sl-button>
        </sl-form>
        <p>No Account? <a href="/signup" @click=${anchorRoute}>Sign Up</a></p>
        <p>If you do not wish to create an account <a href="/test" @click=${anchorRoute}>Log In</a></p>
        <h5>(please note you will not be able to make purchases until you create an account.)</h5>
      </div>
    </div>

  `
    render(template, App.rootEl)    
  }
}

export default new SignInView()

