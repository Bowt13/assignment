import React, { Component } from 'react';
import './App.css';

//componets
  import HeaderBlock from './components/HeaderBlock'
  import BodyBlock from './components/BodyBlock'
  import Card from './components/Card'

class App extends Component {
  state = {
    postcode: '1111AB',
    kWh: '2850',
    m3: '1250',
    showDropdown: 'hidden',
    bewoners: '1 Bewoner',
    stroom: true,
    gas: true,
    variabel: 'selected',
    jaar1: '',
    jaar3: '',
    card1: '1',
    card2: '1',
    card3: '1',
  }

  handleShowdropdown = (type) => {
    switch (type) {
      case 'bewoners':
        if(this.state.showDropdown === 'closed' || this.state.showDropdown === 'hidden'){
          this.setState({
            showDropdown: 'open',
          })
        }else{
          this.setState({
            showDropdown: 'closed',
          })
        }
        break;
      default:
        break;
    }
  }

  handleDropdownClick = (value) => {
    this.setState({
      bewoners: value,
      showDropdown: 'closed',
    })
  }

  handleClick = (type) => {
    if (this.state[type]) {
      this.setState({
      [type]: false
      })
    }
    if (!this.state[type]) {
      this.setState({
      [type]: true
      })
    }
  }

  selectBodyBlock = (type) => {
    switch (type) {
      case 'Variabel':
        this.setState({
          variabel: 'selected',
          jaar1: '',
          jaar3: '',
        })
        break;
      case '1 jaar':
        this.setState({
          variabel: '',
          jaar1: 'selected',
          jaar3: '',
        })
        break;
      case '3 jaar':
        this.setState({
          variabel: '',
          jaar1: '',
          jaar3: 'selected',
        })
        break;
      default:
        break;
    }
  }

  handCardClick = (type) => {
    switch (type) {
      case 'card1':
        if(this.state.card2 === '1'){
          this.setState({
            card1: 'current',
          })
        }
        if(this.state.card3 === '1'){
          this.setState({
            card1: 'current',
          })
        }
        if(this.state.card2 === 'current'){
            this.setState({
              card1: 'current',
              card2: 'uncurrent',
            })
          }
        if(this.state.card3 === 'current'){
            this.setState({
              card1: 'current',
              card3: 'uncurrent',
            })
          }
        break;
      case 'card2':
        if(this.state.card1 === '1'){
          this.setState({
            card2: 'current',
          })
        }
        if(this.state.card3 === '1'){
          this.setState({
            card2: 'current',
          })
        }
        if(this.state.card1 === 'current'){
            this.setState({
              card1: 'uncurrent',
              card2: 'current',
            })
          }
        if(this.state.card3 === 'current'){
            this.setState({
              card2: 'current',
              card3: 'uncurrent',
            })
          }
        break;
      case 'card3':
        if(this.state.card1 === '1'){
          this.setState({
            card3: 'current',
          })
        }
        if(this.state.card2 === '1'){
          this.setState({
            card3: 'current',
          })
        }
        if(this.state.card1 === 'current'){
            this.setState({
              card1: 'uncurrent',
              card3: 'current',
            })
          }
        if(this.state.card2 === 'current'){
            this.setState({
              card2: 'uncurrent',
              card3: 'current',
            })
          }
        break;
      default:
        break;
    }
  }

  handleChange = (type, value) => {
    this.setState({
      [type]: value
    })
    console.log(this.state)
  }

  handleFocus = (type) => {
    document.getElementById(type).focus()
  }

  render() {
    return (
      <div>
        <div class='header'>
          <p class='header-content'>
            Bereken je tarief voor groene energie
          </p>
          <HeaderBlock
            class='postcode'
            content={this.state.postcode}
            disabled={true}
            handleClick={this.handleFocus}
            handleChange={this.handleChange}
          />
          <HeaderBlock
            class='bewoners'
            content={this.state.bewoners}
            disabled={true}
            handleClick={this.handleShowdropdown}
          />
          <HeaderBlock
            class='kWh'
            content={this.state.kWh}
            disabled={this.state.stroom}
            handleClick={this.handleFocus}
            handleChange={this.handleChange}
          />
          <HeaderBlock
            class='m3'
            content={this.state.m3}
            disabled={this.state.gas}
            handleClick={this.handleFocus}
            handleChange={this.handleChange}
          />
          <HeaderBlock
            class='button'
            content='Bereken je tarief'
            disabled={true}
            handleClick={this.handleShowdropdown}
          />
          <div class={`dropdown ${this.state.showDropdown}`}>
            <ul>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('1 Bewoner')}>1 Bewoner</p>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('2 Bewoners')}>2 Bewoners</p>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('3 Bewoners')}>3 Bewoners</p>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('4 Bewoners')}>4 Bewoners</p>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('5 Bewoners')}>5 Bewoners</p>
              <p class='dropdown-item'
                onClick={_ => this.handleDropdownClick('6 Bewoners')}>6 Bewoners</p>
            </ul>
          </div>
          <div class='text-holder1'>
            {this.state.stroom &&
              <p
                class='textthing'
                onClick={_ => this.handleClick('stroom')}>
                <u>geen stroom</u>
              </p>
            }
            {!this.state.stroom &&
              <p
                class='textthing'
                onClick={_ => this.handleClick('stroom')}>
                <u>ook stroom</u>
              </p>
            }
          </div>
          <div class='text-holder2'>
            {this.state.gas &&
              <p
                class='textthing'
                onClick={_ => this.handleClick('gas')}>
                <u>geen gas</u>
              </p>
            }
            {!this.state.gas &&
              <p
                class='textthing'
                onClick={_ => this.handleClick('gas')}>
                <u>ook gas</u>
              </p>
            }
          </div>
        </div>
        <div class='body'>
          <p class='text-1'>Langer profiteren van laag tarief?</p>
          <BodyBlock
            content='Variabel'
            selected={this.state.variabel}
            handleClick={this.selectBodyBlock}
          />
          <BodyBlock
            content='1 jaar'
            selected={this.state.jaar1}
            handleClick={this.selectBodyBlock}
          />
          <BodyBlock
            content='3 jaar'
            selected={this.state.jaar3}
            handleClick={this.selectBodyBlock}
          />
          <p class='text-2'>Kies je product</p>
          <Card
            position={this.state.card1}
            picture={require("./assets/product-groen-uit-nederland.png")}
            header='Groen uit Nederland'
            body='50% groene stroom uit biovergisters, 50% uit windmolens en bosgecompenseerd gas.'
            handleClick={_ => this.handCardClick('card1')}
          />
          <Card
            position={this.state.card2}
            picture={require("./assets/product-wind-uit-nederland.png")}
            header='Wind uit Nederland'
            body='100% groene stroom uit Nederlandse windmolens en bosgecompenseerd gas.'
            handleClick={_ => this.handCardClick('card2')}
          />
          <Card
            position={this.state.card3}
            picture={require("./assets/product-biomassa-uit-nederland.png")}
            header='Biomassa uit Nederland'
            body='Bespaar to 10% op je energiekosten. Eenmalig €50.'
            handleClick={_ => this.handCardClick('card3')}
          />
        </div>
      </div>
    );
  }
}

export default App;
