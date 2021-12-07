import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function Loading (props) {
    const {active} = props;

    if (active) {
        return (
            <div>
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <>
                {props.children}
            </>
        );
    }
    
}

export default Loading;