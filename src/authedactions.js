const { withAuth } = require('./auth');
const { getLabels, getFilteredMessages, getMessage } = require('./actions');

module.exports = {
    getLabels: withAuth(getLabels),
    getFilteredMessages: withAuth(getFilteredMessages),
    getMessage: withAuth(getMessage)
}