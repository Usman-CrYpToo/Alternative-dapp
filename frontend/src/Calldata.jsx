import React from 'react'
import { useState,useEffect } from 'react';
import { ethers } from 'ethers';
const Calldata = ({contract}) => {
   const [calls, setCalls] = useState({
     se : [],
     re : []
   })
    async function Call() {
        const getData = await contract.callData();
         setCalls({
           se : getData.se,
           re : getData.re,
         })
       
       console.log("sended :: ",typeof calls.se[1].timestamp._hex,"\n");
       console.log("recieved :: ",calls.re);
      
    }
    useEffect(() => {
    const set = setInterval(()=>{
        contract && Call();
    },5000);
     return() =>{
       clearInterval(set);
     }

    },[contract])
  return (
    <div>
    <div>
    
       
     {
       
       (calls.se).map((send,ind)=>{
         return(
          <table class="table container text-cente table-success">
          <thead>
            <tr>
              <th scope="col">Sended</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Name</th>
              <th scope="col">Message</th>
              <th scope="col-4">Address</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>

          
          <tbody>
            <tr>
              <th scope="row">{ind + 1}</th>
              <td>{new Date(send.timestamp * 1000).toLocaleString()}</td>
              <td>{send.name}</td>
              <td>{send.messege}</td>
              <td>{send.receiver}</td>
              <td>{ethers.utils.formatEther(String(send.ammount))} Eth</td>
            </tr>
          
          </tbody>
        </table>
         )
       })
     }
     
  
    </div>
      
    <div>
    
       
    {
      
      (calls.re).map((receive,ind)=>{
        return(
          
         <table class="table container text-cente table-secondary border border-secondary">
         <thead>
           <tr>
             <th scope="col">Received</th>
             <th scope="col">Timestamp</th>
             <th scope="col">Name</th>
             <th scope="col">Message</th>
             <th scope="col-4">Address</th>
             <th scope="col">Amount</th>
           </tr>
         </thead>

         
         <tbody>
           <tr>
             <th scope="row">{ind + 1}</th>
             <td>{new Date(receive.timestamp * 1000).toLocaleString()}</td>
             <td>{receive.name}</td>
             <td>{receive.messege}</td>
             <td>{receive.receiver}</td>
             <td>{ethers.utils.formatEther(String(receive.ammount))} Eth</td>
           </tr>
         
         </tbody>
       </table>

        )
      })
    }
    
   </div>

    </div>
  )
}

export default Calldata