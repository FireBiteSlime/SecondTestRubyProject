class MainController < ApplicationController
  def index
    @todo = Todo.all.sort {|a, b|b.created_at <=> a.created_at}
		@projects = Project.all

    respond_to do |format|
			format.html # index.html.erb
			format.json  { render :json => {:todo => @todo, :projects => @projects }}
		end

  end

  def create
    if (params[:title].empty?)
      Todo.create(text: params[:text], isCompleted: false, project_id: params[:project_id])
    else
      project = Project.create(title:params[:title])
      Todo.create(text: params[:text], isCompleted: false, project_id: project["id"])
    end
    redirect_to action: 'index'
  end

  def update
    todo = Todo.find(params[:todo_id])
		todo.isCompleted = !todo.isCompleted
		todo.save
		redirect_to action: 'index'
  end

end
