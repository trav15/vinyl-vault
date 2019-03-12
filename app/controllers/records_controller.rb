class RecordsController < ApplicationController
  def index
    records = Record.order("created_at DESC")
    render json: records
  end

  def create
    record = Record.create(record_param)
    render json: record
  end

  def update
    record = Record.find(params[:id])
    record.update_attributes(record_param)
    render json: record
  end

  def destroy
    record = Record.find(params[:id])
    record.destroy
    head :no_content, status: :ok
  end
  
  private
    def record_param
      params.require(:record).permit(:title, :artist, :cover_url)
    end
end
