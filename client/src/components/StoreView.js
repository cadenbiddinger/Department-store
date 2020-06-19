import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class StoreReview extends React.Component {
  state = { store: {}, };

  componentDidMount() {
    axios.get(`/api/stores/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ store: res.data, });
      })
  }

  render() {
    const { name, description, department, } = this.state.store;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{ department }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default StoreReview;