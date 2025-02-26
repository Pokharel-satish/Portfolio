import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/onlinekinbech.png";
import projImg2 from "../assets/img/note-app.png";
import projImg3 from "../assets/img/ballknowledge.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "ONLINEKINBECH",
            description: "Ecommerce Platform",
            imgUrl: projImg1,
        },
        {
            title: "Note Application",
            description: "Notes ",
            imgUrl: projImg2,
        },
        {
            title: "Ball Knowledge",
            description: "Guessing Game",
            imgUrl: projImg3,
        },
       
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>I developed ONLINEKINBECH, a MERN stack e-commerce website for buying and selling secondhand
                                         products with user-friendly interfaces. I also created a Note App for managing tasks 
                                         and a football player guessing game where users guess players based on transfer histories
                                          with features like authentication, increasing difficulty, and a time limit.
                                        </p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects Snaps</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}