import { AppModel, PreviewModel } from "ride/models/application";

export default Em.ObjectController.extend({
	content: AppModel.create(),
  
  fontFamilies: Em.A([
    { name: 'Georgia, serif', group: 'serif' },
    { name: 'Palatino Linotype, serif', group: 'serif' },
    { name: 'Times New Roman, serif', group: 'serif' },
    { name: 'Arial, Helvetica, sans-serif', group: 'Sans-Serif' },
    { name: '"Arial Black", Gadget, sans-serif', group: 'Sans-Serif' },
    { name: '"Comic Sans MS", cursive, sans-serif', group: 'Sans-Serif' },
    { name: '"Lucida Sans Unicode", "Lucida Grande", sans-serif', group: 'Sans-Serif' },
    { name: 'Tahoma, Geneva, sans-serif', group: 'Sans-Serif' },
    { name: '"Trebuchet MS", Helvetica, sans-serif', group: 'Sans-Serif' },
    { name: 'Verdana, Geneva, sans-serif', group: 'Sans-Serif' },
    { name: '"Courier New", Courier, monospace', group: 'monospace' },
    { name: '"Lucida Console", Monaco, monospace', group: 'monospace' }
  ]),
  
  setContent: function() {
    this.set('content', AppModel.create());
    this.set('preview', PreviewModel.create({}));
  },
  
  actions: {
    previewTheme: function() {
      var content = this.get('content');
      this.set('preview', PreviewModel.create(content));
    },
    saveandDownload: function() {
      
    },
    reset: function() {
      this.setContent();
    }
  }
});