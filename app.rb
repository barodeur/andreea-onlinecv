require 'rubygems'
require 'bundler/setup'

require 'sinatra'
require 'haml'
require 'sass'
require 'pry'

class App < Sinatra::Application
  if ENV['PASSWORD']
    use Rack::Auth::Basic do |username, password|
      password == ENV['PASSWORD']
    end
  end

  get '/' do
    haml :index
  end

  get '/styles.css' do
    content_type 'text/css; charset=utf-8'
    sass :styles
  end
end
