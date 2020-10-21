import { ApolloError } from 'apollo-server';
import { DataSource } from 'apollo-datasource';

export default class ObsDataSource extends DataSource {
  constructor({ clients }) {
    super();
    this.client = clients.obs.client;
    this.clients = clients;
  }

  /**
   * Set Source Filter Visibility
   * @param {Object} options
   * @returns {Promise<Object>}
   */
  async setSourceFilterVisibility(options) {
    try {
      return this.client.send('SetSourceFilterVisibility', options);
    } catch (error) {
      throw new ApolloError(error.messsage, 'OBS_SET_SOURCE_FILTER_VISIBILITY_ERROR', error);
    }
  }
}
