import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FormGroup (props) {
    const {label,type,register} = props;
    const styles = {
        form: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            height: "50%"
        }
    }

    return(
        <>
            <Container >
                <Row>
                    <Col sm="20">
                        <Form.Group as={Row} className="mb-4" style={styles.form} controlId="formBasicEmail">
                            <Form.Label  column sm="1">{label}</Form.Label>
                            <Form.Control style={{ height: "100%", width:"60%" }} type={type || "text"} {...register} />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormGroup;