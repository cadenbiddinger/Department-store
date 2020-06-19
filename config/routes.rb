Rails.application.routes.draw do
  namespace :api do
    resources :stores
  end
end
