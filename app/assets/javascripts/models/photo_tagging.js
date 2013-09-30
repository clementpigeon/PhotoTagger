(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoTagging = PT.PhotoTagging = function(obj) {
    this.attributes = _.extend(obj);
  }

  PhotoTagging.all = [];

  PhotoTagging._events = {};

  PhotoTagging.find = function(id) {
    var result;
    this.all.forEach(function(photo_tagging){
      if (photo_tagging.get('id') == id) {
        result = photo_tagging;
      };
    });
    return result;
  }

  PhotoTagging.prototype.get = function(attrName) {
    return this.attributes[attrName];
  }

  PhotoTagging.prototype.set = function(attrName, val) {
    this.attributes[attrName] = val;
  }

  PhotoTagging.prototype.save = function(callback) {

    var that = this;
    var ajaxOptions = {
        url: '/api/photo_taggings.json',
        type: "POST",
        data: {
          photo_tagging: this.attributes
        },
        success: function(data) {
          console.log('PhotoTagging create success');
          that.set('id', data['id']);
          PhotoTagging.all.push(that);
          PhotoTagging.trigger('add');
        },
        failure: function(res){
          console.log('PhotoTagging create failure');
          console.log(res);
        }
      }
    $.ajax(ajaxOptions);
  };

  PhotoTagging.fetchByPhotoId = function(photoId, callback) {
    $.ajax({
      url: '/api/photos/' + photoId + '/photo_taggings.json',
      type: 'GET',
      success: function(data) {
        PhotoTagging.all = [];
        console.log('photoTagging fetchByPhotoId success');
        _.each(data, function(photoTaggingJSON) {
          var newPhotoTagging = new PhotoTagging(photoTaggingJSON);
          PhotoTagging.all.push(newPhotoTagging);
        });
        callback(data);
      },
      failure: function(res) {
        console.log('photoTagging fetchByUserId failure');
        console.log(res);
      }
    });
  };

  PhotoTagging.on = function(eventName, callback) {
    if (_.has(this._events, eventName)) {
      this._events[eventName].push(callback);
    }
    else {
      this._events[eventName] = [];
      this._events[eventName].push(callback)
    }
  }

  PhotoTagging.trigger = function(eventName) {
    this._events[eventName].forEach(function(event){
      event();
    });
  }

})(this);