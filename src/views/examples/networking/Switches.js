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
                      <h2 className="text-white mb-0">Switches</h2>
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
                      <h2 className="mb-0">Switches</h2>
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
			<h1>Switches</h1>
			<Row id="tdp" className="p-5">
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
