# Tae Kim JR Portfolio Site
## Requirements
```
Node: brew install node
Heroku Toolbelt: https://toolbelt.heroku.com
```

## Developer Setup
```
npm install
npm run build
```

## Running Locally
```
npm run start-dev
```

## Heroku Deployment
### Create the app (first time deploying)
```
open terminal
cd /path/to/project
heroku create nameofproject
```

### Deply the app
```
npm run build
git add .
git commit -m "Name Of Commit"
git push heroku master
heroku open
```