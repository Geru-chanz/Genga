require 'bundler/setup'
Bundler.require
gem 'sinatra'

get '/' do
  erb :index
end