import React, { Component } from 'react';

let name = "Adam";
let city = "London";

export default class extends Component {

  message = () => `Hello ${name} from ${city}`;

  render = () =>
    <h4 className="bg-primary text-white text-center p-3">
      { this.message() }
    </h4>
};

