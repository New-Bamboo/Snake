require 'rubygems'
require 'sinatra'
require 'main'


Sinatra::Base.set(:run, false)
Sinatra::Base.set(:env, ENV['RACK_ENV'])


run Sinatra::Application
