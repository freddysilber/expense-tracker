class UsersController < ApplicationController

	def create
		user = User.new(user_params)
		if user.save
			render json: UserSerializer.new(user)
		else
			raise user.errors
			render json: UserSerializer.new(user.errors)
		end
	end

	private

	def user_params
		params.require(:user).permit(
		  :username,
		  :password_digest
		)
	  end
end
