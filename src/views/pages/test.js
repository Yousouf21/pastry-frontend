import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'


class TestView {
  init(){
    document.title = 'Test'    
    this.render()    
    Utils.pageIntroAnim()
  }

  
  render(){
    const template = html`
      <va-app-header title="Main Content" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <!DOCTYPE html>
      <html lang="en">

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

        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script
            type="module"
            src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/dist/shoelace/shoelace.esm.js"
          ></script>
          <link rel="stylesheet" href="styles.css" />
          <title>Document</title>
        </head>
      
        <body>
          <nav>
            <ul>
              <img id="log" src="/images/logo.png" />
              <li><a href="/buy" @click=${anchorRoute}>Plants</a></li>
              <li>
                <a href="#best-plants">Best Sellers</a>
              </li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/signin @click=${anchorRoute}">Sign In</a></li>

            </ul>
          </nav>
      
          <h1>"To plant a garden<br />is to believe<br />in tomorrow"</h1>
      
          <div class="center">
            <div class="arrow"></div>
          </div>
      

      
        <div class="best-sell">
          <div id="best-plants">
          <h2>Bestselling Plants</h2>
          </div>
          <img src="/images/1.jpeg" class="plant1" />
          <img src="/images/2.jpeg" class="plant2" />
          <img src="/images/3.jpeg" class="plant3" />
      
          <div class="box box1">Peperomia Polybotra $10</div>
          <div class="box box2">Peace Lily $7</div>
          <div class="box box3">Philodendron Pink Princess $5</div>

        </div>
      

      
        <div id="spacer"></div>
          <div id="about">
            <h2>About Us</h2>
          </div>
      
          <img src="/images/abt.jpg" class="abtus" />
          <img src="/images/13.jpeg" class="cont-plant2" />
      
          <div id="contact">
            <h2>Contact Us</h2>
          </div>
      
          <img src="/images/12.jpeg" class="cont-plant" />
          <div class="container">
            <form action="/action_page.php">
              <label for="fname"></label>
              <div class="name">
                <input type="text" id="name" name="name" placeholder="NAME" />
              </div>
      
              <label for="email"></label>
              <div class="email">
                <input type="text" id="email" name="email" placeholder="EMAIL" font-size=2vw />
              </div>
      
              <label for="subject"></label>
              <div class="mssg">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="MESSAGE"
                  style="height: 15.5vw"
                ></textarea>
              </div>
              <div class="submt">
                <input type="submit" value="Contact Us" />
              </div>
            </form>
          </div>
          <br /><br />

          <div class="scrolltop-wrap">
          <a href="#" role="button" aria-label="Scroll to top">
              <svg height="48" viewBox="0 0 48 48" width="48" height="48px" xmlns="http://www.w3.org/2000/svg">
                  <path id="scrolltop-bg" d="M0 0h48v48h-48z"></path>
                  <path id="scrolltop-arrow" d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"></path>
              </svg>
          </a>
        </div>
      
          <script src="main.js"></script>
        </body>
      </html>
          
    `
    render(template, App.rootEl)
  }
}


export default new TestView()