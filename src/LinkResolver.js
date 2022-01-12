// LinkResolver.js file

exports.linkResolver = (doc) => {
  if (doc.type === "blog") {
    return `/${doc.uid}`;
  }

  return "/";
};
