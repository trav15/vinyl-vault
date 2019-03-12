Rails.application.routes.draw do
  scope '/api/records' do
    resources :records
  end
end
