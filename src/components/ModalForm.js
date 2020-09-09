import React, { Component } from 'react'


export class ModalForm extends Component {

  
  
  
  
  render() {
    

    
    // let timer
    
    // timer = setTimeout(() => {
    //       var element = document.getElementById("reSendButton") ;
    //         element.disabled = false;
    // }, 10000)
    


    return (
      <>
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">دریافت کد تایید</button>
    </div>
    
    <div className="modal fade" data-backdrop="false" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">: کد ارسال شده را وارد کنید</label>
                  <input type="number" className="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary text-left" data-dismiss="modal">ویرایش/بازگشت</button>
              <button type="submit" id='reSendButton' className="btn btn-success text-right" disabled="disabled">ارسال مجدد</button>
              <button className="btn btn-primary text-right" onClick={this.props.continue}>مرحله بعد</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

  export default ModalForm
  