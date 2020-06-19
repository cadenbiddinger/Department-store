import React from "react";
import { Button, Card, Header, } from "semantic-ui-react";
import axios from "axios"
import { Link } from "react-router-dom";

class Stores extends React.Component {
  state = { stores: [], };

  componentDidMount() {
    axios.get("/api/stores")
      .then( res => {
        this.setState({ stores: res.data, });
      })
  }


  renderStores = () => {
    const { stores, } = this.state;

    if (stores.length <= 0)
      return <h2>No Stores</h2>
    return stores.map( store => (
      <Card>
        <Card.Content>
          <Card.Header>{ store.name }</Card.Header>
          <Card.Meta>{ store.department }</Card.Meta>
          <Card.Description>
            { store.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/stores/${store.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
    <Header as="h1">Stores</Header>
    <br />
    <Button as={Link} color="blue" to="/stores/new">
      Add Store
    </Button>
    <br />
    <br />
    <Card.Group>
      { this.renderStores() }
    </Card.Group>
  </div>
    )
  }
}

export default Stores;

