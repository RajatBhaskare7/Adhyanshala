/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Index from "views/Index.js";
/*import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";*/
import Access from "views/examples/networking/AcessVlanandTrunkport.js";
import module2 from "views/examples/networking/ARP and Ethernet frame forwarding.js";
import module3 from "views/examples/networking/automation and programmability.js";
import module4 from "views/examples/networking/cloud services.js";
import module5 from "views/examples/networking/DTP.js";
import module6 from "views/examples/networking/Encapsulation.js";
import module7 from "views/examples/networking/Endpoints and Servers.js";
import module8 from "views/examples/networking/IP connectivity.js";
import module9 from "views/examples/networking/IP Services.js";
import module10 from "views/examples/networking/IPv4 addressing.js";
import module11 from "views/examples/networking/ipv6.js";
import module12 from "views/examples/networking/Network access.js";
import module13 from "views/examples/networking/Next generation firewall and IPS.js";
import module14 from "views/examples/networking/Physical interface and cabling types.js";
import module15 from "views/examples/networking/PING.js";
import module16 from "views/examples/networking/Routing.js";
import module17 from "views/examples/networking/Security fundamentals.js";
import module18 from "views/examples/networking/Switches.js";
import module19 from "views/examples/networking/TCP AND UDP.js";
import module20 from "views/examples/networking/Virtual machine.js";
import module21 from "views/examples/networking/VLANs + CLI Tutorial.js";
import module22 from "views/examples/networking/VTP.js";
import module23 from "views/examples/networking/Wireless access points and WLC.js";
var routes = [
 {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  /*--documentation--*/
  {
    path: "/module1",
    name: "Access VLAN and Trunk ports",
	icon:"ni ni-bullet-list-67 ",
    component: Access,
    layout: "/admin",
  },
  {
    path: "/module2",
    name: "ARP and Ethernet frame forwarding",
    icon:"ni ni-bullet-list-67 ",
    component: module2,
    layout: "/admin",
  },
  {
    path: "/module3",
    name: "automation and programmability",
    icon:"ni ni-bullet-list-67 ",
    component: module3,
    layout: "/admin",
  },
  {
    path: "/module4",
    name: "cloud services",
    icon:"ni ni-bullet-list-67 ",
    component: module4,
    layout: "/admin",
  },
  {
    path: "/module5",
    name: "DTP",
    icon:"ni ni-bullet-list-67 ",
    component: module5,
    layout: "/admin",
  },
  {
    path: "/module6",
    name: "Encapsulation",
    icon:"ni ni-bullet-list-67 ",
    component: module6,
    layout: "/admin",
  },
  {
    path: "/module7",
    name: "Endpoints and Servers",
    icon:"ni ni-bullet-list-67 ",
    component: module7,
    layout: "/admin",
  },
  {
    path: "/module8",
    name: "IP connectivity",
    icon:"ni ni-bullet-list-67 ",
    component: module8,
    layout: "/admin",
  },
  {
    path: "/module9",
    name: "IP Services",
    icon:"ni ni-bullet-list-67 ",
    component: module9,
    layout: "/admin",
  },
  {
    path: "/module10",
    name: "IPv4 addressing",
    icon:"ni ni-bullet-list-67 ",
    component: module10,
    layout: "/admin",
  },
  {
    path: "/module11",
    name: "ipv6",
    icon:"ni ni-bullet-list-67 ",
    component: module11,
    layout: "/admin",
  },
  {
    path: "/module12",
    name: "Network access",
    icon:"ni ni-bullet-list-67 ",
    component: module12,
    layout: "/admin",
  },
  {
    path: "/module13",
    name: "Next generation firewall and IPS",
    icon:"ni ni-bullet-list-67 ",
    component: module13,
    layout: "/admin",
  },
  
  {
    path: "/module14",
    name: "Physical interface and cabling types",
    icon:"ni ni-bullet-list-67 ",
    component: module14,
    layout: "/admin",
  },
  {
    path: "/module15",
    name: "PING",
    icon:"ni ni-bullet-list-67 ",
    component: module15,
    layout: "/admin",
  },
  {
    path: "/module16",
    name: "Routing",
    icon:"ni ni-bullet-list-67 ",
    component: module16,
    layout: "/admin",
  },
  {
    path: "/module17",
    name: "Security fundamentals",
    icon:"ni ni-bullet-list-67 ",
    component: module17,
    layout: "/admin",
  },
  {
    path: "/module18",
    name: "Switches",
    icon:"ni ni-bullet-list-67 ",
    component: module18,
    layout: "/admin",
  },
  {
    path: "/module19",
    name: "TCP AND UDP",
    icon:"ni ni-bullet-list-67 ",
    component: module19,
    layout: "/admin",
  },
  {
    path: "/module20",
    name: "Virtual machine",
    icon:"ni ni-bullet-list-67 ",
    component: module20,
    layout: "/admin",
  },
  {
    path: "/module21",
    name: "VLANs + CLI Tutorial",
    icon:"ni ni-bullet-list-67 ",
    component: module21,
    layout: "/admin",
  },
  {
    path: "/module22",
    name: "VTP",
    icon:"ni ni-bullet-list-67 ",
    component: module22,
    layout: "/admin",
  },
  {
    path: "/module23",
    name: "Wireless access points and WLC",
    icon:"ni ni-bullet-list-67 ",
    component: module23,
    layout: "/admin",
  },
  
  
];
export default routes;
