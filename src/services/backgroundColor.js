import ResolverService from './resolverService.js';
import colors from '../fixtures/backgroundColors.js';

export default class BackgroundColor extends ResolverService {
  /**
   * Update Background Color
   */
  async update() {
    const { args: { input: { color } = {} }, context: { dataSources } } = this;
    const options = { sourceName: process.env.OBS_SOURCE_BACKGROUND };
    const selectedColor = (colors.filter(c => c.toLowerCase() === color.toLowerCase()).length) ? color.toLowerCase() : 'green';

    await Promise.all(colors.map(async (filterName) => {
      if (filterName.toLowerCase() === selectedColor) await dataSources.obs.setSourceFilterVisibility({ filterEnabled: true, filterName, ...options });
      else await dataSources.obs.setSourceFilterVisibility({ filterEnabled: false, filterName, ...options });
    }));

    return { success: true };
  }
}
