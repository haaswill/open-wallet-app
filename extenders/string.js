const string = Object.assign(String.prototype, {
  replaceAll(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
  },
  truncate(length) {
    return this.substring(0, length);
  }
});

export { string };
