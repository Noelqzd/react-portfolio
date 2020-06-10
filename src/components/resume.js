import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{paddingTop: '0'}}>Noel Quezada</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h6>Full Stack Engineer with a demonstrated history working in the e-learning industry. Passionate about creating a positive impact in a 
              team environment, collaborates effectively with team members to complete projects on time.
              Flexible and hard working with a positive attitude, profesional graduated from UC Berkeley Extension.
            </h6>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>San Fransisco, CA</p>
            <h5>Email</h5>
            <p>noel23quezada@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="UC Berkeley Extension"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2019}
              jobName="Code with Corgis"
              jobDescription="Primary responsibilities designing user interactions on websites, developing servers and  databases
              for website functionality and coding for mobile platforms."
              />
           
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Experience
                
                jobName="Javascript - React - MongoDB"
                
                />
                 <Experience
              
              jobName="HTML - CSS - Bootstrap"
             
              />
              <Experience
                
                jobName="NodeJS - NPM - Express.js"
                
                />
                 <Experience
              jobName="API - MySQL - Firebase"
              />
              <Experience
              
                jobName="EJS - REST - Databases"
                
                />
                      
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;