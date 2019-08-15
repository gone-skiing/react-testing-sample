import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import './HiddenMessage.css';

function Fade({children, ...props}) {
  return (
    <CSSTransition {...props} classNames="fade" timeout={1000}>
      {children}
    </CSSTransition>
  );
}

Fade.propTypes = {
  children: PropTypes.any,
};

class HiddenMessage extends React.Component {
  state = {show: this.props.initialShow};

  toggle = () => {
    this.setState(({show}) => ({show: !show}));
  };

  render() {
    return (
      <div className="hidden-message-container">
        <button onClick={this.toggle}>Toggle</button>
        <Fade in={this.state.show}>
          <div>Hello world</div>
        </Fade>
      </div>
    );
  }
}

HiddenMessage.defaultProps = {
  initialShow: false,
};

HiddenMessage.propTypes = {
  initialShow: PropTypes.bool,
};

export default HiddenMessage;
