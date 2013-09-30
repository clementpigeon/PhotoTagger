(function(root) {

var PhotoDetailView = PT.PhotoDetailView = function(photo){
  this.photo = photo;
  this.$el = $('<div class="photo_detail_view">');
  this.$el.on('click', '#back', PT.showPhotosIndex);
  PT.PhotoTagging.on('add', this.render.bind(this));
  PT.PhotoTagging.on('remove', this.render.bind(this));
  this.$el.on('click', '.image_detail', this.popSelectView.bind(this));
  $(document).on('keydown', this.escape.bind(this));
  this.photoSelectView = null;
};

PhotoDetailView.prototype.render = function() {
  this.$el.empty();
  var photoDetailView = this;
  var photo = this.photo;
  var template = JST['photo_detail'];
  this.$el.append(template({ "photo" : photo.attributes }));
  PT.PhotoTagging.fetchByPhotoId(this.photo.get('id'), function(){

        photoDetailView.tags = _(PT.PhotoTagging.all).where({'photo_id': photo.id});
        photoDetailView.tags.forEach(function(tag){
          var photoTagBoxView = new PT.PhotoTagBoxView(tag);
          photoDetailView.$el.append(photoTagBoxView.render())
        })
  });
  return this.$el;
};

PhotoDetailView.prototype.popSelectView = function(event) {
  var $image = $(this.target);
  if (this.tag_select_view) {
    this.tag_select_view.remove();
  }
  this.tag_select_view = new PT.TagSelectView(this.photo, event).render();
  this.tag_select_view.insertAfter($('.image_detail'))
}

PhotoDetailView.prototype.escape = function(event) {
  console.log(event);
  if (event.which == 27){
    if (this.tag_select_view) {
      this.tag_select_view.remove();
    }
  }
}


})(this);