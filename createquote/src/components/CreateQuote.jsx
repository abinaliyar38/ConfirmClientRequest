import Axios from 'axios';
import React, { useState } from 'react'
import './CreateQuote.css'
function CreateQuote(props) 
{
 
const[form,setForm]=useState(
    {AircraftType:'Jet',Price:0.00,ProviderNotes:'',NoStops:0,AddPassenger:0,traveldate:'',DurationHour:'',DurationMin:'',MedicalCrew:'',GroundTransport:false}
    );
 
 const handleFormSubmit=(e)=>
 {
    e.preventDefault(); 
    let inputParams=[];
    let reqId={'requestId':props.requestId};
    console.log('Form Submit' + JSON.stringify(form));
    inputParams.push(form);
    inputParams=[...inputParams,reqId ];
    console.log('Final Data:' + JSON.stringify(inputParams));
    //let final=[...form,45];
    //console.log('final:' + final);
    const POST_URL='https://crmapay-developer-edition.na213.force.com/InteractPay/services/apexrest/MedviationAuthorization?methodType=POST&inputParams=' + JSON.stringify(inputParams);
   console.log('URL:' + POST_URL);
    // Axios.post(POST_URL).then(res=>console.log('Posting Data:'+res)).catch(err=>console.log('Error:' + err));
 }
 const onChange=(e)=>{
    
    
     const {value,name,type,checked}=e.target;
     setForm((state) =>({...state,[name]:type==='checkbox' ? checked :value}));
     
     //console.log('Final Data:' + JSON.stringify(inputParams));
 }

  return (
    <div className="CreateQuote">
    <form onSubmit={handleFormSubmit}>
    <label> 
        Price
        <input type="number" name="Price" onChange={onChange} value={form.Price} min="0"  />
           
    </label>
    <label >Travel Date :

        <input type="datetime-local" name="traveldate" onChange={onChange} value={form.traveldate} />
       
    </label>
    <label> Duration Hour
        
        <select name="DurationHour" onChange={onChange} value={form.DurationHour}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
        </select>
    </label>
    <br/>
    <label> Duration Min
        
       <input type="text" name="durationmin" onChange={onChange} value={form.DurationMin} min="0" ></input>
    </label>
    
    <label> No of Stops
        <br/>
        <input type="radio" name="NoStops" value="1" onChange={onChange} />&nbsp;1 Stops &nbsp;&nbsp;
        <input type="radio" name="NoStops" value="2" onChange={onChange} />&nbsp;2 Stops&nbsp;&nbsp;
        <input type="radio" name="NoStops" value="3" onChange={onChange} />&nbsp;3+ Stops&nbsp;&nbsp;
        
    </label>
    <br/><br/>
    <label> Aircraft Type
        <br/>
        <div>
          <input type="radio" name="AircraftType" value="Jet" onChange={onChange} />Jet &nbsp;&nbsp;
          <input type="radio" name="AircraftType" value="Turbo Prop" onChange={onChange} />Turbo&nbsp;&nbsp;
          <input type="radio" name="AircraftType" value="Rotor" onChange={onChange} />Prop
        </div>
        
    </label>
    
    
   
    <br/>
    <label> Additional Passenger
        <br/>
          <input type="radio" name="AddPassenger" value="0" onChange={onChange} />&nbsp;No Additional Passengers &nbsp;&nbsp;
          <input type="radio" name="AddPassenger" value="1" onChange={onChange} />&nbsp;1 Additional Passenger&nbsp;&nbsp;
        
    </label>
  <br/><br/>
   
   <label> Ground Transport
        <input  type="checkbox" name="GroundTransport" onChange={onChange} value={form.GroundTransport}></input>
    </label>
    <br></br>
    <label> Medical Staff
    <div>
          <input type="radio" name="MedicalCrew" value="RN & RN" onChange={onChange} />&nbsp;RN & RN &nbsp;
          <input type="radio" name="MedicalCrew" value="RN & RT" onChange={onChange} />&nbsp;RN & RT&nbsp;
          <input type="radio" name="MedicalCrew" value="RN & Physician" onChange={onChange} />&nbsp;RN & Physician&nbsp;
          <input type="radio" name="MedicalCrew" value="RN & Paramedic" onChange={onChange} />&nbsp;RN & Paramedic&nbsp;
        </div>
    </label>
    <br/>
    <label> Provider Notes
        <textarea name="ProviderNotes" onChange={onChange} value={form.ProviderNotes}></textarea>
    </label>
    <br></br>
    <div>
    <button className="CreateQuoteButton">Create Quote</button>
    </div>
   
    </form>
    </div>
  )
}

export default CreateQuote