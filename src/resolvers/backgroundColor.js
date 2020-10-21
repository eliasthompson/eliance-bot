import BackgroundColor from '../services/backgroundColor.js';

export default {
  Mutation: {
    updateBackgroundColor: async (...args) => new BackgroundColor(...args).update(),
  },
};
