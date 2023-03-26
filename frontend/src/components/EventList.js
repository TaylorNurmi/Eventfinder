import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const EventsList = ({ events }) => {
    return (
        <ListGroup>
            {events.map((event) => (
                <ListGroupItem key={event.id}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <h5>{event.name}</h5>
                    <p>{event.dates.start.localDate}</p>
                    </div>
                    <div>
                    <Badge color="secondary">{event.classifications[0].segment.name}</Badge>
                    </div>
                </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default EventsList;
