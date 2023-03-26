import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/events/search?q=${query}`);
      setEvents(response.data._embedded.events);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>EventFinder</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search for events"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" disabled={isLoading} onClick={handleSearch}>
                {isLoading ? 'Searching...' : 'Search'}
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      {events.length > 0 && (
        <Row>
          <Col>
            <h2>Events</h2>
            {events.map((event) => (
              <div key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.dates.start.localDate}</p>
              </div>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
