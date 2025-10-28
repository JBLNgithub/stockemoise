### contents

- write content of
  - harmonie ?
    - photos ?
  - location salle ?
  - stock up ?
    - photo ?
  - cours de musique ?
  - location instrument ?
  - Homecards
- main picture of stock up
- default picture
  - news
  - concert
- affichage addresse additionel ??
  - dans sideLink
  - dans EventTile

## before demo

- crud
  - new event/concert with location
  - new event/concert with location and locality
- update concert/news
- protect routes
- datetimes to string
- setup a few cover to show

### before deploy

- implements image upload
- track author of articles
- complete initDatas
- make a footer
  - links to youtube, facebook
  - connection for members
  - links to contact
- manage images
- make youtube videos responsive
- limit homeCards scaling
- change password
- update location & locality
  - update from article
- make sideLink reload if same type of article (cause it's not accuratly loading when staying on the same type, possibly because article page is not unmounting, better fix may even be change state value without unmounting and remounting, wait isn't state remounting anyway ?)
- responsive UI for every pages (except user UIs)

### after deploy

- make protection for concert and news that does not exist outside of articlePage (articlePage should not have the logic for the not found page in it)
- sidebar
  - put sidelink into sidebar
    - transfer the list as props
  - hide sidebar element if empty
- make css in css file
  - remove bg-color from index.html
- make contact number not break
  - group tiles with person tiles in it
- UI/UX control panel
- simplify router by using BrowserRouter
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
- delete location and delete locality features
- isCanceled feature
- implements auth (refresh/access token)
- manage CORS (don't allow all..)
- use correctly the business layer (mainly for transaction stuff)
- implements transactions when location and locality are created aswell
- make contact manageable by admin
- feed facebook ?
- make country a separate table
- write tests (no pain no gain)
- allow admin to see as visitor
- make sidebar scrolling
- make read event return locations row in an object ????????? (forgot why i wrote that)

### more features that i'll most likely never do

- content support markdown syntaxe
- allow filter event being concert or not
- pasts concerts page
- custom form (inscription for new students or for the traditional flea market)
- moderator features
  - crud operator
- admin features
  - crud moderator
- email features (reset password, validate email, forgot password)