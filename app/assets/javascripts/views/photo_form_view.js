(function(root) {
var PhotoFormView = PT.PhotoFormView = function() {
  this.$el = $('<div>');
  $(this.$el).on("submit", "form", this.submit);
}

PhotoFormView.prototype.render = function(){
  var photo_form_template = JST['photo_form'];
  this.$el.append( photo_form_template() );
  return this.$el;
}

PhotoFormView.prototype.submit = function(event) {
  console.log('submit button pressed');
  event.preventDefault();

  var formData = $(this).serializeJSON();
  var newPhoto = new PT.Photo(formData['photo']);
  $(this).find('input').not(':button, :submit, :reset, :hidden').val('');
  newPhoto.save();
    //   function(photo) {
    //   var $photoLi = $("<li>" + photo.get("url") + "</li>");
    //   $("#content div ul").append($photoLi);
    // }
};










})(this);