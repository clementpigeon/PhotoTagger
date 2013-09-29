(function(root) {
var PT = root.PT = (root.PT || {});

var PhotosListView = PT.PhotosListView = function() {
  this.$el = $('<div>');
  PT.Photo.on('add', this.render.bind(this));
  $(this.$el).on('click', 'a', this.showDetail.bind(this));

}

PhotosListView.prototype.render = function(){
  this.$el.empty();
  $ul = $('<ul>');
  this.$el.append($ul);

  PT.Photo.all.forEach(function(photo) {
    var $photoLi = $("<li>");
    var $liContent = $('<a data-id="' + photo.get("id") + '" href="#">' + photo.get("title") + '</a></li>')
    $photoLi.append($liContent);
    $ul.append($photoLi);
  });
  return this.$el;
}

PhotosListView.prototype.showDetail = function(event) {
  event.preventDefault();
  var link = $(event.target);
  var photoID = link.attr('data-id');
  var photo = PT.Photo.find(photoID);
  console.log(photo);
  PT.showPhotoDetail(photo);
}

})(this);

