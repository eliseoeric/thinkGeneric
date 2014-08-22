###
# Compass
###

require "susy"
# Change Compass configuration
 compass_config do |config|
    config.sass_options = {:debug_info => false}
    config.sass_options = {:line_comments => false}
	config.output_style = :expanded
 end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

set :font_dir, 'css/fonts'

set :markdown_engine, :redcarpet
set :markdown, 
    :layout_engine => :erb, 
    :tables => true, 
    :autolink => true, 
    :smartypants => true, 
    :superscript => true

# page "about.html", :layout => :about_layout
# page "services.html", :layout => :services_layout
# page "contact.html", :layout => :contact_layout
# page "portfolio.html", :layout => :portfolio_layout
# page "gridtest.html", :layout => :gridtest_layout



activate :directory_indexes


# Build-specific configuration
configure :build do
  compass_config do |config|
    config.sass_options = {:debug_info => false}
    config.sass_options = {:line_comments => false}
	config.output_style = :expanded
  end

  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
 activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
