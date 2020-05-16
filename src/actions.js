const { google } = require('googleapis');

const getLabels = async ({ auth }) => new Promise((resolve, reject) => {
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) reject(new Error(`The API returned an error: ${err}`));
    resolve(res.data.labels);
  });
});

const getFilteredMessages = async ({ auth, q }) => new Promise((resolve, reject) => {
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.messages.list({
    userId: 'me',
    q,
  }, (err, res) => {
    if (err) reject(new Error(`The API returned an error: ${err}`));
    resolve(res.data.messages);
  });
});

const getMessage = (async ({ auth, id }) => new Promise((resolve, reject) => {
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.messages.get({
    userId: 'me',
    id,
  }, (err, res) => {
    if (err) reject(new Error(`The API returned an error: ${err}`));
    resolve(res.data);
  });
}));

module.exports = {
  getLabels,
  getFilteredMessages,
  getMessage
}