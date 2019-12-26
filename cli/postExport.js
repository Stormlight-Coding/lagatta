const fs = require("fs-extra");
const sm = require("sitemap");
const routes = require("../routes");

const sitemap_config = {
  hostname: `http://0.0.0.0:3000`,
  cacheTime: 600000,
  urls: []
};

Object.keys(routes).forEach(key =>
  sitemap_config.urls.push({
    url: key,
    changefreq: routes[key].changefreq
  })
);

const sitemap = sm.createSitemap(sitemap_config);

sitemap.toXML((err, xml) => {
  fs.writeFileSync("out/sitemap.xml", xml);
});

fs.copySync("public", "out");
