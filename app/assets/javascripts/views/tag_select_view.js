(function(root) {
var PT = root.PT = (root.PT || {});

var TagSelectView = PT.TagSelectView = function(photo, clickEvent) {
  this.photo = photo;
  this.clickEvent = clickEvent;
  this.$el = $('<div>');

}

TagSelectView.prototype.render = function() {
  var top = $('img.image_detail').position().top + event.offsetY - 50;
  var left = $('img.image_detail').position().left + event.offsetX - 50;
  var $photo_tag_div = $('<div>')
    .addClass('photo_tag')
    .css({'position': 'absolute', 'left' : left, 'top': top});
  this.$el = ($photo_tag_div);
  return this.$el;
}


})(this);