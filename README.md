# gmail-client

### How To Use This Library
Go to [Gmail Node.js Quickstart](https://developers.google.com/gmail/api/quickstart/nodejs) and follow the instructions to enable the Gmail API. Download `credentials.json` and modify `first_auth.js` to point to this file.
Also modify the location of `token.js` in `first_auth.js` to a location on your local file system. Run `first_auth.js` and follow the instructions. When `token.js` has been downloaded put the contents of `credentials.json` and `token.json` into
environment variables and test that it works by running `listLabels.js`

## Environment Variables

```
export credentials=<json gmail user credentials from credentials.json>
export authToken=<json authoriziation token from token.json>
```
