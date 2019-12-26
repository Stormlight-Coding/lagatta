const routes = require("../routes");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

(async () => {
  const validator = require("html-validator");
  const options = {
    url: "http://127.0.0.1:3000",
    format: "json",
    isLocal: true
  };

  const pages = Object.keys(routes);

  asyncForEach(pages, async page => {
    const result = await validator({ ...options, url: options.url + page });
    // console.log(page);

    if (result.messages.length) {
      console.log(result);
      throw page + " - invalid";
    }
  });
})();
