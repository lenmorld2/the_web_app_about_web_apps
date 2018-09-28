To checkout files from another branch into current branch
- not switch HEAD to other branch
- will overwrite local files if exist


`git checkout other_branch -- .`

Discard all changes to all .scss files in current branch


`git checkout -- \*.scss`


#### Aliases
git config --global alias.gac '!git add . && git commit -m'

$ git gac "commit message"
