import React, { Component } from 'react'
import axios from 'axios'

export class Confirm extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            values: this.props
        }
    }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users?id=1')
      .then(res => {
        console.log(res.data[0])
          this.setState({ users: res.data })
      })
      .catch(err => {
      console.log(err)
    })
    }



    render() {

        return (
            <div className="form-container">
                <p className="mb-5">شما در حال ثبت درخواست خرید سامانه برای مدرسه با کد اختصاصی {this.state.values.values.school} و مشخصات ذیل می باشید</p>
                <ul class="list-group">
                    {this.state.users.map(user => {
            return (
                <>
                <li class="list-group-item">کد مدرسه : {this.state.values.values.school}</li>
                <li class="list-group-item">شماره موبایل : {this.state.values.values.phone}</li>
                <li class="list-group-item">آدرس : {user.address.street}</li>
                <li class="list-group-item">کدپستی : {user.address.zipcode}</li>
                </>
                )
                })}
                </ul>
                
                <br /><br />
                
                <div className="row">
                    <div className="col-6 text-left">
                        <button className="btn btn-danger text-left" onClick={this.back}>ویرایش/بازگشت</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.continue}>تایید</button>
                    </div>
                </div>
            </div>
            )
        }
}

export default Confirm