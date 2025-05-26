
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23540, hash: '7f5c5b35ab561e321536ca53eb00d96c2ec79d5d276d035c44f1d06ea5d4d123', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17114, hash: 'e518690756b102062651e10708ca899aaf5d4ea0c8068f0cbfcdc80889cef1eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP4765U6.css': {size: 7136, hash: 'rpAAucZ28J4', text: () => import('./assets-chunks/styles-GP4765U6_css.mjs').then(m => m.default)}
  },
};
