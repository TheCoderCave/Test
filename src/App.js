import React ,{useState} from "react"
import { Container } from "react-bootstrap"
import Actions from "./actions"
import Card from "./components/card"
import data from "./components/data"
import Time from "./time"
const App = () => {
  const [val,Setval] = useState(data);
 const onde =()=>{
    Setval([]);
  }
  const onre=()=>{
    Setval(data);
   }
  return(
    <div className="color-body">
    <Container className="py-5">
  <Time val = {val}/>
   
   <Card data1= {val}/>  
  
   <Actions onde={onde} onre={onre}/>
    </Container>
</div>
  )
}
export default App