# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'jasmine', :jasmine_url => 'http://localhost:8888/' do
  watch(%r{spec/javascripts/spec\.(js\.coffee|js|coffee)$})         { "spec/javascripts" }
  watch(%r{spec/javascripts/.+_spec\.(js\.coffee|js|coffee)$})
  watch('jquery.paginate.js')
end
