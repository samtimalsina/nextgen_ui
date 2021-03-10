globalThis.esmsInitOptions = {
  fetch: async function (url) {
    let newUrl;
    const extension = url.split('?')[0].split('#')[0].split('.').pop();
    if (/esm\.sh/.test(url)) {
      return fetch(url);
    }
    if (extension !== 'js' && /(components|settings)/.test(url)) {
      newUrl = `${url}.js`;
      return fetch(newUrl);
    }
    if (extension !== 'js' && /(internal\/keyboard)/.test(url)) {
      if (/keyboard\//.test(url)) {
        newUrl = `${url}.js`;
      } else {
        newUrl = `${url}/index.js`;
      }
      return fetch(newUrl);
    }
    return fetch(url);
  },
};
