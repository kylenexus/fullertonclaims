import React, { Component } from 'react';
import CustomerData from './CustomerData';

export default class DataViewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers : CustomerData
        };
    }

    handleSubmit = () => {
        console.log("clicked submit");
    }

    handleEdit = () => {
        console.log("clicked edit");
        // this.setState({
        //     firstname: "Juan",
        //     middlename: "Dela",
        //     lastname: "Cruz"
        // });
    }

    render() {
        // const customer = {
        //     firstname: "Jeffrey",
        //     middlename: "Duarte",
        //     lastname: "Pucaputan"
        // };

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>firstname</td>
                            <td>lastname</td>
                            <td>middlename</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{this.state.customers[1].firstname}</td>
                            <td>{this.state.customers[1].middlename}</td>
                            <td>{this.state.customers[1].lastname}</td>
                        </tr> */}
                        {this.state.customers.map(
                            (item)=>(
                                <tr key={item.id}>
                                    <td>{item.firstname}</td>
                                    <td>{item.middlename}</td>
                                    <td>{item.lastname}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <button type="button" onClick={this.handleSubmit}> 
                    submit
                </button>
                <button type="button" onClick={this.handleEdit}>
                    edit
                </button>

            </div>
        )
    }
}
