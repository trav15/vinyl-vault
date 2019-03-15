class AddNotesToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :notes, :string
  end
end
