const axios = require('axios');
const { google } = require('googleapis');

const getAccessToken = async ({ clientId, clientSecret, refreshToken }) => {
  const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com',
    timeout: 10000,
  });
  return axiosInstance.post('/oauth2/v4/token', {
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  }).then((response) => response.data);
};

const getOauth2Client = ({
  clientId, clientSecret, redirectUris, token,
}) => {
  const oAuth2Client = new google.auth.OAuth2(
    clientId, clientSecret, redirectUris[0],
  );
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
};

const withAuth = async (gmailAction) => async (args) => {
  if (!process.env.credentials) {
    console.log('Could not find credentials!');
    return;
  }
  if (!process.env.authToken) {
    console.log('Could not find auth token!');
    return;
  }
  const credentials = JSON.parse(process.env.credentials);
  let authToken = JSON.parse(process.env.authToken);
  if (!authToken.expiry_date) {
    console.log('Could not find expiration date for auth token!');
    return;
  }
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  if (authToken.expiry_date < Date.now() + (10 * 60 * 1000)) {
    const time = Date.now();
    authToken = await getAccessToken({
      clientId: client_id,
      clientSecret: client_secret,
      refreshToken: authToken.refresh_token,
    });
    authToken.expiry_date = time + (authToken.expires_in * 1000);
    process.env.authToken = JSON.stringify(authToken);
  }
  const oauth2Client = getOauth2Client({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUris: redirect_uris,
    token: authToken,
  });
  /* eslint-disable-next-line consistent-return */
  return gmailAction({ auth: oauth2Client, ...args }).then((resp) => resp);
};

module.exports = {
  getOauth2Client,
  getAccessToken,
  withAuth,
};
