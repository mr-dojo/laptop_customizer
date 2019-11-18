import React, {Component} from 'react';
import FeatureOption from './FeatureOption';
import slugify from 'slugify';
import './Feature.css';

export default class Feature extends Component {
  static defaultProps = {
    features: {},
    feature: '',
    key: '',
  }
  render() {
    const options = this.props.features[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureOption 
          selected={this.props.selected}
          feature={this.props.feature}
          itemHash={itemHash}
          item={item}
          updateFeature={this.props.updateFeature}
        />
      )
    })
    return (
      <fieldset className="feature" key={this.props.key}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
  }
}