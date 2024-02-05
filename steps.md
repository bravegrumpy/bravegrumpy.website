# Basic Ruby on Rails app

1. Make sure you have a clean installation of Ruby and Rails.
    1. Remove ruby installation with purging all files:
        `sudo apt-get remove ruby-full --purge`
    1. Remove current installation, completely and remove all existing gems.
        1. use command `sudo rm -r /var/lib/gems` to completely remove existing "gems"
        - Gems are the packages used in ruby
    1. Ensure that you have yaml installed in your ubuntu instance
        `sudo apt-get install libyaml-dev`
        - This *should* fix the psych dependancy issue.
    1. Install the full version of ruby
        `sudo apt-get install ruby-full`
    1. Check that the installation worked
        `ruby --version`
    1. Use Ruby's gem installer to install rails. This is analagous to using pip to install Django.
        - Don't forget to use sudo, becasue it is installing to /var/lib/gems, which is a "root" folder.
        `sudo gem install rails`
    1. Again, check to ensure that you have rails installed with `rails --version`
1. Start doing stuff that seems oddly similar to django things, but with ruby as the language. 
    - Ruby is alsy a DRY language. It also use the MVC model. So ultimately it should feel suuuuuper similar to Django. 

## Git source control

There is this thing called a submodule. This allows you to ehrm.... save your work in a different repo.
Basically, I am able to reference [bravegrumpy.website.ruby.blog](https://github.com/bravegrumpy/bravegrumpy.website.ruby.blog), which is where the blog repository is *actually* stored, within this repository. And somehowe it all works.

This is pretty cool.

I am curious to see how this will work with Amplify.

### More notes abot git and branching

I'm trying this new thing called Graphite. It's a thing that basically goes on top of github, and creates branches after changes are made, rather than before. I wonder what it is going to make of my 16 branch monstrosity.

Again, I have a lot of stuff in branches that are.... there so that I can see why I did them.
This now is not a monorepo, as ruby-on-rails showed me how sub-modules work. 

However, this is a playground, so it is edited ad-hoc. 