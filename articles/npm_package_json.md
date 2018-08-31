



# How about Yarn?







## npm eject

when using `create-react-app`,
ejecting allows you to open up all the abstractions, exposing all the features, setup that was hidden to you before.

before:
```
node_modules/
public/
src/
.gitignore
package.json
README.md
yarn.lock
```

after:
```
node_modules/
public/
src/
config/
  -jest
scripts/
.gitignore
package.json
README.md
yarn.lock
```
