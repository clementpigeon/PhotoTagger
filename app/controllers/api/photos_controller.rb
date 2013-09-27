class PhotosController < ApplicationController
  def index
    @photos = Photo.find_by_owner_id(params[:user_id])

    respond_to do |format|
      format.html
      format.json { render json: @photos }
    end
  end

  def create
    @photo = Photo.new(params[:photo])
    @photo.owner_id = current_user.id

    if @photo.save
      render json: @photo
    else
      render head: :unprocessable_entity
    end
  end

end
