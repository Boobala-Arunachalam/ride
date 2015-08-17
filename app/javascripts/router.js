import Ride from "ride/app";

var Router = Ember.Router.extend();

Router.map(function() {
  this.resource("home", {path: "/"});
});

export default Router;