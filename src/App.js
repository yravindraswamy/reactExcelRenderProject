import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      rows:[],
      cols:[]
    }
  }
  // state = {
  //   cols:[],
  //   rows:[]
  // }
  
  

  onfileHander = (event) =>{
    const fileObj = event.target.files[0];
    let cols;
    let rows;
    console.log(fileObj)
    
  }
  onsubmitEvent = (event) =>{
    event.preventDefault();
  }
  render(){
    return (<div className="logikal-form">
      <div>
        <form onSubmit={this.onsubmitEvent.bind(this)}>
          <h1>Please Place your excel file here</h1>
          <label>Drop your file here</label>
          <br/>
          <input type="file" onChange={this.onfileHander.bind(this)}/>
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
        <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
      </div>

    </div>
    )
  }
  

}

export default App;
