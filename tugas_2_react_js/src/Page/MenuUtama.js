import React, { Component } from 'react';
import ListMenuUtama from "../ListData/ListMenuUtama";

class Menuu extends Component {
  render(){
    return(
      <ListMenuUtama sumber = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
    );
  };
};

export default Menuu;