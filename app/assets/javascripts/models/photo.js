(function(root) {
  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function(obj) {
    this.attributes = _.extend(obj);
  }

  Photo.prototype.get = function(attrName) {
    return this.attributes[attrName];
  }

  Photo.prototype.set = function(attrName, val) {
    this.attributes[attrName] = val;
  }

  Photo.all = []

  Photo.prototype.save = function(callback) {
    // add validation that the url does not already have an idea
    var that = this;
    var ajaxOptions = {
        url: '/api/photos.json',
        type: "POST",
        data: {
          photo: //this.attributes
          {
            owner_id: this.get("owner_id"),
            url: this.get("url"),
            title: this.get("title")
          }
        },
        success: function(data) {
          console.log('photo create success ' + data);
          that.set('id', data['id']);
          Photo.all.push(that);
          //callback(that);
        },
        failure: function(res){
          console.log('photo create failure ' + res);
          //
        }
      }
    // console.log(ajaxOptions);
    $.ajax(ajaxOptions);
  };

  Photo.fetchByUserId = function(userId, callback) {
    $.ajax({
      url: '/api/users/' + userId + '/photos.json',
      type: 'GET',
      success: function(data) {

        console.log('photo fetchByUserId success');
        _.map(data, function(photoJSON) {

          var newPhoto = new Photo(photoJSON);
          Photo.all.push(newPhoto);
          return newPhoto;
        });

        callback(data);
      },
      failure: function(res) {
        console.log('photo fetchByUserId failure ' + res);
        //
      }
    });
  }

})(this);