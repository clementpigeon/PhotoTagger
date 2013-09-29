class PhotoTaggingsController < ApplicationController

  before_filter :is_photo_owner?, only: [:create]

  def index
    @photo_taggings = PhotoTagging.find_by_photo_id(params[:photo_id])
    render json: @photo_taggings
  end

  def create
    @photo_tagging = PhotoTagging.new(params[:photo_tagging])

    if @photo_tagging.save
      render json: @photo_tagging
    else
      render head: 422
    end
  end

  def is_photo_owner?
    @photo = Photo.find(params[:photo_tagging][:photo_id])
    render head: 403 unless @photo.owner_id == current_user.id
  end


end
