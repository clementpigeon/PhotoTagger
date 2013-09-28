(function(root) {
var PT = root.PT = (root.PT || {});

var PhotosListView = PT.PhotosListView = function() {
  this.$el = $('<div>');
  PT.Photo.on('add', this.render.bind(this));
}

PhotosListView.prototype.render = function(){
  this.$el.empty();
  $ul = $('<ul>');
  this.$el.append($ul);

  PT.Photo.all.forEach(function(photo) {
    var $photoLi = $("<li>").text(photo.get("title"));
    $ul.append($photoLi);
  });
  return this.$el;
}

})(this);

