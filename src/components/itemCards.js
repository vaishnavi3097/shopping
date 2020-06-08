import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,Button} from 'react-bootstrap'
const {Img,Body,Title}=Card 

  export default class Itemcards extends Component {
    constructor(props){
      super(props);
      }

    render(){
    return(
         <Card style={{width:"25%"}}>
           <Img src={this.props.thumbnailUrl}/>
        <Body>
             <p>{this.props.id}</p>
             <Title>{this.props.title}</Title>
            <p>Price : Rs. {Math.floor(Math.random()*1000)}</p> 
             <Button  class="btn btn-outline-dark" onClick={()=>{this.props.onSelect(this.props.id)}}> view</Button> 
        </Body>
           </Card>        
    )
        }
      }
  