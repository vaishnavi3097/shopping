
import React, { Component } from 'react';
import Itemcards from './components/itemCards';
import {Card,Button} from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {getItemListsWithAxios ,getItemWithAxios} from './utils/services';
import Details from'./Details';
const {Img,Body,Title}=Card 

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      post:[],
      isItemSelect:false,
      itemData:{},
      search: ""
    }
    this.fetchApiWithAxios = this.fetchApiWithAxios.bind(this);
    this.onButton=this.onButton.bind(this);
    this.back=this.back.bind(this);
  }
  
  fetchApiWithAxios(){
    getItemListsWithAxios()
    .then((response) => {
      this.setState({
        items: response.data
      })
    }).catch((error) => {
      alert(`Error :- ${error}`)
      this.setState({
        items: []
      })
    })
  }

  onButton(id){
    getItemWithAxios(id)
    .then((response) => {
      this.setState({
        ...this.state,
        data:response.data,
        isItemSelect:true
      })
    }).catch((error) => {
      alert(`Error :- ${error}`)
      this.setState({
       ...this.state
      })
    })
  }
  
  back(){
    this.setState({
      items:this.state.items,
      isItemSelect:false,
      itemData:{}
    })
  }

  componentDidMount(){
    this.fetchApiWithAxios()
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };
  renderCountry = item => {
    const { search } = this.state;
    var id = item.title.toLowerCase();
    return (
      <Card style={{width:"25%"}}>
      <Img src={item.thumbnailUrl}/>
   <Body>
        <p>{item.id}</p>
        <Title>{item.title}</Title>
        <p>Price : Rs. {Math.floor(Math.random()*1000)}</p>
        <button  class="btn btn-outline-dark" onClick={()=>{this.onButton(id)}}> view</button> 
   </Body>
      </Card>        
    )}

  render(){
   
    const { search ,items} = this.state;
    const filtereditems = items.filter(item => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) === -1;
    });

    return (
   
      this.state.isItemSelect?
      
      <div className="App">
         <Details data={this.state.data} back={this.back}/>
      </div> 
       :
       
     <div className="App">
       <input type="search" onChange={this.onchange} /> 
       <div className="row">
              {filtereditems.map(item => {
                return this.renderCountry(item);
              })}
            </div>       
             {    
          this.state.items.map((singleItem,index) => {
            return <Itemcards {...singleItem} onSelect={this.onButton} key={index}/>
          })
        }
   </div>
    
   
  
    )
   }
 }

