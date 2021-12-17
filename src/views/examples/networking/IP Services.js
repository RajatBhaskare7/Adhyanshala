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
import Plyr from 'plyr-react';
import "assets/css/networking.css";
import 'plyr-react/dist/plyr.css';
const module3 = () => {
	const Videosrc={
		type:"video",
		sources:[
		{
			src:"VwN91x5i25g",
			provider:"youtube"
		}
		
		]
	};
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
                      <h2 className="text-white mb-0">IP services</h2>
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
                      <h2 className="mb-0">IP services</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
               
                  <Button outline
                    color="warning"
                    href="#tdp"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
					
                    size="sm"
                  >
DHCP
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp2"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
DNS
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp3"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
LOGGING
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp4"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
NAT
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp5"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
NTP
                  </Button><Button outline
                    color="warning"
                    href="#tdp6"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
QoS
                  </Button><Button outline
                    color="warning"
                    href="#tdp7"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
SNMP
                  </Button><Button outline
                    color="warning"
                    href="#tdp8"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
SSH
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp9"
                    className="d-block w-100 text-left my-1 mx-0 text-center"
                    size="sm"
                  >
TFTP/FTP
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		<Container>
			<h1 id="tdp">DHCP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp2">DNS</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp3">LOGGING</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp4">NAT</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp5">NTP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp6">QOS</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
					
				
			</Row>
			<a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conavd/configuration/xe-16/qos-conavd-xe-16-book/qos-conavd-wred-ecn.html#GUID-904A40DE-BFC4-4758-9452-BB97BDF0B9DF">
					https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conavd/configuration/xe-16/qos-conavd-xe-16-book/qos-conavd-wred-ecn.html#GUID-904A40DE-BFC4-4758-9452-BB97BDF0B9DF
					</a>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp7">SNMP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp8">SSH</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp9">TFTP/FTP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
        </Container>
    </>
  );
};

export default module3;
