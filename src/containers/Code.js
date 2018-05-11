import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const CodeThumbnailMobile = styled.img`
  // width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
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
            <div className="col-lg-4 col-md-4 col-sm-4">
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
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Perforce</li>
                <li>JSON</li>
                <li>Heroku</li>
                <li>Mocha/Chai Testing</li>
                <li>Agile Development</li>
                <li>Hansoft</li>
                <li>Jira</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="https://fierce-oasis-31783.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/quizit2.png")} />
            </a>
            <a href="https://fierce-oasis-31783.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnailMobile src={require("../assets/quizit5.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>QuizIt!</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://fierce-oasis-31783.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/Binary-Squad/QuizIt"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                QuizIt! was my final project for the Berkeley Coding Camp class. QuizIt! is a social trivia game where players can join 
                in and compete against one another in a social environment. QuizIt! Is powered by Open Trivia Database’s library of 
                community provided questions and includes a live chat room for in-game communication among the players. The game loop and state machine 
                was designed using a server / client model with Socket.io used as our communication protocal.
              </PortDescription>
              <PortDescription>
                I worked with three incredibly smart teammates to create QuizIt! for the web browser and mobile in two and a half weeks. You can see our work within 
                the project's Github repository by clicking on the 'Code' button above'.
              </PortDescription>
              
              <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express.js</UsedItem>
                <UsedItem>React.js</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>Bootstrap 4</UsedItem>
                <UsedItem>Socket.io</UsedItem>
                <UsedItem>Passport.js</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>

          <hr />
          
          <PortRow>
            <a href="https://fathomless-harbor-45708.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/scrape-da-news.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Scrape Da News: Boston.com News Edition</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://fathomless-harbor-45708.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/jfaulstick/HW-13---ScrapeDaNews"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Scrape Da News: Boston.com News Edition was a homework project. The web application is designed to scrape Boston.com's news section and then save
                any new article links and titles to MongoDB. Articles can be saved and commented on later.
               </PortDescription>
              
              <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express.js</UsedItem>
                <UsedItem>jQuery</UsedItem>
                <UsedItem>MongoDB</UsedItem>
                <UsedItem>Bootstrap 4</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>

          <hr />
          
          <PortRow>
            <a href="http://lit-coast-86942.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/code-cats1.png")} />
            </a>
            <a href="http://lit-coast-86942.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/code-cats2.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Code Cats</PortTitle>
                <PortButtonContainer>
                  <PortButton href="http://lit-coast-86942.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/TeamCodeCats/codecatsdotcom"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Code Cats was my second team project for the Berkeley Coding Camp class. Our goal in creating Code Cats was to create a
                social space where our cohort could interact outside of class. The web application includes a 'Facebook-like' timeline with
                comments and a profile customizer with authentication through Google oAuth.
               </PortDescription>
              <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express.js</UsedItem>
                <UsedItem>jQuery</UsedItem>
                <UsedItem>MySQL</UsedItem>
                <UsedItem>Bootstrap 4</UsedItem>
                <UsedItem>Passport.js</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>

          <hr />
          
          <PortRow>
            <a href="https://teamthunderbuddies.github.io/BreadCrumbs/" target="_blank" rel="noopener noreferrer">
              <CodeThumbnail src={require("../assets/breadcrumbs1.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Breadcrumbs</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://teamthunderbuddies.github.io/BreadCrumbs/" target="_blank" rel="noopener noreferrer">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/TeamThunderBuddies/BreadCrumbs"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Breadcrumbs was my first class project for the Berkeley Coding Camp class. Breadcrumbs was designed to act as a social
                game of 'Tag' using Google's Maps and Geolocation APIs. One user is designated as "It" and may leave breadcrumbs at their
                current location, including with an optional photo. The other users are "Seekers" who attempt to find "It" by zero-ing in
                on their location using their on screen map. When close enough, both "It" and the "Seeker" receive a prompt that lets them
                know that "It" has been found.
               </PortDescription>
              <UsedList>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express.js</UsedItem>
                <UsedItem>jQuery</UsedItem>
                <UsedItem>Firebase</UsedItem>
                <UsedItem>Bootstrap 4</UsedItem>
                <UsedItem>Google Maps and Geolocation</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>

          <hr />
          
          <PortRow>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Other Projects!</PortTitle>
                <PortButtonContainer>
                  <PortButton
                    href="https://github.com/jfaulstick"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>
                Please check out my GitHub profile for other projects that I have worked on. The projects listed above are the ones I've 
                found most outward facing, though my repository contains all of the homework and mini-project assignments from my class as 
                well as additional side projects I have wanted to work on.
               </PortDescription>
            </PortAllText>
          </PortRow>

        </div>
      </div>
    );
  }
}

export default Code;
