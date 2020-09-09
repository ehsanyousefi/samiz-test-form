import React, { Component } from 'react'

export class Success extends Component {
    
    exit = e => {
        e.preventDefault()
        this.props.exit()
    }

    render() {
        return (
            <div>
                <h1 className="text-black text-center">سامانه مورد نظر با موفقیت ثبت شد</h1>
                <div className="row">
                    <div className="col-6 m-5">
                        <button className="btn btn-danger" onClick={this.exit}>خروج</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success
