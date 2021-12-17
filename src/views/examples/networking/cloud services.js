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
                      <h2 className="text-white mb-0">cloud services</h2>
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
                      <h2 className="mb-0">cloud services</h2>
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
module
                  </Button>
                 
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		  <Container id="tdp" className="p-1">
				<h1 className="heading">Cloud Services</h1>
				<Row className="pl-3">
<b className="sub-heading">Cloud service offerings</b>

<ul className="pl-5">

<li>Platform as a Service (PAAS) - Run your own applications
and services on cloud hosted devices</li>

<li>Software as a Service (SAAS) - Run applications spun up by
the cloud provider: Salesforce, Dropbox, Google Apps</li>
<li>Infrastructure as a Service (IAAS) - Setup your own VM
environment in the cloud</li>
</ul>
			</Row>
		</Container>
        </Container>
    </>
  );
};

export default vlan;
