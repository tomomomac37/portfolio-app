# require 'digest/md5'
class ApplicationController < ActionController::Base
  
    before_action :authenticate_user!
  
    REALM = 'SecretZone'.freeze
    USERS = { 'user1' => Digest::MD5.hexdigest(['user1', REALM, 'password'].join(':'))}.freeze
  
    # private
  
    # def authenticate
    #   authenticate_or_request_with_http_digest(REALM) do |username|
    #     USERS[username]
    #   end
    # end
    
    before_action :configure_permitted_parameters, if: :devise_controller?
  
    protected
  
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
      devise_parameter_sanitizer.permit(:sign_in, keys: [:name])
    end
    
    def after_sign_in_path_for(resource)
      user_path(resource)
    end
    
    
    
    
  end
  
