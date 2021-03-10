const notUrl = url => url.substr(0, 4) !== 'http';

const notBare = str => str.startsWith('/') || str.startsWith('./') || str.startsWith('../');

export default function externalToESM({
  imports = {},
} = {}) {
  const mapping = new Map();

  return {
    name: 'external-to-esm',
    buildStart() {
      Object.keys(imports).forEach((key) => {
        const value = Array.isArray(imports[key]) ? imports[key][0] : imports[key];

        if (notBare(key)) return;

        if (notUrl(value)) throw Error('Target for import specifier must be an absolute URL.');

        mapping.set(key, value);
      });
    },

    resolveId(source) {
      const url = mapping.get(source);
      if (url) {
        return {
          id: url,
          external: true,
        };
      }

      return null;
    },
  };
}
