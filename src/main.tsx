import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';




import './index.css'
import App from './App.tsx'
import { ContextYastaProviding } from './Context/Test_data.tsx';
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ContextYastaProviding>
      <App />
      </ContextYastaProviding>
   
  </StrictMode>
    
  
  
 
)
