import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateClassNames } from '../../utils/validate-class';

import './fullbleed.css';

class Fullbleed extends Component {
  constructor(props) {
    super(props);
    const { parentSize } = props;
    this.state = {
      ratio: parentSize ? parentSize.width / parentSize.height : 1
    };
  }

  componentWillMount() {
    const { assetRatio } = this.props;
    const ratioValues = assetRatio.split(':');
    this._assetRatio = ratioValues[0] / ratioValues[1];
  }

  componentDidMount() {
    const { parentSize } = this.props;
    if (!parentSize) {
      this._onResize();
      window.addEventListener('resize', this._onResize, false);
    }
  }

  componentWillReceiveProps({ parentSize }) {
    if (parentSize) {
      const { width, height } = parentSize;
      const _parentSize = this.props.parentSize;
      if (width !== _parentSize.width || height !== _parentSize.height) {
        this._onResize();
      }
    }
  }

  shouldComponentUpdate(nextProps, { ratio }) {
    return ratio !== this.state.ratio;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize, false);
  }

  _onResize = () => {
    if (this._el) {
      const { clientWidth, clientHeight } = this._el;
      const ratio = clientWidth && clientHeight
        ? clientWidth / clientHeight
        : 1;
      this.setState({ ratio });
    }
  };

  renderChildren(blockName) {
    const { children } = this.props;
    return React.Children.map(children, child => {
      if (
        child.type !== 'img' &&
        child.type !== 'video' &&
        child.type.displayName !== 'Video'
      ) {
        throw new Error('Children must be of type img or of type video');
      }
      return React.cloneElement(child, {
        className: `${blockName}__item`
      });
    });
  }

  render() {
    const { classNames } = this.props;
    const { ratio } = this.state;

    const blockName = 'fullbleed';
    const blockNames = [blockName, ...classNames];
    if (ratio < this._assetRatio) blockNames.push('is-below-ratio');

    return (
      <div
        ref={el => {
          this._el = el;
        }}
        className={blockNames.join(' ')}
      >
        {this.renderChildren(blockName)}
      </div>
    );
  }
}

Fullbleed.propTypes = {
  /** An Array to add class names (either namespaced or Element names) to the component */
  classNames: validateClassNames,
  /** HTMLElement, either an 'img' or a 'video' */
  children: PropTypes.node.isRequired,
  /** The aspect ratio of the asset passed as a child */
  assetRatio: PropTypes.string.isRequired,
  /** The width and height of the parent component. If Fullbleed is used
   * as a fullscreen component, these values need to be the browser width and height.
   */
  parentSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};

Fullbleed.defaultProps = {
  classNames: null,
  parentSize: null
};

export default Fullbleed;
