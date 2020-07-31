const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    apiPath: "http://apiv3.iucnredlist.org",
    domain: "iucnredlist",
    revivePath: ".org",
    lockScreen: true,
  },
  production: {
    apiPath: "http://apiv3.iucnredlist.org",
    domain: "iucnredlist",
    revivePath: ".org",
    lockScreen: true,
  },
  domain: ".iucnredlist.org",
};
module.exports = config[env];
