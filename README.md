# storefront
<br>
### Intigrating with shopify
<hr>
cd to storefront then change the middelware.config.js
<br>
<hr>
module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'SHOP DOMAIN',
          storefrontAccessToken: 'STOREFRONT ACCESS TOKEN'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};

<hr>
domain:"SHOP DOMAIN NAME"
storefrontAccessToken: 'STOREFRONT ACCESS TOKEN'

STOREFRONT ACCESS TOKEN
<br>
in pvt app at the bottom.


