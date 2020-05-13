const { getLabels } = require('./unauthedactions');
const { withAuth } = require('./auth');

(async () => {
  const authedGetLabels = await withAuth(getLabels);
  console.log(await authedGetLabels());
})();
