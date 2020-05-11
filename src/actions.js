const { google } = require('googleapis');

const getLabels = async (auth) => new Promise((resolve, reject) => {
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) reject(new Error(`The API returned an error: ${err}`));
    resolve(res.data.labels);
  });
});

module.exports = {
  getLabels,
};
