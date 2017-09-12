var EP_ENDPOINT = "http://69dfd075.ngrok.io";//"http://e416fccc.ngrok.io";
var EP_LOGIN = "/cortex/oauth2/tokens";
var DEFAULT_ITEM = "alien_sku";
var LOOK_UP = "/cortex/lookups/mobee/items?followlocation";
var ADD_TO_CART = "/cortex/carts/mobee/default/lineitems/items/mobee/qgqvhklbnruwk3s7onvxk=?followlocation&zoom=cart:order:purchaseform"

var FB_NOTIFICATION = "";

var success = {
    state: "success"
};

var failure = {
  state: "failure"
}

module.exports = {
  bar: function () {
    // whatever
  },
  EP_ENDPOINT,
  EP_LOGIN,
  success,
  failure,
  DEFAULT_ITEM,
  LOOK_UP,
  ADD_TO_CART
};