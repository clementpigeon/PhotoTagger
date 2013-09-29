(function(root) {
  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function(obj) {
    this.attributes = _.extend(obj);
  }

  Photo.all = [];

  Photo._events = {};

  Photo.find = function(id) {
    var result;
    this.all.forEach(function(photo){
      if (photo.get('id') == id) {
        result = photo;
      };
    });
    return result;
  }

  Photo.prototype.get = function(attrName) {
    return this.attributes[attrName];
  }

  Photo.prototype.set = function(attrName, val) {
    this.attributes[attrName] = val;
  }

  Photo.prototype.save = function(callback) {
    // add validation that the url does not already have an ID
    var that = this;
    var ajaxOptions = {
        url: '/api/photos.json',
        type: "POST",
        data: {
          photo: this.attributes
        },
        success: function(data) {
          console.log('photo create success');
          console.log(data);

          that.set('id', data['id']);
          Photo.all.push(that);
          Photo.trigger('add');
          //callback(that);
        },
        failure: function(res){
          console.log('photo create failure');
          console.log(res);

          //
        }
      }
    $.ajax(ajaxOptions);
  };

  Photo.fetchByUserId = function(userId, callback) {
    $.ajax({
      url: '/api/users/' + userId + '/photos.json',
      type: 'GET',
      success: function(data) {
        console.log('photo fetchByUserId success');
        _.each(data, function(photoJSON) {
          var newPhoto = new Photo(photoJSON);
          Photo.all.push(newPhoto);
        });
        callback(data);
      },
      failure: function(res) {
        console.log('photo fetchByUserId failure');
        console.log(res);
      }
    });
  };

  Photo.on = function(eventName, callback) {
    if (_.has(this._events, eventName)) {
      this._events[eventName] += callback;
    }
    else {
      this._events[eventName] = [callback];
    }
  }

  Photo.trigger = function(eventName) {
    this._events[eventName].forEach(function(event){
      event();
    });
  }

})(this);