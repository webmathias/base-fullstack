# Structure
- backend
  - src
   - index.js
   - api 
     - index.js
     - example.js
     - db
        - example.js
- frontend
  - src
    - index.jsx
    - index.html
    - modules
      - app
        - App.css
        - App.jsx
        - appReducer.jsx
        - Loader.css
        - Loader.jsx
      - example
        - Module.jsx
    - router
      - AppMenu.jsx
      - AppRouter.jsx
      
# Development:
```
    docker-compose -f docker-compose.dev.yml up
```
# Production:
```
    cd frontend
    yarn install
    yarn build
    docker-compose build
```
