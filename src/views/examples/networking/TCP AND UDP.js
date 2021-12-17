import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import "assets/css/networking.css";
const networking2 = () => {
	
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
                      <h2 className="text-white mb-0">TCP AND UDP</h2>
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
                      <h2 className="mb-0">TCP AND UDP</h2>
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
TCP vs UDP
                  </Button>
                
                </CardBody>
              </Card>
            </Col>
          </Row>
			<hr/>
		  <Container>
			<h1 id="tdp">Compare TCP to UDP</h1>
			<Row   className="p-5">
				<Col className=" text-center tcp-main">
					<ul type="square" className="tcp-elements">
						<li >Stateful</li>
						<li>Reliable</li>
						<li>Used with Http/Https</li>
						<li>Three-Way-Handshake</li>
					</ul>
					<h1 className="tcp-label ">TCP</h1>
					
				</Col>
				<Col className=" text-center tcp-main">
					<ul type="square" className="tcp-elements">
						<li >Stateless</li>
						<li>Unreliable</li>
						<li>Used in DNS and DHCP</li>
						<li>Faster than TCP</li>
					</ul>
					<h1 className="udp-label">UDP</h1>
					
				</Col>
			</Row>
			
				<Col >
				<h2>Protocols that use TCP</h2>
				<ul>
					<li>SSH</li>
					<li>TELNET</li>
					<li>HTTP(S)</li>
					<li>SMTP</li>
				</ul>
				</Col>
				<Col >
			<h2>Protocols that use UDP</h2>
				<ul>
					<li>SNMP</li>
					<li>VOIP</li>
					<li>TFTP</li>
					
				</ul>
				</Col>
			
		</Container>
        </Container>
		
    </>
  );
};

export default networking2;