import React from 'react'
import { useState } from 'react';
import "./Agecalc.css";
import { Row ,Col, Button, Card, InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Agecalculator() {
    const [dateofbirth, setDateofbirth] = useState('');
    const [result, setResult] = useState('');
   const calculate=(birthdate)=>{  
    const currentdt= new Date()
    const dob=new Date(birthdate)
    const day=Math.abs( currentdt.getDate()-dob.getDate());
    const month=Math.abs(currentdt.getMonth()-dob.getMonth());
    const year=Math.abs(currentdt.getFullYear()-dob.getFullYear());
   
    return {year,month,day};
}
const handleButtonClick=()=>{
    const {year,month,day}=calculate(dateofbirth);
    setResult(`Age:${year}Years ,${month} Months,${day}Days`);
}


  return (

    <div className='agebackground'>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
        <div>
      <Card className="text-center" >
       <Card.Body >
        
        <Card.Title>Age Calculator</Card.Title>
        <div className='agecalc_input'>
          
   <input type='date'value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}/>
   </div>
   <div className='age_result'>
  <p class="title"> {result}</p>
  </div>
  <div className='agecalc_button'>
  <Button onClick={handleButtonClick}>Calculate Age</Button>
  </div>
  </Card.Body>
  </Card>
  <div className='agecalc_return'>
  <Link to="/work"><Button variant='info' >Return</Button></Link>
  </div>
</div>
       
       
       
       
        </Col>
        <Col md={4}></Col>
        </Row>
    </div>
   
  )
}

export default Agecalculator
