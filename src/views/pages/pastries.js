import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PastryAPI from './../../PastryAPI'
import Toast from '../../Toast'

class PastriesView {
  init(){
    document.title = 'Pastries'   
    this.pastries = null 
    this.render()    
    Utils.pageIntroAnim()
    this.getPastries()
  }

  async getPastries(){
    try{
      this.pastries = await PastryAPI.getPastries()
      console.log(this.pastries)
      this.render()

    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Pastries" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
        <div class="pastries-grid">
        ${this.pastries == null ? html`
          <sl-spinner></sl-spinner>
        ` : html`
          ${this.pastries.map(pastry => html`

              <va-pastry class="pastry-card"
              id="${pastry._id}"
              name="${pastry.name}" 
              description="${pastry.description}"
              price="$${pastry.price}"
              user="${JSON.stringify(pastry.user)}"
              image="${pastry.image}"
              >
              </va-pastry>

          `)}
        `}

        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new PastriesView()