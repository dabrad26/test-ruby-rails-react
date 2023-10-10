# Test Ruby on Rails with React Project

Just testing and playing with getting React running with Ruby on Rails.

## Notes on migrating to React

This is using JavaScript. While TypeScript is preferred the extra work to get it running and maintain the packages is probably not worth the benefit for a small project. Note that Shakapacker requires Yarn (instead of NPM)

- `bundle add shakapacker --strict`
- `bundle add react_on_rails --strict`
- `rails shakapacker:install`
- Commit to git (next step requires clean repo)
- `rails generate react_on_rails:install` (Y if you get conflict on webpack)
- Add controllers and items similar to hello_world for each new item. Can continue to be old ERB or React
- `bundle add sass-rails --strict` // Maybe not needed?
- Remove the bundle CSS and created files (.css)
- Add Sass `yarn add sass-loader sass-resources-loader sass`
- Rename `app/assets/stylesheets/application.css` to `application.scss`
- Import all global styles here
- Add `<%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>` or change existing stylsheet links to point to application.

## Useful things

### Console

Open console with `bin/rails console`.

### Run migrations

Use `bin/rails db:migrate` to run migrations.

### Add user

```ruby
user = User.new(email: "email@example.com", body: "Example User")
user.save()
user2 = User.new(email: "admin@example.com", body: "Admin User")
user2.save()
```

## Useful links

- [Rails Getting started](https://guides.rubyonrails.org/getting_started.html)
- [React on Rails](https://www.shakacode.com/react-on-rails/docs/)