export default Em.Route.extend({
	afterModel: function() {
    this.controllerFor('application').setContent();
  }
});