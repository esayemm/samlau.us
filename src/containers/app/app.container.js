import './app.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import NavbarContainer from '../navbar/navbar.container.js';
import ModalContainer from '../modal/modal.container.js';

class AppContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      modal,
    } = this.props;

    return <div className="app">
      <NavbarContainer />
      {this.props.children}

      <ModalContainer />
    </div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps, {
  // pass in props
})(AppContainer);
