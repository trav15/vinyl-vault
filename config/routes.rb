Rails.application.routes.draw do
  scope '/api/vault' do
    resources :albums
  end
end
