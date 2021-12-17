import React from "react";
import { Pie } from "react-chartjs-2";
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
const networking2 = () => {
	const Videosrc={
		type:"video",
		sources:[
		{
			src:"VwN91x5i25g",
			provider:"youtube"
		}
		
		]
	};
	const data = {
		labels: ['/27', '/28', '/29', '/30', '/30', '/25','/26'],
  datasets: [
    {
      label: '# of Votes',
      data: [1,0.6,0.3,0.2,0.1,6,3],
      backgroundColor: [
        'rgb(94,174,255)',
        'rgb(13,134,255)',
        'rgb(0,102,204)',
        'rgb(0,102,204)',
        'rgb(13,134,255)',
        'rgb(153,204,255)',
		'rgb(121,188,255)',
      ],
      borderColor: [
        'rgb(94,174,255))',
        'rgb(13,134,255)',
        'rgb(0,102,204)',
        'rgb(0,102,204)',
		'rgb(13,134,255)',
        'rgb(153,204,255))',
        'rgb(121,188,255)',
		
      ],
      borderWidth: 1,
    },
  ],
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
                      <h2 className="text-white mb-0">IPv4 addressing</h2>
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
                      <h2 className="mb-0">IPv4 addressing</h2>
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
                  <Button outline
                    color="warning"
                    href="#tdp2"
                    className="d-block w-100 text-left my-1 mx-0"
                    size="sm"
                  >
IPv4 Subnetting
                  </Button>
                 
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
			 <hr/>
		  <Container>
		  <h1  id="tdp">IPv4 addressing</h1>
			<Row className="p-5">
				<div className="video-player">
					<Plyr  source={Videosrc} />
				</div>
			</Row>
		</Container>
		<hr/>
		  <Container>
		  <h1 id="tdp2">IPv4 Subnetting</h1>
			<Row>
				<Col>
					<h2 className="text-center">Subnets</h2>
					 <Table responsive>
      <thead>
        <tr>
          <th>CIDR</th>
          <th>Subnet Mask</th>
          <th>Address</th>
          <th>Wildcard</th>
        </tr>
      </thead>
      <tbody>
	  <tr>
          <th scope="row">/32</th>
          <td>255.255.255.255</td>
          <td>1</td>
          <td>0.0.0.0</td>
        </tr>
		<tr>
          <th scope="row">/31</th>
          <td>255.255.255.254</td>
          <td>2</td>
          <td>0.0.0.1</td>
        </tr>
	  <tr>
          <th scope="row">/30</th>
          <td>255.255.255.254</td>
          <td>4</td>
          <td>0.0.0.3</td>
        </tr>
	  <tr>
          <th scope="row">/29</th>
          <td>255.255.255.248</td>
          <td>8</td>
          <td>0.0.0.7</td>
        </tr>
	  <tr>
          <th scope="row">/28</th>
          <td>255.255.255.240</td>
          <td>16</td>
          <td>0.0.0.15</td>
        </tr>
	  <tr>
          <th scope="row">/27</th>
          <td>255.255.255.224</td>
          <td>32</td>
          <td>0.0.0.31</td>
        </tr>
	  <tr>
          <th scope="row">/26</th>
          <td>255.255.255.192</td>
          <td>64</td>
          <td>0.0.0.63</td>
        </tr>
	  <tr>
          <th scope="row">/25</th>
          <td> 255.255.255.128</td>
          <td>128</td>
          <td>0.0.0.127</td>
        </tr>
	  <tr>
          <th scope="row">/24</th>
          <td>255.255.255.0</td>
          <td>256</td>
          <td>0.0.0.255</td>
        </tr>
	  <tr>
          <th scope="row">/23</th>
          <td>255.255.254.0</td>
          <td>512</td>
          <td>0.0.1.255</td>
        </tr>
	  <tr>
          <th scope="row">/22</th>
          <td> 255.255.252.0</td>
          <td>1024</td>
          <td>0.0.3.255</td>
        </tr>
	  <tr>
          <th scope="row">/21</th>
          <td>255.255.248.0</td>
          <td>2048</td>
          <td>0.0.7.255</td>
        </tr>
	  <tr>
          <th scope="row">/20</th>
          <td> 255.255.240.0</td>
          <td>4,096</td>
          <td>0.0.15.255</td>
        </tr>
	  <tr>
          <th scope="row">/19</th>
          <td>255.255.224.0</td>
          <td>8,192</td>
          <td>0.0.31.255</td>
        </tr>
	  <tr>
          <th scope="row">/18</th>
          <td>255.255.192.0</td>
          <td>16,384</td>
          <td>0.0.63.255</td>
        </tr>
	  <tr>
          <th scope="row">/17</th>
          <td>255.255.128.0</td>
          <td>32,768</td>
          <td>0.0.127.255</td>
        </tr>
	  <tr>
          <th scope="row">/16</th>
          <td>255.255.0.0</td>
          <td>65,536</td>
          <td>0.0.255.255</td>
        </tr>
	  <tr>
          <th scope="row">/15</th>
          <td> 255.254.0.0</td>
          <td>131,072</td>
          <td>0.1.255.255</td>
        </tr>
	  <tr>
          <th scope="row">/14</th>
          <td>255.252.0.0</td>
          <td>262,144</td>
          <td>0.3.255.255</td>
        </tr>
	  <tr>
          <th scope="row">/13</th>
          <td>255.248.0.0</td>
          <td>524,288</td>
          <td>0.7.255.255</td>
        </tr>
	  <tr>
          <th scope="row">/12</th>
          <td>255.240.0.0</td>
          <td>1,048,576</td>
          <td>0.15.255.255</td>
        </tr>
	  <tr>
          <th scope="row">/11</th>
          <td>255.224.0.0</td>
          <td>2,097,152</td>
          <td>0.31.255.255</td>
        </tr>
		<tr>
          <th scope="row">/10</th>
          <td>255.192.0.0</td>
          <td>4,194,304</td>
          <td>0.63.255.255</td>
        </tr>
		<tr>
          <th scope="row">/9</th>
          <td>255.128.0.0</td>
          <td>8,388,608 </td>
          <td>0.127.255.255</td>
        </tr>
		<tr>
          <th scope="row">/8</th>
          <td>255.0.0.0</td>
          <td>16,777,216 </td>
          <td>0.255.255.255</td>
        </tr>
        <tr>
          <th scope="row">/7</th>
          <td>252.0.0.0</td>
          <td>33,554,432</td>
          <td>1.255.255.255</td>
        </tr>
        <tr>
          <th scope="row">/6</th>
          <td>248.0.0.0</td>
          <td>67,108,864</td>
          <td>3.255.255.255</td>
        </tr>
        <tr>
          <th scope="row">/5</th>
          <td>240.0.0.0</td>
          <td>134,217,728</td>
          <td>7.255.255.255</td>
        </tr>
		 <tr>
          <th scope="row">/4</th>
          <td>224.0.0.0</td>
          <td>268,435,456</td>
          <td>15.255.255.255</td>
        </tr>
		 <tr>
          <th scope="row">/3</th>
          <td>224.0.0.0 </td>
          <td>536,870,912</td>
          <td>31.255.255.255</td>
        </tr>
		 <tr>
          <th scope="row">/2</th>
          <td>192.0.0.0</td>
          <td>1,073,741,824</td>
          <td>63.255.255.255</td>
        </tr>
		 <tr>
          <th scope="row">/1</th>
          <td>128.0.0.0</td>
          <td>2,147,483,648</td>
          <td>127.255.255.255</td>
        </tr>
		 <tr>
          <th scope="row">/0</th>
          <td>0.0.0.0</td>
          <td>4,294,967,296</td>
          <td>255.255.255.255</td>
        </tr>
      </tbody>
    </Table>
				</Col>
				<Col>
					<h2 className="text-center">Decimal to Binary</h2>
					 <Table responsive>
      <thead>
        <tr>
         
          <th><b>Subnet Mask</b></th>
          
          <th><b>Wildcard</b></th>
        </tr>
      </thead>
      <tbody>
		 <tr>
          <th scope="row"><strong>255</strong> <span className="ml-3">1111</span><span className="ml-3">1111</span></th>
          <td><strong>0</strong><span className="ml-3">0000</span><span className="ml-3">0000</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>254</strong>  <span className="ml-3">1111</span><span className="ml-3">1110</span></th>
          <td><strong>1</strong><span className="ml-3">0000</span><span className="ml-3">0001</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>252</strong> <span className="ml-3">1111</span><span className="ml-3">1100</span></th>
          <td><strong>3</strong><span className="ml-3">0000</span><span className="ml-3">0011</span></td>
        </tr>
		 <tr>
          <th scope="row"><strong>248</strong>  <span className="ml-3">1111</span><span className="ml-3">1000</span></th>
          <td><strong>7</strong><span className="ml-3">0000</span><span className="ml-3">0111</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>240</strong> <span className="ml-3"> 1111</span><span className="ml-3">0000</span></th>
          <td><strong>15</strong><span className="ml-3">0000</span><span className="ml-3">1111</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>224</strong>  <span className="ml-3">1110</span><span className="ml-3">0000</span></th>
          <td><strong>31</strong><span className="ml-3">0001</span><span className="ml-3">1111</span></td>
        </tr>
		 <tr>
          <th scope="row"><strong>192</strong> <span className="ml-3"> 1100</span><span className="ml-3">0000</span></th>
          <td><strong>63</strong><span className="ml-3">0011</span><span className="ml-3">1111</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>128</strong>  <span className="ml-3">1000</span><span className="ml-3">0000</span></th>
          <td><strong>127</strong><span className="ml-3">0111</span><span className="ml-3">1111</span></td>
        </tr>
		<tr>
          <th scope="row"><strong>0</strong> <span className="ml-3"> 0000</span><span className="ml-3">0000</span></th>
          <td><strong>255</strong><span className="ml-3">1111</span><span className="ml-3">1111</span></td>
        </tr>
      </tbody>
    </Table>
		<div >
		<h2 className="text-center">Subnet Proportion</h2>
		<Pie  data={data}/>
		</div>
		<div className="text-center mt-3">
			<h2 className="text-center">Classful Ranges</h2>
			<p><strong className="mr-2">A</strong> 0.0.0.0 – 127.255.255.255</p>
			<p><strong className="mr-2">B</strong>128.0.0.0 - 191.255.255.255</p>
			<p><strong className="mr-2">C</strong>92.0.0.0 - 223.255.255.255</p>
			<p><strong className="mr-2">D</strong>24.0.0.0 - 239.255.255.255</p>
			<p><strong className="mr-2">E</strong> 240.0.0.0 - 255.255.255.255</p>
		</div>
		<div className="text-center mt-3" >
		<h1 className="text-center">Reserved Ranges</h1>
			<p><strong className="mr-2">RFC 1918</strong>  10.0.0.0 - 10.255.255.255</p>
			<p><strong className="mr-2">Localhost</strong>   127.0.0.0 - 127.255.255.255</p>
			<p><strong className="mr-2">RFC 1918</strong>  172.16.0.0 - 172.31.255.255</p>
			<p><strong className="mr-2">RFC 1918</strong>   192.168.0.0 - 192.168.255.255</p>
		</div>
				</Col>
			</Row>
			<h1 className="text-center">Terminology</h1>
			<Row>
				<Col>
					<h2>CIDR</h2>
					<p>Classless interdomain routing was developed to 
provide more granularity than legacy classful 
addressing; CIDR notation is expressed as /XX
</p>
				</Col>
				<Col>
					<h2>VLSM</h2>
					<p>Variable-length subnet masks are an arbitrary length 
between 0 and 32 bits; CIDR relies on VLSMs to define 
routes</p>
				</Col>
			</Row>
			
		</Container>
        </Container>
    </>
  );
};

export default networking2;