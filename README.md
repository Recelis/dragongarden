## Dragon Garden Website

This is the website of Dragon Garden Family Restaurant Gympie.

### Project overview

This project is a React single-page website for Dragon Garden Family Restaurant Gympie.  
It is designed to present the restaurant menu in a simple, fast, and mobile-friendly format for customers.

Tech stack:
- React (Create React App)
- React Router
- Bootstrap / React Bootstrap
- GitHub Pages deployment

### Deployment

This project is deployed to **GitHub Pages** using the `gh-pages` package.

How deployment works:
1. `npm run deploy` triggers `predeploy` automatically.
2. `predeploy` runs `npm run build` to create the production build in `build/`.
3. `deploy` publishes the `build/` folder to the GitHub Pages branch.
4. The live site is served from the configured `homepage` URL:
   `https://www.dragongardenfamilyrestaurant.com/`

### Useful commands

```bash
# install dependencies
npm install

# run local dev server
npm start

# create production build
npm run build

# run tests
npm test

# deploy to GitHub Pages (runs build first via predeploy)
npm run deploy
```