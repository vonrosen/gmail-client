const { getLabels, getFilteredMessages, getMessage } = require('./authedactions');

module.exports = {
  gmail: {
    getLabels,
    getFilteredMessages,
    getMessage,
  },
};
