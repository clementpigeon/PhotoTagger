class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(params[:photo])
    @photo.owner_id = current_user.id

    if @photo.save
      respond_to do |format|
        format.html
        format.json { render json: @photo }
      end
    else
      render head: :unprocessable_entity
    end
  end

  def index
    @photos = User.find(params[:user_id]).photos

    respond_to do |format|
      format.html
      format.json { render json: @photos }
    end
  end

  def destroy
    @photo = Photo.find(params[:id])

    if @photo.destroy
      render status: 200, json: @photo
    else
      render status: 404, json: @photo
    end
  end


end
