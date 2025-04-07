import React, { useContext, useEffect, useState } from 'react'
import STYLING from './home.module.css'
import axios from 'axios'
import { FaPencilAlt } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { ContextYasta } from '../../Context/Test_data'

interface Address {
  address: string
}

interface User {
  id: number
  firstName: string
  email: string
  phone: string
  address: Address
  birthDate: string
}

const Home: React.FC = () => {
  const [api, setApi] = useState<User[]>([])
  const [show, setShow] = useState(false)
  const [data, setdata] = useState<number>(0)
  const [wahme, setwahme] = useState<string>('')
  let { searchdata } = useContext<any>(ContextYasta)

  const handleClose = () => setShow(false)
  const handleShow = (user: User) => {
    setShow(true)
    setdata(user.id)
    setwahme(user.firstName)
  }

  const funDEL = async () => {
    try {
      await axios.delete(`https://dummyjson.com/users/${data}`)
      toast.warning("Deleted successfully!", {
        theme: "dark",
        position: "top-right", 
        autoClose: 3000,
      })
    } catch {
      console.error('Delete error')
    }
  }
  let funfilter_search = (user: User) => {
    return user.firstName.toLowerCase().includes(searchdata || '')
  }

  const FUN = async () => {
    const GET = await axios.get('https://dummyjson.com/users')
    setApi(GET.data.users)
  }

  useEffect(() => { FUN() }, [])

  const navigate = useNavigate()
  const funUPDATE = (user: User) => navigate('/dashboard/users', { state: { user } })

  return (
    <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete {wahme}?</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => { handleClose(); funDEL() }}>
            Certainly
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Retract
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={STYLING.tableContainer}>
        <Table responsive="md" className="table">
          <thead className="thead-dark">
            <tr>
              <th>id</th><th>Name</th><th>Email</th>
              <th>Phone</th><th>Address</th><th>Date of Admission</th>
              <th></th><th></th>
            </tr>
          </thead>
          <tbody>
            {api.filter(funfilter_search).map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.email.slice(0, 5)}gmail.com</td>
                <td>{user.phone}</td>
                <td>{user.address.address}</td>
                <td>{user.birthDate}</td>
                <td>
                  <button onClick={() => handleShow(user)} className={STYLING.delete}>
                    <AiOutlineDelete/>
                  </button>
                </td>
                <td>
                  <button onClick={() => funUPDATE(user)} className={STYLING.Update}>
                    <FaPencilAlt/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={STYLING.cardsContainer}>
        {api.map((user, i) => (
          <div key={i} className={STYLING.userCard}>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Customer id:</span>
              <span className={STYLING.value}>{i + 1}</span>
            </div>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Name</span>
              <span className={STYLING.value}>{user.firstName}</span>
            </div>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Email</span>
              <span className={STYLING.value}>{user.email.slice(0, 5)}gmail.com</span>
            </div>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Phone</span>
              <span className={STYLING.value}>{user.phone}</span>
            </div>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Address</span>
              <span className={STYLING.value}>{user.address.address}</span>
            </div>
            <div className={STYLING.field}>
              <span className={STYLING.label}>Date of Admission</span>
              <span className={STYLING.value}>{user.birthDate}</span>
            </div>
            <div className={STYLING.actions}>
              <button onClick={() => handleShow(user)} className={STYLING.delete}>
                <AiOutlineDelete/>
              </button>
              <button onClick={() => funUPDATE(user)} className={STYLING.Update}>
                <FaPencilAlt/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
