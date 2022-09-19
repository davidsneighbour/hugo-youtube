const defaultStandardVersion = require("@davidsneighbour/config/standard-version");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/youtube/build.json", type: "json" },
  ],
  skip: {
    changelog: true
  }
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
