import Axios from 'axios';
import React from 'react';
import { Badge, Button, Card, Spinner } from 'react-bootstrap';

class ProjectCreate extends React.Component {
    state = { 
        isLoading : false,
    };

    componentDidMount() {
        
    }

    render() { 
        console.log("coming render");
        return ( 
            <>

                <div className="header-part">
                    <div className="float-left">
                        <h2>Create New Project <Badge variant="primary">{this.state.ProjectCreate.length}</Badge></h2>
                    </div>
                    <div className="float-right">
                        <a href="#" className="btn btn-info text-white">See All Project</a>
                    </div>
                    <div className="clearfix"></div>
                </div>

                {
                    this.state.isLoading && 
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                }
                {this.state.ProjectCreate.map((project, index) => (
                    <Card kew={index} className="mt-3" >
                        <Card.Header>{project.name} <Badge variant="primary">{project.tasks_count}</Badge> </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            {project.description}
                            </Card.Text>
                            <Button variant="success" className="mr-2">View</Button>
                            <Button variant="primary" className="mr-2">Edit</Button>
                            <Button variant="danger" className="mr-2">Delete</Button>
                        </Card.Body>
                    </Card>
                ))}


                

            </>
         );
    }
}
 
export default ProjectCreate;
