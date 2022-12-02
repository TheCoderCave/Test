import React from 'react'
import { Col, Row } from "react-bootstrap"
const Time = ({val}) => {
  return (
    <Row className="justify-content-center font my-2">
    <Col sm="8" >
  لديك {val.length} مواعيد
    </Col>
   </Row>
  )
}

export default Time