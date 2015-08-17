var isEmpty = Em.isEmpty;

export default Em.Component.extend({
  themeFont: function() {
    var font = this.get('font');
    return "font-family: " + (isEmpty(font)) ? 'Papyrus': font;
  }.property('font'),
});