import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div class={`body-card ${this.props.position}`} onClick={this.props.handleClick}>
        <img class={`card-image-${this.props.position}`} src={this.props.picture} alt='thing'></img>
        <p class='card-header'>{this.props.header}</p>
        <p class='card-body'>{this.props.body}</p>
        <div class='card-bottom'>
          <div class='card-pricing'>
            <p class='pricing-year'>per jaar</p>
            <p class='price-year'>1320,00</p>
            <p class='price-year-euro'>€</p>
            <p class='pricing-month'>maandelijks</p>
            <p class='price-month'>110,00</p>
            <p class='price-month-euro'>€</p>
          </div>
          <button class='card-button'>Kies dit pakket ›</button>
          <p class='card-footer'><u>
            Tarievenspecificatie<br/>
            Meer informatie<br/>
          </u></p>
        </div>
      </div>
    );
  }
}

export default Card;
