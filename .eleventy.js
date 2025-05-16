module.exports = function (eleventyConfig) {
  // Pasa assets directo a la raíz `dist` (que en este caso es el root)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
    // Si quieres ignorar node_modules, package.json, etc.
    templateFormats: ["html", "md", "njk"],
  };
};
