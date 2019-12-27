import React, { Component } from 'react';
import { MDBCol } from "mdbreact";

export default class SearchBar extends Component {
  render() {
    return (
<MDBCol md="6">
      <div className="active-black-3 active-black-4 mb-4">
        <input className="form-control" type="text" placeholder="Search a Pokemon" aria-label="Search" />
      </div>
    </MDBCol>
  );

    
  }
}
