#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Check for any changes in the Git repository
if [[ $(git status --porcelain) ]]; then
  echo "Changes detected. Committing changes..."
  git add .
  git commit -m "Deploying changes to cPanel"
else
  echo "No changes to deploy."
fi

# Push changes to the remote repository
echo "Pushing changes to the remote repository..."
git push origin main

# Trigger cPanel deployment (assuming cPanel has a webhook set up)
echo "Triggering cPanel deployment..."
curl -X POST "https://your-cpanel-domain.com:2083/cpsessXXXXXXXXX/json-api/cpanel" \
     -d "cpanel_jsonapi_user=username" \
     -d "cpanel_jsonapi_apiversion=2" \
     -d "cpanel_jsonapi_module=Deploy" \
     -d "cpanel_jsonapi_func=deploy" \
     -d "domain=yourdomain.com"

echo "Deployment process completed."