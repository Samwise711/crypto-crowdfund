import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

// class based component

class CampaignIndex extends Component {
  static async getInitialProps() {  // static allows one to run class function without creating an instance!!
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

//dynamically compute route for description tag below
  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
          <a>View Campaign</a>
          </Link>
        ),
        fluid: true  // causes cards to go full width of frame
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <a>
            <Button floated="right" content="Create Campaign" icon="add" primary/>
          </a>
        </Link>
        {this.renderCampaigns()}
      </div>
    </Layout>
    );
  }
}

export default CampaignIndex;

// Next also requires react component to be exported for each wep page file,
// as seen on line 17

//npm run dev => starts web app
