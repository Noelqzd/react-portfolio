import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.everybodyplays.co.uk/images/gamefinderlogo.jpg) center / cover'}} ></CardTitle>
            <CardText>
            We have developed a react app that can be used to look up books (Productive), or(||) look up games (Un-productive). Users can save their recommendations for either type on a communal page.
            </CardText>
            <CardActions border>
              <Button   href="https://github.com/vic30004/un-productive-" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="https://un-productive.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.goldderby.com/wp-content/uploads/2019/09/Cover.jpg?w=620) center / cover'}} ></CardTitle>
            <CardText>
            Clicky Memory Game
Clicking A Unique Card Grants A Point and Will Shuffle The Cards! Be Careful, You Can't Select The Same Card Twice!
          
            </CardText>
            <CardActions border>
              <Button   href="https://github.com/Noqzd9/clicky-memory-game" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="https://nqzd.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
        
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          
        </div>
      )


      //JAVASCRIPT
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.clubs.nfl.com/image/private/t_q-best/raiders/vr3yjkunosgv66diosbz) center / cover'}} ></CardTitle>
            <CardText>
            Trivia game based on Bay Area sports teams

10 second timer to answer questions

8 questions

If wrong answered is chosen, correct answer will appear

After all questions are submited player will recieve score card.
            </CardText>
            <CardActions border>
              <Button   href="https://github.com/Noqzd9/TriviGame" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="https://noqzd9.github.io/unit-4-game/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67958316_10218098316426941_8330553189052973056_n.jpg?_nc_cat=104&_nc_oc=AQnWycXltzDBHpn63J6OGDsz-FMZyKbQXe0vN7NP6j-6c3HQVONJ8J1HQw-aUBVkMldOMhaNYarLZcaM_J_xrjZa&_nc_ht=scontent-sjc3-1.xx&oh=5cd2fe425f3f0909fc7c87c10f95b2c6&oe=5E450586) center / cover'}} ></CardTitle>
            <CardText>
           Created a proffesional dentist page for my cousin.
            </CardText>
            <CardActions border>
              <Button   href="https://github.com/Noqzd9/Dental-Alberto" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="https://noqzd9.github.io/Dental-Alberto/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://gamefabrique.com/storage/screenshots/gbc/m-and-ms-mini-madness-05.png) center / cover'}} ></CardTitle>
            <CardText>
  
            </CardText>
            <CardActions border>
              <Button   href="https://github.com/Noqzd9/unit-4-game" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="https://noqzd9.github.io/unit-4-game/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          

          

          
          </div>

          
      )

      //MYSQL MONGODB
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
           
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
          
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
        
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          

          

          
          </div>

          
      )

      //LAST PAGE
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
           
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
          
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg) center / cover'}} ></CardTitle>
            <CardText>
        
            </CardText>
            <CardActions border>
              <Button   href="" rel="noopener noreferrer" target="_blank" colored>GitHub</Button >
              
              <Button href="" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          
          
          </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>MySql/MongoDB</Tab>
          <Tab>One Page</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;