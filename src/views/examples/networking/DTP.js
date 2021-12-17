import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
   Table
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import "assets/css/networking.css";
const vlan = () => {
  return (
    <>
	
      <Header />
      {/* Page content */}
	  <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">DTP</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody className="text-white" style={{  textAlign: "left" }}>
                  <div className="text-light">
                    <p></p>
                    <p><br/></p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Course
                      </h6>
                      <h2 className="mb-0">DTP</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
               
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
				  Module
                  </Button>
               
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		  <Container>
			<h1 className="heading">Dynamic Trunking Protocol (DTP)</h1>
			<Row className="p-2">
				<h2 className="sub-heading">Dynamic Trunking Protocol (DTP)</h2>
				<p className="pl-3">Trunk ports can be automatically negotiated with the dynamic trunking
protocol (DTP). Here are the configurable modes:</p>
	<ul className="pl-5"> 	
		<li><b>Dynamic Desirable</b></li>
		<ul>
			<li>Actively attempts to negotiate a trunk</li>
		</ul>
		<li><b>Dynamic Auto</b></li>
		<ul><li>Passively attempts to negotiate a trunk</li></ul>
		<li><b>Trunk</b></li>
		<ul><li>Always negotiates a trunk</li></ul>
		<li><b>Non-Negotiate</b></li>
		<ul><li>Never negotiates a trunk</li></ul>
	</ul>
</Row>
<strong>Mode Negotiation Compatibility</strong><br/>
<Row>
<Table responsive className="mt-3">
      <thead>
        <tr className="head">
          <th className="mode text-center">MODE</th>
          <th className="other-head"> Dynamic Auto</th>
          <th className="other-head">  Dynamic Desirable</th>
          <th className="other-head">Trunk</th>
          <th className="other-head">Access</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="other-head" scope="row">Dynamic Auto</th>
          <td className="cell">Access</td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
          <td className="cell">Access</td>

        </tr>
        <tr>
          <th className="other-head" scope="row">Dynamic Desirable</th>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
          <td className="cell">Access</td>
          
        </tr>
        <tr>
          <th className="other-head" scope="row">Trunk</th>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
          <td className="cell">Limited Connectivity</td>
        </tr>
		<tr>
          <th className="other-head" scope="row">Access</th>
          <td className="cell">Access</td>
          <td className="cell">Access</td>
          <td className="cell">Limited Connectivity</td>
          <td className="cell">Access</td>
        </tr>
      </tbody>
    </Table>
	</Row>
		</Container>
        </Container>
    </>
  );
};

export default vlan;
