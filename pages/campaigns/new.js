import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout'; // go up two directories!!
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  }; // setting state seamlessly to forms baby!!, event object contains new value

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
      .createCampaign(this.state.minimumContribution)
      .send({
        from: accounts[0]
      });
      Router.pushRoute('/'); // automatic routing through app, send to another page
    } catch (err) {
    this.setState({ errorMessage: err.message.split("\n")[0] });
  } // only time we don't have to specify Gas is when process by browser, metamask trick

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
              />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  } // double !! turns string into equivalent boolean value!!
}


export default CampaignNew;
