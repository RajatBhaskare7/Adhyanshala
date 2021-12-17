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
import Plyr from 'plyr-react';
import "assets/css/networking.css";
import 'plyr-react/dist/plyr.css';
import laptop from './img/laptop.jpg';
import cpu from './img/cpu.jpg';
import hacker from './img/hacker.jpg';
import cross from './img/cross.jpg';
import root from './img/root.jpg';
import steal from './img/steal.jpg';
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
                      <h2 className="text-white mb-0">Security Fundamentals</h2>
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
                      <h2 className="mb-0">Security Fundamentals</h2>
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
AAA
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp2"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Access control list
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp3"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
DHCP Snooping
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp4"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
				  Dynamic ARP inspection
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp5"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Key security concepts
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp6"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Password best practices
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp7"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Port-security
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp8"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
VPN
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		<Container>
			<h1 id="tdp">AAA</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp2">Access control list</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp3">DHCP Snooping</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp4">Dynamic ARP Inspection</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp5">Key Security Concepts</h1>
			<Row  className="p-5">
				<div>
				<ul>
					<li><h1>Asset</h1></li>
					<p>A person place or a thing should be securely protected</p>
					<Row>
					<Col className="mb-3">
						<img src={laptop} alt="" />
					</Col>
					<Col>
						<img src={cpu} alt=""/>
					</Col>
					</Row>
					<li><h1>Threats</h1></li>
					<p>Malicious act that seeks to damage data ,steal data or disrupt digital property .CYBER attacks include threats like computer viruses ,data breaches and DOS</p>
					<Col className="d-flex align-items-center justify-content-center">
						<img src={hacker} alt="" />
					</Col>
					<li><h1>Vulnerability</h1></li>
					<p>An exploitable weakness which allows an attacker to reduce a systems information assurance </p>
					<Row>
						<Col className=" text-center">
							<h1 className="vulnerability">No software Patches</h1>
							<h1  className="vulnerability">Weak Passwords</h1>
							<h1  className="vulnerability">firewall disabled</h1>
						</Col>
						<Col>
							<img src={cpu} alt="" />
						</Col>
					</Row>
					<li><h1>Exploit</h1></li>
					<p>To use something (vulnerability) to ones own advantage</p>
					<Row>
					<Col>
						<h1 className="vulnerability">No software Patches</h1>
						<h1  className="vulnerability">Weak Passwords</h1>
						<h1  className="vulnerability">firewall disabled</h1>
					</Col>
					<Col>
						<img src={cpu} alt="" />
					</Col>
					<Col>
						<b>Attacker exploiting software vulnerability</b><br/>
						<img src={hacker} alt="" />
					</Col>
					</Row>
					<li><h1 className="mt-3">Mitigation technique</h1></li>
					<p>An action to counteract a threat and reduce risks</p>
					<Row>
					<Col>
						<h1 className="technique"> software Patches</h1>
						<h1  className="technique">Strong Passwords</h1>
						<h1  className="technique">firewall enabled</h1>
					</Col>
					<Col>
						<img src={cpu} alt="" />
						<img className="ml-5" src={cross} alt="" />
					</Col>
					<Col>
						<b>Attacker exploiting software vulnerability</b><br/>
						<img src={hacker} alt="" />
					</Col>
					</Row>
					<li><h1 className="mt-3">Reconnaissance Attack</h1></li>
					<p>Network scanning to discover potential vulnerabilities</p>
					<li><h1>IP and Port scanning 
</h1></li>
					<li><h1>DNS queries 
</h1></li>
					<li><h1>SNMP crawling</h1></li>
					<Row>
						<Col>
						<li><h1>DoS or DDoS attack</h1></li>
						<p>Overloading a network with traffic in an attempt to again access or to access havoc</p>
						<li><h1>ICMP flood</h1></li>
						<li><h1>SYN flood</h1></li>
						<li><h1>DNS amplification</h1></li>
						<li><h1>Social Engineering</h1></li>
						<p>Targets users to get them to  click on malicious links</p>
						</Col>
						<Col>
							<img src={root} alt="" />
						</Col>
					</Row>
					<li><h1>Phishing</h1></li>
						<p>Tricks people with fake emails that look legitimate</p>
						<div className="d-flex justify-content-center" >
							<img className="steal-image" src={steal} alt=""/>

								</div>
					<li><h1>Malware</h1></li>
					<p>Malicious software that is intended to cause damage on computing devices</p>
					<Table  responsive>
						 <thead>
        <tr className="head">
          <th className="mode text-center">BEHAVIOUR</th>
          <th className="other-head">virus</th>
          <th className="other-head">worm</th>
          <th className="other-head">Trojan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="other-head" scope="row">Hides inside other software</th>
          <td className="cell"></td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
        

        </tr>
        <tr>
          <th className="other-head" scope="row">Self-injection into other software</th>
          <td className="cell">
          	<div className="dot">
          	</div>
          </td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>
         
          
        </tr>
        <tr>
          <th className="other-head" scope="row">Automatically projected</th>
          <td className="cell"></td>
          <td className="cell">Trunk</td>
          <td className="cell">Trunk</td>    
        </tr>
	
      </tbody>
					</Table>
				</ul>
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp6">Password Best Practices</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp7">Port-security</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp8">VPN</h1>
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
