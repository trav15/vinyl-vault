class AlbumsController < ApplicationController
  def index
    albums = Album.order("created_at DESC")
    render json: albums
  end

  def show
    album = Album.find(params[:id])
    render json: album
  end

  def create
    album = Album.create(album_param)
    render json: album
  end

  def update
    album = Album.find(params[:id])
    album.update_attributes(album_param)
    render json: album
  end

  def destroy
    album = Album.find(params[:id])
    album.destroy
    head :no_content, status: :ok
  end

  private
    def album_param
      params.require(:album).permit(:title, :artist, :cover_url, :notes)
    end
end
