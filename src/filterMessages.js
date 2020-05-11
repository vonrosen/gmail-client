const { getFilteredMessages, getMessage } = require('./actions');
const { withAuth } = require('./auth');
const { filterMessagesAfterTimestamp } = require('./messageUtils');

(async () => {
  const authedGetFilteredMessages = await withAuth(getFilteredMessages);
  const authedGetMessage = await withAuth(getMessage);
  const messages = await authedGetFilteredMessages({
    q: 'subject:Security Alert from:no-reply@accounts.google.com to:forwardtothebiggoal@gmail.com after:2020/05/09',
  });
  const promises = messages.map(async ({ id }) => authedGetMessage({ id }));
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
