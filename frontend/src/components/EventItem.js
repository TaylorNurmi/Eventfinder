import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Event = ({ event }) => {
    return (
        <Card body>
            <CardTitle>{event.name}</CardTitle>
            <CardText>{event.date}</CardText>
            <CardText>{event.location}</CardText>
            <CardText>{event.description}</CardText>
        </Card>
    );
};

export default Event;
