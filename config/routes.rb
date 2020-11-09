Rails.application.routes.draw do
  # get 'project/index'
  # get 'project/update'
  # get 'project/create'
  get '/' => 'main#index'

  post 'main/update' => 'main#update'

  post 'main/create' => 'main#create'
  #post 'project/create' => 'project#create'
  #get 'main/index'
  #get 'main/create'
  #get 'main/update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
