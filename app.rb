require 'rubygems'

require 'sinatra'
require 'haml'
require 'sass'

get '/' do
  haml :index
end

get '/styles.css' do
  content_type 'text/css; charset=utf-8'
  sass :styles
end
