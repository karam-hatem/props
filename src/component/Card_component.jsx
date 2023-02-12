import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class GridExample extends React.Component{
  render(){

  return (
    <Row xs={1} md={2} className="g-4">
      {this.props.message.map(ele => (
        <Col>
          <Card>
            <Card.Img variant="top" src={ele.bookImage} />
            <Card.Body>
              <Card.Title>{ele.bookTitle}</Card.Title>
              <Card.Text>
                {ele.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );}}

export default GridExample;