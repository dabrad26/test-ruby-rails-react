# Test Ruby on Rails with React Project

Just testing and playing with getting React running with Ruby on Rails.

## Notes on migrating to React

This is using JavaScript. While TypeScript is preferred the extra work to get it running and maintain the packages is probably not worth the benefit for a small project.

- `bundle add shakapacker --version=7.0.1 --strict`
- `bundle add react_on_rails --version=13.3.1 --strict`
- `rails shakapacker:install`
- Commit to git (next step requires clean repo)


## Useful things

### Console

Open console with `bin/rails console`.

### Run migrations

Use `bin/rails db:migrate` to run migrations.

### Create component

<!-- Run `rails g react:component UserList name:string` -->

### Add user

```ruby
user = User.new(email: "email@example.com", body: "Example User")
user.save()
user2 = User.new(email: "admin@example.com", body: "Admin User")
user2.save()
```

## Useful links

- [Rails Getting started](https://guides.rubyonrails.org/getting_started.html)
- [React Rails](https://guides.rubyonrails.org/getting_started.html)