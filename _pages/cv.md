---
layout: archive
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
output:
  html_document:
    css: "cv.css"
---

<html>

<head>
    <title>Title of the document</title>
    <style>
        .headline {
            font-family: Calibri, "Helvetica", san-serif;
            line-height: 1.5em;
            color: black;
            font-size: 20px;
        }
        h2:after {
            content: ' ';
            display: block;
            border: 2px solid #d0d0d0;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        }
    </style>
    <body>
        {% include base_path %}
        <p style="text-align:center;font-size:30px;font-family:Times New Roman;font-size:50px">
            Sepand Ali Madad Soltani
        </p>
        <p style="text-align:left;">
            <h2>
                <span style="font-family:Times New Roman;font-size:30px">
       Education
    </span></h2>
            <b>K.N. Toosi University of Technology </b>
            <span style="float:right;">Tehran, Iran
          </span>
            <br>Bachelor of Science in Electrical Engineering
            <span style="float:right;">
                  <b>Anticipated</b> in February 2023
              </span>
            <br> Concentration: <b>Electronics Engineering</b>
            <br> GPA: 15.75/20 (Last two semesters: 16.96/20)
        </p>
        <p style="text-align:left;">
            <h2>
                <span style="font-family:Times New Roman;font-size:30px">
      Academic Projects
      </span></h2>
            <b>
Implementation of Synthesizable A* search algorithm in FPGA-VHDL </b>
            <span style="float:right;">Spring 2021
      </span>
            <ul>
                <li>Developed a synthesizable VHDL code for A* algorithm capable of solving any 10x10 mazes</li>
                <li>Developed a python script for generating random mazes</li>
                <li>Simulated the algorithm using a VHDL test bench for solving the generated mazes</li>
            </ul>
            <b>
Calculating the Magnetic Field Caused by a Spherical Solenoid </b>
            <span style="float:right;">Winter 2019
      </span>
            <ul>
                <li>Derived a formula for magnetic field caused by a spherical solenoid </li>
                <li>Calculated and graphed the magnetic field on multiple plates</li>
                <li>Integrated the graphs and the calculator in a custom GUI developed using MATLAB App Designer</li>
            </ul>
            <b>
Smart temperature detection PCB circuit design	
 </b>
            <span style="float:right;">Summer 2020
      </span>
            <ul>
                <li>Designed circuit schematic and PCB layout using Altium designer
                    <br>(Key components: ATMEGA64 and SIM800C) </li>
            </ul>
        </p>
        <p style="text-align:left;">
            <h2>
                <span style="font-family:Times New Roman;font-size:30px">
      Skills
      </span></h2>
            <ul>
                <li> <b> Software:</b> C++, VHDL, MATLAB, PSpice, Proteus design suite, Altium Designer, Python </li>
                <li> <b> Hardware:</b> Arduino, Various wireless communication modules (BLE, RF, GSM, IR and ESP8266) </li>
                <li> <b> Language:</b> Fluent in Persian and English, intermediate French </li>
                <li> <b> Online Courses and Certificates:</b> certificate of MATLAB from Sharif University </li>
            </ul>
        </p>
        <p style="text-align:left;">
            <h2>
                <span style="font-family:Times New Roman;font-size:30px">
       Work Experience
    </span></h2>
            <b>Razeq Co. </b>
            <span style="float:right;">Tehran, Iran
          </span>
            <br>Electronics Engineer Intern
            <span style="float:right;">
                 Summer 2021
              </span>
            <ul>
                <li> Researched the design and development process of a parametric speaker (directional speaker) and examined the feasibility of manufacturing it</li>
                <li>Implemented smart presence detection and remote-control support for the monitor stand in Valiasr Street Museum </li>
                <li> Developed and assembled various hardware for installation in Iran’s pavilion in Dubai Expo 2020 (Electric control panel, wiring, lighting and presence detection system)</li>
            </ul>
        </p>
    </body>
</head>

</html>