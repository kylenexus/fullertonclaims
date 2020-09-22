import React, { Component } from 'react'
import ImageViewer from './ImageViewer'
import DataViewer from './DataViewer'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      customer: [
        {
          id: 1,
          firstname: "Frank",
          middlename: "Lusabio",
          lastname: "Arevalo"
        },
        {
          id: 2,
          firstname: "Jeffrey",
          middlename: "Duarte",
          lastname: "Pucaputan"
        },
        {
          id: 3,
          firstname: "Miki",
          middlename: "Longakit",
          lastname: "Terada"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <ImageViewer />
        <DataViewer />
      </div>
    )
  }
}
