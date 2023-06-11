import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Text,Input,Button} from "@chakra-ui/react";
import styles from "./Home.module.css";
import Layout from '../components/Layout';
import { Get_Matrix,Update_Matrix } from '../Redux/action';

const User = () => {

 const [no_of_seats,setNumber]=useState(0);
// Defining the no_of_seats as a state which user going to enter ;
 const {booked}=useSelector(store=>store);
// Taking booked value from store (redux store);
 const dispatch=useDispatch();
// To dispatch the action object to reducer to change the global state in store;

// To set the value to no_of_seats entered by user handleChange function is used 
 const handleChange=(e)=>{
    setNumber(Number(e.target.value))
 }
 // This is to call Update_Matrix and performing patch api call to update in backend and then again calling get request to update the same on the UI,
 const handleSubmit=()=>{
    dispatch(Update_Matrix({no_of_seats})).then((r)=>{
        dispatch(Get_Matrix);
    });
    
 }

 
  return (
    <div className={styles.parent}>
        <div>
            <Text fontSize={"xl"}>User</Text>
        </div>
        <div>
            <Input type="number" onChange={handleChange} placeholder="Enter number of seats to be booked"></Input>
        </div>
        <div>
             <Button _hover={{bg:"blue"}} onClick={handleSubmit}>Submit</Button>
        </div>
        <div>
            <Text fontSize={"2xl"}>Coach Layout</Text>
        </div>
        {/* Color Indicators */}
        <div className={styles.ind}>
            <ul style={{color:"red"}}>
               <li><Text>Red Indicates Booked seats</Text></li> 
            </ul>
            
            <ul style={{color:"green"}}>
                <li><Text>Green Indicates Available seats to Book</Text></li>
            </ul>
            <ul style={{color:"blue"}}>
                <li><Text>Blue Indicates Currently Booked seats</Text></li>
            </ul>   
            <ul >
                <li><Text>No of seats left :- {80-booked}</Text></li>
            </ul> 
        </div>

        <div>
            <Layout/>
        </div>
    </div>
  )
}

export default User