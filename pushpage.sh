npm run build
git cm -am "new page"
#git subtree push --prefix dist origin gh-pages --force
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages