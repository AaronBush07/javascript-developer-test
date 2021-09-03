const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const results = urls.map(async (v) => {
    const resp = await httpGet(v)
    const {message} = JSON.parse(resp.body)
    if (resp.status === 200) return {'Arnie Quote': message}
    return {"FAILURE":message}
  });
  return Promise.all(results);
};

module.exports = {
  getArnieQuotes,
};
