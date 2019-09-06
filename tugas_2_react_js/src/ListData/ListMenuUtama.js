import React, { Component } from 'react';

class Listmu extends Component{
  render(){
    return(
      <div>
        <h1>
         <center>Selamat Datang Di Warung Nusantara</center>
        </h1>
        <center>
          <img src={this.props.sumber} alt="Masakan Nusantara" width="600" />
        </center>
      </div>
    );
  };
};
export default Listmu;