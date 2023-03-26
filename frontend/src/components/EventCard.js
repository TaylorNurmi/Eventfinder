import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

const EventCard = ({ event }) => {
    return (
        <Card>
            <CardImg top src={event.images[0].url} alt={event.name} />
            <CardBody>
                <CardTitle tag="h5">{event.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                {event.dates.start.localDate} {event.dates.start.localTime}
                </CardSubtitle>
                <div dangerouslySetInnerHTML={{ __html: event.info }} />
            </CardBody>
        </Card>
    );
};

export default EventCard;
