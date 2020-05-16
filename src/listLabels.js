const { getLabels } = require('./authedactions');

(async () => {
  console.log(await getLabels());
})();
