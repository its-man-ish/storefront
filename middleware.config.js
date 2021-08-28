module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'mybluebacks.myshopify.com',
          storefrontAccessToken: '828ad7d04ff40c250cc55d1c3591af57'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
