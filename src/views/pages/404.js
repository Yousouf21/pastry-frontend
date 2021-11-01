import App from './../../App'
import {html, render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class FourOFourView{
  init(){
    console.log('FourOFourView.init')    
    document.title = '404 File not found'    
    this.render()
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
     
        <h4>Go to our login page!</h4><br>
        <p>Click <a href="/signin" @click=${anchorRoute}>Here</a></p>
      
    `
    render(template, App.rootEl)
  }
}

export default new FourOFourView()