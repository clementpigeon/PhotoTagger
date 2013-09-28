(function(root) {
var PT = root.PT = (root.PT || {});

var PhotosListView = PT.PhotosListView = function() {
  this.$el = $('<div></div>');
}

PhotosListView.prototype.render = function(){
  this.$el.empty();
  $ul = $('<ul>')
  this.$el.append($ul);

  PT.Photo.all.forEach(function(photo) {
    var photoLiCode = $("<li><a id='" + photo.get("id") + "'>" + photo.get("title") + "</a></li>")
    $ul.append(photoLiCode)
  });
  return this.$el;
}

})(this);

