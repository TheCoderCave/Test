import React from 'react'
import { Col, Row } from "react-bootstrap"
const Actions = ({onde,onre}) => {
  return (
    <Row className="justify-content-center my-3">
    <Col sm="8" className="d-flex justify-content-between" >
    <button onClick={()=>onde()} className="btn-style p-2">مسح الكل</button>
    <button onClick={()=>onre()} className="btn-style p-2">عرض الكل</button>
    </Col>
    </Row>
  )
}

export default Actions
