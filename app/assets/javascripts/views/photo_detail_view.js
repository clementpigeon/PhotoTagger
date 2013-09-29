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
  console.log($image);
  console.log(event.offsetX + ' ' + event.offsetY );
  $image.position()
  var top = $('img.image_detail').position().top + event.offsetY - 50;
  var left = $('img.image_detail').position().left + event.offsetX - 50;
  $photo_tag_div = $('<div>')
    .addClass('photo_tag')
    .css({'position': 'absolute', 'left' : left, 'top': top});
  $photo_tag_div.insertAfter($('.image_detail'));


}




})(this);