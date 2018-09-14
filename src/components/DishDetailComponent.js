import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }
     
    renderDish(dish) {
        if (dish!=null){
            
        } else {
            <div></div>
        }
    }

    renderComments() {

    }

    render() {
        return(
            <Card className="col-12 col-md-5">
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle><strong>{this.props.selectedDish.name}</strong></CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card> 
        );
    }
}

export default DishDetail;