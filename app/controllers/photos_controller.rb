class PhotosController < ApplicationController
  def index
    @photos = User.find(params[:id]).photos

    respond_to do |format|
      format.html
      format.json { render json: @photos }
    end
  end
end