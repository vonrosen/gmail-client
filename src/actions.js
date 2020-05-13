const {
    getLabels: getUnauthedLabels,
    getFilteredMessages: getUnauthedFilteredMessages,
    getMessage: getUnauthedMessage
} = require('./unauthedactions');
const { withAuth } = require('./auth');

module.exports = {
    getLabels: withAuth(getUnauthedFilteredMessages),
    getFilteredMessages: withAuth(getUnauthedLabels),
    getMessage: withAuth(getUnauthedMessage),
};