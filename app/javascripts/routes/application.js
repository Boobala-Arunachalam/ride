export default Em.Route.extend({
  model: function() {
    return ["red", "blue", "green"];
  },
  renderTemplate: function() {
   this.render('application');
  }
});