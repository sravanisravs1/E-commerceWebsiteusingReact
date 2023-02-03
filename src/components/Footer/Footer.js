import React from 'react';
import { Card ,Col,Row} from 'react-bootstrap';

function Footer(props) {
    return (
        <footer>
            <Card className='shadow-lg' style={{ backgroundColor:'pink'}}>
                
                <Card.Footer>
                    <Row >
                        <Col sm={5}>
                                <h2>
                            THE GENERICS
                        </h2>
                        </Col>
                        <Col>
                            Youtube
                        </Col>
                        <Col>
                         Instagram
                        </Col>
                        <Col>
                          facebook
                        </Col>
                    </Row>    
                </Card.Footer>

            </Card>
        </footer>
    );
}

export default Footer;