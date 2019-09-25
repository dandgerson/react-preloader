import React, { Component } from 'react'

import './style.css'

export default class Preloader extends Component {
  constructor(props) {
    super(props)
    this.viewRef = React.createRef();
  }

  componentWillUnmount() {
    this.viewRef.current.style.opacity = 0
  }

  render() {
    return (
      <div
        className="preloader"
        ref={this.viewRef}
      >
        <div className="preloader__image_animate"/>
      </div>
    )
  }
}
