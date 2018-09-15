import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    
    renderDish(dish) {
        if (dish!=null){
            return(
                <Card className="clo=12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(array) {
        if(array.length != 0) {
            return array.map(comment => (
                <div className="list-unstyled">
                    <div>
                        {comment.comment}
                    </div>
                    <div>
                        {comment.author} {comment.date}
                    </div>
                </div>
            ));
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className="row">
                
                    {this.renderDish(this.props.selectedDish)}
                
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.selectedDish.comments)}
                </div> 
            </div>
        );
    }
}

export default DishDetail;