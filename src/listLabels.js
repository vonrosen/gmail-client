const { getLabels } = require('./actions');
const { withAuth } = require('./auth');

(async () => {
  const authedGetLabels = await withAuth(getLabels);
  console.log(await authedGetLabels());
})();
