Rails.application.routes.draw do
  scope '/api/vault' do
    resources :records
  end
end
