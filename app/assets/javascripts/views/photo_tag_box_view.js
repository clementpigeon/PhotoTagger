(function(root) {
var PT = root.PT = (root.PT || {});

var PhotoTagBoxView = PT.PhotoTagBoxView = function(tag) {
  this.tag = tag;
  var that = this;
  this.$el = $('<div>');
  $(this.$el).on('click', 'button.delete', this.deleteTag.bind(this));
}

PhotoTagBoxView.prototype.render = function(){
  var $existing_tag_div = $('<div>')
    .addClass('existing_tag')
    .css({'left' : this.tag.get('x_pos'), 'top': this.tag.get('y_pos')});

  var username = _.findWhere(USERS, {id: this.tag.get('user_id')}).username
  + '<button data-id="' + this.tag.get("id") + '" class="delete">X</button>';

  var $nameDiv = $('<div class="tagName">').html(username)
  $existing_tag_div.append($nameDiv);
  this.$el.append($existing_tag_div);

  return this.$el;
}

PhotoTagBoxView.prototype.deleteTag = function(event) {
  event.preventDefault();
  console.log('delete tag')

  var link = $(event.target);
  var tagID = link.attr('data-id');
  var tag = PT.PhotoTagging.find(tagID);
  console.log(tag);
  tag.destroy();
}



})(this);
