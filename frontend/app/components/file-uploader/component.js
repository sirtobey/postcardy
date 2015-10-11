import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  class: 'small',
  filesDidChange: function(files) {
    var uploadUrl = this.get('url');

    this.sendAction("uploading");

    var uploader = EmberUploader.Uploader.create({
      paramName: 'image',
      url: uploadUrl
    });

    uploader.on('didUpload', (e) => {
      this.sendAction("setImage", e.image);
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]);
    }
  },
});
