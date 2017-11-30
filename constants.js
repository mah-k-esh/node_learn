var EP_ENDPOINT = "http://4c00070e.ngrok.io";//"http://e416fccc.ngrok.io";
var EP_LOGIN = "/cortex/oauth2/tokens";
var DEFAULT_ITEM = "alien_sku";
var LOOK_UP = "/cortex/lookups/mobee/items?followlocation";
var ADD_TO_CART_PRE = "/cortex/carts/mobee/default/lineitems/items/mobee/";
var ADD_TO_CART = "qgqvhklbnruwk3s7onvxk="
var ADD_TO_CART_ZOOM = "?followlocation&zoom=cart:order:purchaseform"
var MON_ENDPOINT = "https://ep-bot.herokuapp.com";
var FB_NOTIFICATION = "/epOrderDetails";
var FB_SENDER = "1718134594928038";

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
  ADD_TO_CART_PRE,
  ADD_TO_CART,
  ADD_TO_CART_ZOOM,
  MON_ENDPOINT,
  FB_NOTIFICATION,
  FB_SENDER
};