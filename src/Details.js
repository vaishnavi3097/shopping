import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 export default class Details extends Component {

  constructor(props) {
     super(props);
   }

render() {
    const{title,url,thumbnailUrl}=this.props.data;
       return(
           <Container>
           <h1>{title}</h1>
           <p>{thumbnailUrl}</p>
           <img src={url} width={600}height={600}/>
           <button class="btn btn-outline-dark" onClick={this.props.back}>back</button>
           </Container>
       )
       }
}
