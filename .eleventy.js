
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {

  // eleventyConfig.addPlugin(UpgradeHelper);
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('fonts');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
  ]);

  return {
    dir: {
      output: 'docs'
    }
  };
};