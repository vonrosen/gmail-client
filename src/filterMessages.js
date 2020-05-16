const { getFilteredMessages, getMessage } = require('./authedactions');
const { filterMessagesAfterTimestamp } = require('./messageUtils');

(async () => {
  const messages = await getFilteredMessages({
    q: 'subject:Security Alert from:no-reply@accounts.google.com to:forwardtothebiggoal@gmail.com after:2020/05/09',
  });
  const promises = messages.map(async ({ id }) => getMessage({ id }));
  const messagesDetails = await Promise.all(promises);
  console.log(filterMessagesAfterTimestamp({
    messages: messagesDetails,
    timestamp: 1589161517000,
  }));
  console.log(filterMessagesAfterTimestamp({
    messages: messagesDetails,
    timestamp: 1589161518000,
  }));
})();
