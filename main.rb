require 'rubygems'
require 'sinatra'
require 'haml'

set :haml, {:format => :html5}

get '/' do
  haml :game
end

get '/mosaic' do
  haml :index
end

get '/gtagame' do
  haml :gta
end

get '/reset.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :reset
end

get '/master.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :master
end

get '/gta.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :gta
end