import React, { Component } from 'react';
import FormSetup from './FormSetup';
import FormReview from './FormReview';
import Success from './Success';
import Main from './Main';

export class Form extends Component {
    state = {
        step: 1,
        school: '',
        phone: '',
        exit: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    exit = () => {
        this.setState({ step: 1 });
    }

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step, exit } = this.state;
        const { school, phone } = this.state;
        const values = { school, phone };

        switch (step || exit) {
            case 1:
                return (
                    <Main
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormSetup
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormReview
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success
                        exit={this.exit}
                    />
                );
        }
    }
}

export default Form
