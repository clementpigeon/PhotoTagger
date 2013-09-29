(function(root) {

var PhotoDetailView = PT.PhotoDetailView = function(photo){
  this.photo = photo;
  this.$el = $('<div>');
  this.$el.on('click', '#back', PT.showPhotosIndex);
  this.$el.on('click', '.image_detail', this.popSelectView.bind(this));
};

PhotoDetailView.prototype.render = function() {
  var photo = this.photo;
  var template = JST['photo_detail'];
  this.$el.append(template({ "photo" : photo.attributes }));
  return this.$el;
};

PhotoDetailView.prototype.popSelectView = function(event) {
  var $image = $(this.target);
  var tag_select_view = new PT.TagSelectView($image, event).render();
  tag_select_view.insertAfter($('.image_detail'))
}




})(this);