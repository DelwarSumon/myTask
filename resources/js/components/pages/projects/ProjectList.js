import Axios from 'axios';
import React from 'react';
import { Badge, Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../constants';

class ProjectList extends React.Component {
    state = { 
        projectList : [],
        isLoading : false,
    };

    componentDidMount() {
        this.getProjectLists();
        
    }

    getProjectLists = () => {
        //call an api and update projects to that
        this.setState({isLoading:true});
        Axios.get("http://localhost/delwar/laravel_react/myTask/api/projects").then((res) => {
            const projectList = res.data.data;
            this.setState({
                projectList,
                isLoading:false,
            });
        });
    }

    render() { 
        return ( 
            <>
                
                <div className="header-part">
                    <div className="float-left">
                        <h2>Project list <Badge variant="primary">{this.state.projectList.length}</Badge></h2>

                    </div>
                    <div className="float-right">
                        <Link to={`${PUBLIC_URL}projects/create`} className="btn btn-info">+Create New</Link>
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
                {this.state.projectList.map((project, index) => (
                    <Card key={index} className="mb-3" >
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
 
export default ProjectList;
