import React from 'react';
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class StoresForm extends React.Component {
  defaultValues = { name: "", description: "", department: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const store = { ...this.state, };
    axios.post("/api/stores", store)
      .then( res => {
        this.props.history.push("/stores");
      })
      this.setState({ ...this.defaultValues, });
  }
  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description, department, } = this.state;

    return (
      <div>
        <Header as="h1">New Store</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Department"
              name="department"
              placeholder="Department"
              value={department}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default StoresForm;
