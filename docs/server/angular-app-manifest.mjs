
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/HelpySite/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23550, hash: '392df52fe1a1abb6bff799e88e968248b16ccb214f05f2b7a3dd1705ea0c474c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17124, hash: 'fbbcad7eef80ed931fdaf7b6c8543725560f354aefda9bd1df8c6ecdef0736a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GP4765U6.css': {size: 7136, hash: 'rpAAucZ28J4', text: () => import('./assets-chunks/styles-GP4765U6_css.mjs').then(m => m.default)}
  },
};
