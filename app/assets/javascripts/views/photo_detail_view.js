(function(root) {

var PhotoDetailView = PT.PhotoDetailView = function(photo){
  this.photo = photo;
  this.$el = $('<div>');
  this.$el.on('click', '#back', PT.showPhotosIndex)
};

PhotoDetailView.prototype.render = function() {
  var photo = this.photo;
  var template = JST['photo_detail'];
  this.$el.append(template({ "photo" : photo.attributes }));
  return this.$el;
};





})(this);