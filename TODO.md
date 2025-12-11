### contents

- write content of
    - harmonie ?
        - photos ?
        - youtube ?
        - historique ?
    - location salle ?
    - stock up ?
        - photo ?
    - cours de musique ?
    - location instrument ?
    - Homecards
- main picture of Stock'Up
- affichage addresse additionel ??
    - dans EventTile ?

### TODO

`TO DEPLOY : add an adapter (model router) in backend to easily request from postgresql or sqlite3`

- hide time on article writing
- redo mobile navbar
- make youtube videos responsive
- limit news page number of news shown (temporary fixe)

`-> Deploy on preprod here`

- implements auth (refresh/access token)
    - change password feature
- make news page paging
- manage images
- make actuality side card show every articles written up to 1 month ago
- limit homeCards scaling
- make protection for concert and news that does not exist outside of articlePage (articlePage should not have the logic for the not found page in it)
- footer links logo (yt, fb)
    - reduce contact button wideness
- make css in css file
    - remove bg-color from index.html
- make contact number not break
    - group tiles with person tiles in it
- wrong password hard to read (change color)
- UI/UX control panel
- hover action : mouse not changing to the hand (which means it's a link)
    - for exemple : disconnect button
- make article.content support markdown syntax
- format updated concert fetch a concert instead of receiving it from the loaded form, make it so it is passed instead of calling backend again
- simplify router by using BrowserRouter
- for protected route, replace useNavigate by <Navigate />
- rename "locality" files to "localities"
- formate concertEvent in backend instead of frontend
- make fetch await once in data Access, so controller can have logic with status code and return await json
- responsive login page and CRUD pages (UI/UX)
- merge templatePage into mainlayout
- make proxy logic if dev or prod (and why is '/api' still in url when it should be replace...)
- validate date : after 'now' (when inserting in db)
    - dynamic date can be compute (see doc)
- make 1st article larger on list pages
- indicate when a concert is coming very soon in sidebar
- allow concert to be visible 1 hour after start and write "started 1 hour ago" in red
- make init news accurate dateRedaction
- isCanceled feature
- make route protection if logged compute after isLoggedIn is called to db (cos if you move to a protected route with link, even if logged in, it will navigate back coz, context is not loaded yet)
- manage CORS (don't allow all..)
- implements transactions when location and locality are created aswell
- use correctly the business layer (mainly for transaction stuff)
- feed facebook ?
- make contact manageable by admin
- write tests (no pain no gain)
- make read event return locations row in an object ????????? (forgot why i wrote that)

### more features that i'll most likely never do

- make sidebar scrolling
- update cover to an already uploaded image
- add concert form and add news form has an hard coded value for location, if the hard coded location is not in locatios anymore, then it desync (fixe it by fetching the default value if it's an new concert while allowing a setter for modify concert)
- CRUD location & locality
    - from editor dashboard
        - may not be possible if no concert has a desired location (think about it)
        - and allow delete for wrong entries
            - but then deleting already linked location would cause some event without location which should not be permited
- make logged users see who wrote articles
- allow admin to see as visitor
- content support markdown syntaxe
- allow filter event being concert or not
- pasts concerts page
- custom form (inscription for new students or for the traditional flea market)
- moderator features
    - crud operator
        - set opterator to either active or inactive but dont delete operator
- admin features
    - crud moderator
- upload images and make albums section
	- make images smaller (and in jpg to take less space ?)
	- set maximum size
- email features (reset password, validate email, forgot password)