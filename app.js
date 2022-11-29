const { bootstrap } = require("@kaholo/plugin-library");
const { exec } = require("./helpers");


async function execute(params) {
  const { releaseUrl, url, userID, apiKey, tenantCode, jobID, optionalParameters } = params;
  const parameters = `--url "${url}" --userID "${userID}" --apiKey "${apiKey}" --tenantCode "${tenantCode}" --jobID "${jobID}" ${optionalParameters}`;
  const commands =
    `curl ${releaseUrl} -O -s 
    tar xvzf accelq_ci_cd.tar.gz
    cd out
    npm install
    node app.js ${parameters}`;

  return exec(commands, {
  }).catch((error) => {
    throw new Error(error.stderr || error.stdout || error.message || error);
  });
}

module.exports = bootstrap({
  execute,
});
