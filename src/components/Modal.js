import React, { Component } from 'react'
import ModalForm from './ModalForm'

export class Modal extends Component {



  render() {

    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">دریافت کد تایید</button>
        <ModalForm />
      </div>
    )
  }
}

export default Modal
