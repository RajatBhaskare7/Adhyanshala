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
const module3 = () => {
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
                      <h2 className="text-white mb-0">ipv6</h2>
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
                      <h2 className="mb-0">IPv6</h2>
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
IPv6 address types
                  </Button>
                
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		  <Container id="tdp" className="p-5">
				<h1>Compare IPv6 address types</h1>
<p>There are several different types of IPv6 addresses</p>
<strong>Global Unicast</strong>
<ul>
<li>Similar to IPv4 public addresses</li>
<li>Range - 2000::/3</li>
<li>Internet routable</li>
</ul>
<strong>Unique Local</strong>
<ul>
<li>Similar to IPv4 private addresses</li>
<li>Range - FC00::/7 (FC00::/8 & FDOO::/8)</li>
<li>Not internet routable</li>
</ul>
<strong>Link Local</strong>
<ul>
<li>Not routable and meant for local VLAN only</li>
<li>Self-generated</li>
<li>Range - FE80::/10</li>
</ul>
<strong>Anycast</strong>
<ul>
<li>An IPv6 address that is assigned to multiple nodes</li>
<li>Used to provide redundancy and optimized traffic flows</li>
</ul>
<strong>Multicast</strong>
<ul>
<li>Similar to IPv4 multicast addresses</li>
<li>Range - FF00::/8</li>
<li>Used to send traffic to multiple hosts at the same time</li>
</ul>

<strong>Modified EUI 64</strong>
<ul>
<li>A method used to automatically generate an IPv6 host addresses</li>
<li>How it works</li>
</ul>
		</Container>
        </Container>
    </>
  );
};

export default module3;
