export default {
  async initializeDataSources(dataSources, context, cache) {
    const initializedDataSources = dataSources();

    await Promise.all(Object.values(initializedDataSources).map((dataSource) => {
      if (typeof dataSource.initialize === 'function') {
        return dataSource.initialize({ cache, context });
      }

      return async () => {};
    }));

    return initializedDataSources;
  },
  isBroadcaster(msg) {
    return (msg.userInfo.isBroadcaster);
  },
  isMod(msg) {
    return (
      msg.userInfo.isBroadcaster
      || msg.userInfo.isMod
    );
  },
};
