import * as React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Maca extends React.Component {



    render() {
        return (
        <Card style={{width: '18rem', flex: '1 0 15%', margin: '10px'}}>
            <Card.Img variant="top" src={this.props.imageUrl}/>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                    Male cica mace
                </Card.Text>
                <Button variant="primary" onClick={() => this.props.likeIt(this.props.id)}>
                    Like<Badge variant="light">{this.props.likes}</Badge>
                    <span className="sr-only">Like</span>
                </Button>
            </Card.Body>
        </Card>
    )}
}

export default Maca;