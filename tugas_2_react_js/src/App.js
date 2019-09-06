import React, { Component } from 'react';
import Menuu from "./Page/MenuUtama.js"
import Menum from "./Page/MenuMakanan.js"
import Menuk from "./Page/MenuKontak.js"
import Menut from "./Page/MenuTentangKami.js"
import Header from "./Page/Header.js"
import Footer from "./Page/Footer.js"

class App extends Component {
  render () {
    return (
      <div>
      <Header/>
      <Menuu/>
      <Menum/>
      <Menut/>
      <Menuk/>
      <Footer/>
      </div>
    );
  }
}

export default App;
