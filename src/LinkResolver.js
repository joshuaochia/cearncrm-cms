// LinkResolver.js file

exports.linkResolver = (doc) => {
  if (doc.type === "blog") {
    return `blog/${doc.uid}`;
  }

  return "/";
};
