module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/"); // https://www.11ty.dev/docs/copy/#configuration-api-method
  // eleventyConfig.addPassthroughCopy("**/*.jpg"); 
  eleventyConfig.setTemplateFormats(["jpg", "jpeg", "gif", "webp", "md"]); // https://www.11ty.dev/docs/copy/#passthrough-by-file-extension

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  }); // https://www.11ty.dev/docs/data-frontmatter-customize

  eleventyConfig.setBrowserSyncConfig({ open: true }); // https://www.11ty.dev/docs/watch-serve/#override-browsersync-server-options
  // eleventyConfig.setDataDeepMerge(true); // https://www.11ty.dev/docs/data-deep-merge

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};