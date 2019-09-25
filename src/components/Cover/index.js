import React, { Component, Suspense, lazy } from 'react'

import Preloader from '../Preloader'

const MainArea = lazy(() => import('../MainArea'))

export default class Cover extends Component {
  render() {
    return (
      <Suspense
        fallback={<Preloader />}
      >
        <MainArea />
      </Suspense>
    )
  }
}
