import React, { Component } from 'react';
import './HeaderBlock.css';

class HeaderBlock extends Component {

  handleClick = () => {
    if(this.props.disabled){
      this.props.handleClick(this.props.class)
    }
  }

  render() {
    return (
      <div class={`header-input ${this.props.class} ${!this.props.disabled}`} onClick={_ => this.handleClick()}>
          {this.props.class === 'postcode' && <p class='icon'>&#xe82d;</p>}
          {this.props.class === 'bewoners' && <p class='icon bigger'>&#xe80e;</p>}
          {this.props.class === 'kWh' && <p class='icon'>&#xe82b;</p>}
          {this.props.class === 'm3' && <p class='icon'>&#xe81b;</p>}
          {this.props.class === 'bewoners' &&
            <p class='header-label'>{this.props.content}</p>
          }
          {this.props.class === 'button' &&
            <p class='header-label'>{this.props.content}</p>
          }
          {this.props.class !== 'bewoners' && this.props.class !== 'button' && this.props.disabled &&
            <input id={this.props.class} class='header-label-input' onChange={_ => this.props.handleChange(this.props.class, document.getElementById(this.props.class).value)} value={this.props.content}></input>
          }
          {this.props.class === 'bewoners' && <p class='icon-tag'>&#xe846;</p>}
          {this.props.class === 'm3' && <p class='label-tag'>{this.props.class}</p>}
          {this.props.class === 'kWh' && <p class='label-tag'>{this.props.class}</p>}
      </div>
    );
  }
}

export default HeaderBlock;
