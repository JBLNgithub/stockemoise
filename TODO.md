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
  - new event
    - known locality
    - newConcert format
    - request to backend
  - new event/concert with location and locality
- update concert/news
- protect routes
- datetimes to string
- content formating (replace \n by br/ ??)
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
    - may not be possible if no concert has a desired location (think about it)
    - and allow delete for wrong entries
      - but then deleting already linked location would cause some event without location which should not be permited
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
- wrong password hard to read (change color)
- UI/UX control panel
- hover action : mouse not changing to the hand (which means it's a link)
- simplify router by using BrowserRouter
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
- make planning page and actualités page show only 10, a navigate throw every 10
- add concert form and add news form has an hard coded value for location, if the hard coded location is not in locatios anymore, then it desync (fixe it by fetching the default value if it's an new concert while allowing a setter for modify concert)
- format updated concert fetch a concert instead of receiving it from the loaded form, make it so it is passed instead of calling backend again
- make sidebar scrolling
- make read event return locations row in an object ????????? (forgot why i wrote that)

### more features that i'll most likely never do

- allow admin to see as visitor
- content support markdown syntaxe
- allow filter event being concert or not
- pasts concerts page
- custom form (inscription for new students or for the traditional flea market)
- moderator features
  - crud operator
- admin features
  - crud moderator
- email features (reset password, validate email, forgot password)