import React, { Component } from 'react'


export class AccountSetup extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    return (
      <div>
        <div className="main-page">
          <p>سامانه جامع آموزش آنلاین دانشگاه شیراز</p>
          <button type="button" className="btn btn-primary m-3" onClick={this.continue}>خرید سامانه</button>
          <button type="button" className="btn btn-secondary m-3" disabled>پیگیری خرید</button>
        </div>
      </div>
    )
  }
}

export default AccountSetup