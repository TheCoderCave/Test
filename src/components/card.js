import { Col, Row } from "react-bootstrap"
const Card =({data1})=>{
    return(
        <Row className="justify-content-center">
   <Col sm="8" >
    <div className="rectangle p-3 all">
{data1.length?(data1.map((e)=>{
    return(
    <div className="d-flex border-bottom my-3 mx-2 shadow">
    <img alt="image" src={e.image} className="image "/>
    <div className=" mx-2">
    <p className=" d-inline">{e.name}</p>
    <p>الساعه {e.time}</p>
    </div>
    </div>
   )
   })):<h1 className=" text-center my-3">لا يوجد مواعيد</h1>}
   </div>
    </Col>
    </Row>
    )
}
   export default Card