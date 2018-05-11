import React, { Component } from 'react';

class Content extends Component {
    render() {
      return (
        <div className='wrapper'>
          <div className='grid'>
            <h2 className='littleHeading'>Skills:</h2>
            <div>
              <div >
                <h5>Front-end:</h5>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap 3/4</li>
                  <li>React</li>
                  <li>Handlebars</li>
                  <li>JavaScript (ES6)</li>
                  <li>jQuery</li>
                  <li>AJAX</li>
                </ul>
              </div>
              <div>
                <h5>Back-end:</h5>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Sequelize</li>
                  <li>Mongoose</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          
        </div>
      );
    }
  }
 
  export default Content;