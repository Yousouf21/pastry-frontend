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
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      

      <h4 class="brand-color">Welcome ${Auth.currentUser.firstName}!</h4><br>
      <p>This is a quick tour to teach you the basics to buying your plants!<br>This app is here to help you place orders for your favorite plants. Thank you and live your plant dreams!</p>
      
      <p class="tour">Before you go buy out all the plants in Bloomscape, it’s a good idea to ask yourself a few specific questions. These questions will help you choose the right plants for you. These three questions to ask yourself are:<br>

      -What spots do I have available, or where do I want to put my plants?<br>
      
      -How bright is my home and these locations?<br>
      
      -How much time do I want to put into my houseplants?<br><br>
      
      Answering these three questions can save a lot of discouragement, because there are different plants that are suited to different skill levels and locations.</p>

      <div class="got-it-btn">
      <sl-button type="primary" @click=${() => gotoRoute('/log')}>Okay got it!</sl-button>
      </div>          
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()