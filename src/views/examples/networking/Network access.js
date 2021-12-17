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
                      <h2 className="text-white mb-0">Network access</h2>
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
                      <h2 className="mb-0">Network access</h2>
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
CDP AND LLDP
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp2"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
LACP
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp3"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
More on Trunk Port
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp4"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
More on Wireless
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp5"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
STP
                  </Button>
				  
				
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
		   <hr/>
		<Container>
			<h1 id="tdp">CDP AND LLDP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp2">LACP</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp3">More on Trunkport</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp4">More on Wireless</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp5">STP</h1>
			<Container  className="p-5">
				<Col>
				<h2>Introduction</h2>
					<div className="p-3 video-player">
						<Plyr  source={Videosrc} />
					</div>
					<br/>
				<h2 className="mt-5">Rapid</h2>
				<div className="video-player">
						<Plyr  source={Videosrc} />
					</div>
				</Col>
			</Container>
		</Container>
        </Container>
    </>
  );
};

export default module3;
