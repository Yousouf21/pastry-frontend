import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import UserAPI from './../UserAPI'
import Toast from './../Toast'


customElements.define('va-pastry', class Pastry extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      id: {
        type: String
      },
      name: {
        type: String
      },
      description: {
          type: String
      },
      price: {
          type: String
      },
      user: {
        type: Object
      },
      image: {
          type: String
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }


moreInfoHandler(){

  const dialogEl = document.createElement('sl-dialog')

  dialogEl.className = 'pastry-dialog'
  const dialogContent = html`
  <style>
  .wrap {
    display: flex;
  }
  .image {
    width: 50%;
  }
  .image img {
    width: 100%;
  }
  .content {
    padding-left: 1em;
  }

  .price {
    font-size: 2vw;
    color: var(--brand-color)
  }


</style>
<div class="wrap">
  <div class="image">
    <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
  </div>
  <div class="content">
    <h1>${this.name}</h1>
    <p>${this.description}</p>
    <p class="price">${this.price}</p>

    <sl-button @click=${this.addOrdHandler.bind(this)}>
      Add to order
    </sl-button>
  </div>
</div>
`
  render(dialogContent, dialogEl)

  document.body.append(dialogEl)

  dialogEl.show()

  // to prevent dialogues from clogging 
  dialogEl.addEventListener('sl-after-hide', () => {
    dialogEl.remove()
  })

}
  
async addOrdHandler(){    
  try {
    await UserAPI.addPastryOrder(this.id)
    Toast.show('Order placed successfully')
  }catch(err){
    Toast.show(err, 'error')
  }
}


  render(){    
    return html`


    <sl-card>
        <img slot="image" src="${App.apiBase}/images/${this.image}" />
        <h2>${this.name}</h2>
        <h3>${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>
  
    `
  }
  
})