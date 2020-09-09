import React, { Component } from 'react'
import ModalForm from './ModalForm';

export class FormSetup extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <p className="mb-5">برای ثبت درخواست خرید سامانه برای مدرسه خود اطلاعات زیر را تکمیل کنید</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="school">کد مدرسه</label>
                        <input type="number" name="school" id="txtNumber" className="form-control" onChange={inputChange('school')} value={values.school} />
                        </div>
                    <div className="form-group">
                        <label htmlFor="phone">شماره موبایل</label>
                        <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                    </div>
                </form>

                <br />
                
                <div className="row">
                    <div className="col-6 text-left">
                        <button className="btn btn-danger text-left" onClick={this.back}>بازگشت</button>
                    </div>
                    <div className="col-6">
                        <ModalForm continue={this.continue}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormSetup
