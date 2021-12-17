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
                      <h2 className="text-white mb-0">IP connectivity</h2>
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
                      <h2 className="mb-0">IP connectivity</h2>
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
Dynamic Routing
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp2"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Dynamic routing with OSOFv2
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp3"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
EIGRP overview
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp4"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
First Hop Redundancy Protocol
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp5"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
Interpret the routing table
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp6"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
IPv4 static routing
                  </Button>
                  <Button outline
                    color="warning"
                    href="#tdp7"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
IPv6 Static routing
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp8"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
OSPF default route advertistments
                  </Button>
				  <Button outline
                    color="warning"
                    href="#tdp9"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
routing forwarding decisions
                  </Button>
				  
                </CardBody>
              </Card>
            </Col>
          </Row>
		  <hr/>
		  <Container>
			<h1 id="tdp">Dynamic Routing</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp2">Dynamic routing with OSOFv2</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container >
			<h1 id="tdp3" >EIGRP overview</h1>
			<Row className="m-5">
				<p className="a-b-r-La">EIGRP Overview<br />EIGRP Overview<br />&middot; EIGRP is an advanced distance vector protocol that can be used to advertise routes between routers<br /><br />&middot; Default Administrative Distance - 90<br /><br />&middot; Algorithm= DUAL (Diffusing Update Algorithm)<br /><br />&middot; Metric values<br /><br />     -Bandwidth, Load, Delay, Reliability and MTU<br /><br />     -Default metric values are bandwidth and delay<br /><br />&middot; Composite metric formula<br /><br />     -K1&lowast;𝐵𝑎𝑛𝑑𝑤𝑖𝑑𝑡ℎ+ =(𝐾2&lowast;𝐵𝑎𝑛𝑑𝑤𝑖𝑑𝑡ℎ)/(256&minus;𝐿𝑜𝑎𝑑)+𝐾3&lowast;𝐷𝑒𝑙𝑎𝑦)&lowast;𝐾5/(𝐾4+𝑅𝑒𝑙𝑖𝑎𝑏𝑖𝑙𝑖𝑡𝑦)&lowast;256<br /><br />     -K value used as a multiplier for each metric value<br /><br />&middot; Feasible Distance<br /><br />     -Local metric to reach EIGRP route<br /><br />&middot; Reported Distance<br /><br />     -Metric advertised from adjacent EIGRP router<br /><br />&middot; Successor<br /><br />     -Next-hop with best feasible distance<br /><br />&middot; Feasible Successor<br /><br />     -Backup route<br /><br />     -Must meet feasible condition<br /><br />     -Feasible Condition = Adjacent router&rsquo;s RD is less than the local best path FD<br /><br /><br /><br />Neighbor Adjacency Requirements<br /><br />&middot; Same AS#<br /><br />&middot; Common subnet<br /><br />&middot; K values must match</p>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp4">First Hop Redundancy Protocol</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp5">Interpret the routing table</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp6">IPv4 static routing</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
				
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp7">IPv6 Static routing</h1>
			<Row  className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		<Container  >
			<h1 id="tdp8" >EIGRP overview</h1>
			<Row className="m-5">
				<p class="a-b-r-La" >OSPF Default Route Advertisements<br/>
OSPF Default-Information Originate<br/>
To advertise a default route into OSPF you can use the &quot;default-information originate&quot; command under the OSPF process:<br/>

!<br/>

router ospf 1<br/>

default-information originate<br/>

!<br/>

*This option will only advertise a default route if one exists in the local routing table. A static route could be used in that case. Which is most likely the case because you wouldn&apos;t want to advertise a default route if the local router did not have one.<br/>

------<br/>

In some cases you may want to advertise a default route even if the router does not have one locally. To accomplish this you can use the &quot;always&quot; keyword at the end of the &quot;default-information originate&quot; command:<br/>

!<br/>

router ospf 1<br/>

default-information originate always<br/>

!</p>
			</Row>
		</Container>
		<hr/>
		<Container>
			<h1 id="tdp9">Routing forwarding decisions</h1>
			<Row className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
				<h1>Routing AD Values</h1>
			<Row>
				<Table>
      <thead>
        <tr>
          <th className="ads-heading text-center"><b>Route Source</b></th>
          <th className="ads-heading text-center"><b>Default Distance Values</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-center" scope="row">Connected interface</th>
          <td  className="text-center">0</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">Static route</th>
          <td  className="text-center">1</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">Enhanced Interior Gateway Routing Protocol
(EIGRP) summary route</th>
          <td  className="text-center">5</td>
          
        </tr>
		 <tr>
          <th className="text-center" scope="row">External Border Gateway Protocol (BGP)
Internal EIGRP</th>
          <td  className="text-center">20</td>
         
        </tr>
		<tr>
          <th className="text-center" scope="row">Internal EIGRP</th>
          <td  className="text-center">90</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">GRP</th>
          <td  className="text-center">100</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">
OSPF</th>
          <td  className="text-center">110</td>
          
        </tr>
		 <tr>
          <th className="text-center" scope="row">Intermediate System-to-Intermediate System (IS-
IS)</th>
          <td  className="text-center">115</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">Routing Information Protocol (RIP)
</th>
          <td  className="text-center">120</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">Exterior Gateway Protocol (EGP)</th>
          <td  className="text-center">140</td>
          
        </tr>
		 <tr>
          <th className="text-center" scope="row">On Demand Routing (ODR)</th>
          <td  className="text-center">160</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">External EIGRP</th>
          <td  className="text-center">170</td>
         
        </tr>
        <tr>
          <th scope="row"  className="text-center">internal BGP</th>
         <td  className="text-center">200</td>
          
        </tr>
		 <tr>
          <th className="text-center" scope="row">Unknown*</th>
          <td  className="text-center">255</td>
         
        </tr>
      
    
      </tbody>
    </Table>
			</Row>
		</Container>
        </Container>
		
		
    </>
  );
};

export default module3;
