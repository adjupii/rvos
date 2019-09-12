const getTabs = (sections, config) => {
  if (sections) {
    const
      tabs = config.filter(tab => sections[tab.key]),

      titles = (
        tabs.map(({
          key,
          title,
          getTitle
        }) => (
          typeof getTitle === 'function'
            ? getTitle(sections[key])
            : title
        ))
      );

    return {
      tabs,
      titles
    };
  }

  return {};
};

export {
  getTabs
};