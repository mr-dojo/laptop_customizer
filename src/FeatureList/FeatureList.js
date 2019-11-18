import React, {Component} from 'react';
import Feature from './Feature/Feature.js';
import './FeatureList.css';

export default class FeatureList extends Component {
  static defaultProps = {
    features: {},
  }
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <Feature 
          selected={this.props.selected}
          features={this.props.features}
          feature={feature} 
          key={featureHash}
          updateFeature={this.props.updateFeature}
        />
      )
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    ) 
  }
}