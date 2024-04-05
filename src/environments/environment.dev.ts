// const url = 'http://api.travelagent.tube';
// const webUrl = 'https://travelagent.tube/';
const tubeUrl = 'https://video.travelagent.tube/'

const url = 'http://192.168.1.22:8080';
const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.travelagent.tube',
  stripe_key: 'pk_test_51MwOHTSJJZB3pTDyqpZk5NJDaWkbuGiruTp79We9CcR2oODObX93TleYFTJj2qLowRuRL1DRTSIl8Vb1YiFyW7e900BYWlZKSM',
  siteKey: '0x4AAAAAAAUwBojCBa1YQfJt',
  secretKey: '0x4AAAAAAAUwBhIek0zdK4eShLRfbRAOAUQ',
};
