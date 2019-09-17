/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import loader from '../../assets/images/loader.gif';

class LoaderComponent extends React.Component {

  render() {
    const { text } = this.props;
    return (
        <div>
          <div>{typeof(text) !== 'undefined' ? text : "Laddar..."}</div>
          <img src={loader} alt="Laddar..." />
        </div>
    );
  }
}

export default LoaderComponent;
