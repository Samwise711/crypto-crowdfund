import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x89B31a328c758Dc7778DeEfC68b8986266633f2c'  //must update this address everytime we re-compile and redeploy
);

export default instance;
