import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'

class SignUpView{
   
  init(){      
    console.log('SignUpView.init')  
    document.title = 'Sign In'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData
    
    // sign up using Auth
    Auth.signUp(formData, () => {
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
          
          <sl-form class="form-signup" @sl-submit=${this.signUpSubmitHandler}>
            <div class="input-group">
              <sl-input name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>  
            
            <div class="input-group">
              <sl-select name="accessLevel" placeholder="I am a ... in plants">
                <sl-menu-item value="1">Newbie</sl-menu-item>
                <sl-menu-item value="2">Expert</sl-menu-item>
              </sl-select>

            </div>          
            <sl-button type="primary" class="submit-btn" submit style="width: 100%;">Sign Up</sl-button>
          </sl-form>
          <p>Have an account? <a href="/signin" @click=${anchorRoute}>Sign In</a></p>
          <p>If you do not wish to create an account <a href="/test" @click=${anchorRoute}>Log In</a></p>
          <h5>(please note you will not be able to make purchases until you create an account.)</h5>
          
        </div>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()