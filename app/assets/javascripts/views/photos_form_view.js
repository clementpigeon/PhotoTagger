(function(root) {
var PhotosFormView = PT.PhotosFormView = function() {
  this.$el = $('<div />');

}

PhotosFormView.prototype.render = function(){
  var photo_form_template = (JST['photo_form']);
  this.$el.append(photo_form_template());
  return this.$el;

}

PhotosFormView.prototype.submit = function(callback) {


  $(this.$el).on("submit", "form", function(event) {
    event.preventDefault();
    var formData = $(this).serializeJSON();
    var newPhoto = new PT.Photo(formData['photo']);
    // console.log(newPhoto);

    newPhoto.save(callback
      // function(photo) {
  //     var $photoLi = $("<li>" + photo.get("url") + "</li>");
  //     $("#user_photos").append($photoLi);
  //   }
    );
  });
}









})(this);