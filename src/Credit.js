import React, { Component } from 'react'
import './App.css';
export default class Credit extends Component {

    state={
        inputV:'',
        inputD:'',
        inputN:'',
      
    }
    handleChange=(event)=>{
        this.setState({
          inputV:event.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g,"$1 ").trim()
        })
      }
      handleChangeD=(event)=>{
        event.target.value= event.target.value.length>=3?
   event.target.value.replace(/[^0-9]/g, "").slice(0, 2)+"/"+event.target.value.replace(/[^0-9]/g, "").slice(2,4)
       :event.target.value.replace(/[^0-9]/g, "")
       
       this.setState({inputD:event.target.value})
        }
      handleChangeN=(event)=>{
        let value = event.target.value
        this.setState({inputN:value.toString().replace(/[^a-z]/g, "")})
      }
      
      
     
      

    render() {
        return (
           < div className="credit-card">
            <div className="credit"> 
            
              <h2 className="company">Company Name</h2>
              <img src="https://img.icons8.com/office/40/000000/sim-card-chip.png"></img>
              <div className="cordone">
              <div className="text">
               <h2 className="number" >
                {this.state.inputV}</h2>
               <h3 className="date">{this.state.inputD} </h3>
               <h3>{this.state.inputN.toUpperCase()}</h3>
               </div >
               <div className="image"> 
               <img alt="Mastercard" src="https://www.agencenamibie.com/wp-content/uploads/2019/03/Mastercard-change-son-logo-1288x724.png"></img>
              </div> 
              </div>
              </div>
              <div className='input'>
              <input type="text"
                     className="enter"
                     placeholder="Enter Number"
                     onChange={(event)=>this.handleChange(event)}
                     value={this.state.inputV}
                     maxLength="19"/>
                     <br/>
                     <input type="text"
                     className="enter" 
                     placeholder="Enter your Name"
                     onChange={(event)=>this.handleChangeN(event)}
                     value={this.state.inputN}/> 
                     <br/>
                     <input type="text"
                     className="enter" 
                     placeholder="MM / YY"
                     onChange={(event)=>this.handleChangeD(event)}
                     value={this.state.inputD}
                     />
              </div>::
            </div>
        )
    }
}
