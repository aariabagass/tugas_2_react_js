import React, { Component } from 'react';
import Listm from "../ListData/ListMakanan.js"

class Menum extends Component {
  render () {
    return (
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan : </h3>
      <td>
        <Listm sumber = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
      </td>
      <td>
        <Listm sumber = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
      </td>
      <td>
        <Listm sumber = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
      </td>
      <td>
        <Listm sumber = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
      </td>
      <td>
        <Listm sumber = "https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
      </td>
      </div>
    );
  }
}

export default Menum;