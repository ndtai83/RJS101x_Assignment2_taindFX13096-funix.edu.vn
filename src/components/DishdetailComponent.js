import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    };
  }

// function RenderDish({dish}) {
RenderDish({dish}) {

}

// function RenderComments({comments}) {
RenderComments({comments}) {

}

render() {
  const  DishDetail = (props) => {

  }

  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
        </div>
    </div>
    </div>
);
}

}

// export default DishDetail;
export default DishDetail;