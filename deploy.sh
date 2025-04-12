
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# initialize git repository if not already initialized
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# Replace 'your-username' with your actual GitHub username
git push -f git@github.com:your-username/hearthside-village.git main:gh-pages

cd -
