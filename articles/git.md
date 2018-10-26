#### discarding changes

To checkout files from another branch into current branch
- not switch HEAD to other branch
- will overwrite local files if exist

`git checkout other_branch -- .`


Discard all changes to all .scss files in current branch

`git checkout -- \*.scss`


Discard some commits without using `git revert`, i.e. lose history

To lose all uncommitted changes in working dir

`git reset --hard`

To lose all commits after abc123, putting HEAD back to abc123

`git reset --hard abc123`

[ref] https://www.theserverside.com/video/How-to-use-the-git-reset-hard-command-to-change-a-commit-history 


#### Aliases
git config --global alias.gac '!git add . && git commit -m'

$ git gac "commit message"


#### Markdown

- Images

`![alt text](https://raw.githubusercontent.com/username/projectname/branch/path/to/img.png)`
