import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    if (dish!=null){
        return(
            <Card className="col-12 col-md-5 m-1">
                <CardImg top src={dish.image} alt={dish.name} />
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

function RenderComments({comments}) {
    if(comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>);
    } else {
        return(
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.selectedDish!=null) {
        return(
            <div className="container">
            <div className="row">
                    <RenderDish dish={props.selectedDish} />
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default DishDetail;