#4 Fragment - exported from 'react'
  import React, { Component, Fragment } from 'react';
  allow to Component to be rendered without a wrapper
  allow to create a clear html

#5 Portal
  allow the code/component to live somewhere in the React but show up at somwhere else in the DOM
  1. create location in DOM where the portal will live
  2. create Portal component and append/remove the component to the location(1) when the component is built and destroy
  3.  render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
      }
  4. use Portal component like other components