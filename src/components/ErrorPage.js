import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ErrorPage = (props) => {

    const error = getError(props.match.params.id)

    return (
        <div className="m-4 p-4 bg-dark">
            <Row>
                <Col>
                    <span className="d-flex justify-content-center display-1 font-weight-bold text-light m-2">{ error.statuscode }</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="d-flex justify-content-center display-3 text-light m-2">{ error.title }</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="d-flex justify-content-center display-5 text-light m-2">{ error.description }</span>
                </Col>
            </Row>
            <Row>
                <Col><Link to="/dashboard" className="d-flex justify-content-center text-primary m-2">GO TO HOME</Link></Col>
            </Row>
        </div>
    )
}

/**
 * 
 */
/**
 * Return the error model based on error code
 * 
 * @param errorcode error code for the error
 * @returns errordetail model based on the given error code
 */
export const getError = (errorcode) => {

    switch(errorcode) {
        case "404":
            return {
                statuscode: "404",
                title: "PAGE NOT FOUND.",
                description: "We Couldn't Find This Page"
            }
        case "401":
            return {
                statuscode: "401",
                title: "Unauthorized.",
                description: "Not Authorized To Access page"
            }
        case "500":
            return {
                statuscode: "500",
                title: "Internal Server Error.",
                description: "Problem Reaching Out Server Please Try Again Later"
            }
        default: 
            return {
                statuscode: "404",
                title: "PAGE NOT FOUND.",
                description: "We Couldn't Find This Page"
            }
                   
    }
}
    
export default ErrorPage