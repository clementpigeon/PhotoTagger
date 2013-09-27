NewAuthDemo::Application.routes.draw do
  root :to => "users#show"

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  namespace "api", :defaults => { :format => :json } do
    resources :photo_taggings, only: [:create]
    resources :users do
      resources :photos, only: [:index]
    end

    resources :photos, only: [:create, :show] do
      resources :photo_taggings, only: [:index]
    end

  end

end
