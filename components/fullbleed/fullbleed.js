import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './fullbleed.css';

class Fullbleed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratio: 1
    };
  }

  componentWillMount() {
    const { assetRatio } = this.props;
    const ratioValues = assetRatio.split(':');
    this._assetRatio = ratioValues[0] / ratioValues[1];
  }

  componentDidMount() {
    const { width, height } = this.props;
    this._onResize();
    if (!width && !height) {
      window.addEventListener('resize', this._onResize, false);
    }
  }

  componentWillReceiveProps({ width, height }) {
    if (
      width &&
      height &&
      (width !== this.props.width || height !== this.props.height)
    ) {
      this._onResize();
    }
  }

  shouldComponentUpdate(nextProps, { ratio }) {
    return ratio !== this.state.ratio;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize, false);
  }

  _onResize = () => {
    this.setState({
      ratio: this._el.clientWidth / this._el.clientHeight
    });
  };

  renderChildren(blockName) {
    const { children } = this.props;
    return React.Children.map(children, child => {
      if (child.type !== 'img' && child.type !== 'video') {
        throw new Error('Children must be of type img or of type video');
      }
      return React.cloneElement(child, {
        className: `${blockName}__item o-media__${child.type}`
      });
    });
  }

  render() {
    const { classNames } = this.props;
    const { ratio } = this.state;

    const blockName = 'fullbleed';
    const blockNames = [blockName];
    if (classNames) blockNames.concat(classNames);
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
  /** Add additional classe names to the component */
  classNames: PropTypes.array,
  /** HTMLElement, either an 'img' or a 'video' */
  children: PropTypes.node.isRequired,
  /** The aspect ratio of the asset passed as a child */
  assetRatio: PropTypes.string.isRequired,
  /** When used, it must be passed in pair with the `height` prop.
   * It represents width of the parent element containing `Fullbleed`.
   * It could be the viewport width, if `Fullbleed` is used on fullscreen
   */
  width: PropTypes.number,
  /** When used, it must be passed in pair with the `width` prop.
   * It represents height of the parent element containing `Fullbleed`.
   * It could be the viewport height, if `Fullbleed` is used on fullscreen
   */
  height: PropTypes.number
};

Fullbleed.defaultProps = {
  classNames: null,
  width: null,
  height: null
};

export default Fullbleed;
