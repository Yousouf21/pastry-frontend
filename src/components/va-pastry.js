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

<div class="wrap">

  <div class="content">
  <h6>You can add the following plant to your orders</h6>

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
      <style>
      
  .wrap {
    display: flex;
  }




</style>


    <sl-card>
    <img class="orders" src="/images/1.jpeg" width="300px">
    <h2>Peperomia Polybotra $10</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/2.jpeg" width="300px">
    <h2>Kolkwitzia amabilis $15</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/3.jpeg" width="300px">
    <h2>	Platycodon grandiflorus $10</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/4.jpeg" width="300px">
    <h2>Sutera cordata $19</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/5.jpeg" width="300px">
    <h2>Ageratum houstonianum $9</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/14.jpeg" width="300px">
    <h2>Tagetes erecta $10</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>


    <sl-card>
    <img class="orders" src="/images/7.jpeg" width="300px">
    <h2>Canna generalis $10</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>
  
        <sl-card>
    <img class="orders" src="/images/13.jpeg" width="300px">
    <h2>Dianthus chinensis $19</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/10.jpeg" width="300px">
    <h2>Canna generalis $12</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/11.jpeg" width="300px">
    <h2>Zinnia elegans $15</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/12.jpeg" width="300px">
    <h2>Sanvitalia speciosa $10</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>

    <sl-card>
    <img class="orders" src="/images/15.jpeg" width="300px">
    <h2>Miscanthus $5</h2>

        <h2 style="buycard">${this.name}</h2>
        <h3 style="buycard">${this.price}</h3>
        
        <sl-button @click=${this.moreInfoHandler.bind(this)}>Info & Order</sl-button>
        

    </sl-card>
    `
  }
  
})