import React, { useEffect, useState } from 'react'
import STYLING from '../Home/home.module.css'
import axios from 'axios'
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
let [api,setApi]=useState([])
const [show, setShow] = useState(false);
let [data,setdata]=useState()
let [wahme,setwahme]=useState()
const handleClose = () =>
  {
    setShow(false);
   
    
  } 
const handleShow = (user) => {
  setShow(true)
  setdata(user.id)
  console.log(user.id)
  setwahme(user.firstName)
  
}

let funDEL=async()=>{
 try {
  let res= await axios.delete(`https://dummyjson.com/users/${data}`)
  console.log(`this element id deleted,${data}`)

  toast.warning("Deleted successfully!", {
    theme: "dark",
    position: "top-right", 
    autoClose: 3000,
  })
 } catch (error) {
  console.error('No No No ')
 }

}
















let FUN= async()=>{
  let GET=await axios.get('https://dummyjson.com/users')
  setApi(GET.data.users)
  console.log(GET.data.users)
}

 useEffect(() => {
 try {
  FUN()
 } catch (error) {
  console.error('عذراً لم يحضُر العو  ')
 }
 }, [])
 

let navi=useNavigate()
let funUPDATE=(user:any)=>{
  navi('/dashboard/users',{state:{user}})

}



  return (
    <div>
              <ToastContainer />


      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>Are you sure you want to delete {wahme} </Modal.Body>


        <Modal.Footer>
        <Button variant="warning " onClick={() => { handleClose(); funDEL(); }}>
        Certainly
          </Button>
          <Button variant="secondary" onClick={handleClose}>
          retract
          </Button>
        
        </Modal.Footer>
      </Modal>

  <table className="table ">
  <thead className="thead-dark ">
    <tr className=''>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col ">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Date of Admission</th>
    </tr>
  </thead>
  <tbody>
  {api.map(function (user,index) {
  return (
    <tr key={index}>
      <th scope="row">{index +1}</th>
      <td>{user.firstName}</td>
      <td>{user.email.slice(0,5)+ "gmail.com"}</td>
      <td>{user.phone}</td>
      <td>{user.address.address}</td>
      
      <td>{user.birthDate}</td>
      <td>
        <button onClick={()=> handleShow(user) } className={`${STYLING.delete}`} ><AiOutlineDelete />  </button>
      
      </td>
      <td>
        <button className={`${STYLING.Update}`} onClick={()=>{funUPDATE(user)}} ><FaPencilAlt /></button>
        
      </td>
    </tr>
  );
})}

   
  
  </tbody>
</table>


    </div>
  )
}

export default Home