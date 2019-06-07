import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationTop />
        {this.props.children}
        <NavigationBottom />
      </Fragment>
    );
  }
}

export default Layout;