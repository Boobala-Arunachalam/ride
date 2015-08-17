var isEmpty = Em.isEmpty;

var AppModel = Em.Object.extend({
  color: "ADDFFF",
  font: "Papyrus",
  header: "",
  motto: "",
  footer: ""
});

var PreviewModel = Em.Object.extend({
  themeFont: function() {
    var font = this.get('font');
    return "font-family: " + ((isEmpty(font)) ? 'Papyrus': font);
  }.property('font'),
  themeHeader: function() {
    return this.get('header') || 'My Best Site';
  }.property('header'),
	themeMotto: function() {
    return this.get('motto') || 'I Can, I Will';
  }.property('motto'),
  themeFooter: function() {
    return this.get('footer') || 'watch me!!';
  }.property('footer')
});

export { AppModel, PreviewModel };