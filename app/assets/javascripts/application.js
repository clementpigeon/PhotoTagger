// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_tree ./models
//= require_tree ./views
//= require_tree ../templates





PT.initialize = function(CURRENT_USER_ID) {
  PT.Photo.fetchByUserId(CURRENT_USER_ID, function(){
    PT.showPhotosIndex();

  });

}

PT.showPhotosIndex = function() {
  $('div#content').empty();
  var photoListView = new PT.PhotosListView();
  $('div#content').append(photoListView.render());

  var photoFormView = new PT.PhotoFormView();
  $('div#content').append(photoFormView.render());
}

PT.showPhotoDetail = function(photo) {
  var photoDetailView = new PT.PhotoDetailView(photo);
  var newContent = photoDetailView.render();
  $('div#content').html(newContent);

}

