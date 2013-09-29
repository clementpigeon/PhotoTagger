(function(root) {
var PT = root.PT = (root.PT || {});

var TagSelectView = PT.TagSelectView = function(photo, clickEvent) {
  console.log(photo);
  var that = this;
  this.photo = photo;
  this.clickEvent = clickEvent;
  this.$el = $('<div>');

  this.x_pos = $('.image_detail').position().left + clickEvent.offsetX - 50;
  this.y_pos = $('.image_detail').position().top + clickEvent.offsetY - 50;

  this.$el.on('click', 'li', this.selectTagOptions.bind(this))

}

TagSelectView.prototype.render = function() {
  // var top = $('img.image_detail').position().top + event.offsetY - 50;
  // var left = $('img.image_detail').position().left + event.offsetX - 50;
  var $photo_tag_div = $('<div>')
    .addClass('photo_tag')
    .css({'position': 'absolute', 'left' : this.x_pos, 'top': this.y_pos});
  this.$el.append($photo_tag_div);
  var select_div_template = JST['photo_tag_options'];
  var $select_div = select_div_template({'users': USERS});
  $photo_tag_div.append($select_div);
  return this.$el;
}

TagSelectView.prototype.selectTagOptions = function(event){
    var $li = $(event.target);
    var user_id = $li.attr('data-id');
    var new_tag_data = {
      'user_id': user_id,
      "photo_id": this.photo.get('id'),
      'x_pos': this.x_pos,
      'y_pos': this.y_pos
    };
    console.log(new_tag_data);
    var new_tag = new PT.PhotoTagging(new_tag_data);
    new_tag.save();
    this.$el.remove();
  }


})(this);