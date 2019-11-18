import React from 'react';
import './ChosenFeat.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function ChosenFeat(props) {
  return (
    <div className="summary__option" key={props.key}>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.selectedOption.cost)}
      </div>
    </div>
  )
}