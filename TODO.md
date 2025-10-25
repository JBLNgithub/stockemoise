### contents

- write content of
  - harmonie ?
    - photos ?
  - location salle ?
  - stock up ?
    - phots ?
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

### before deploy

- CRUD
- protect routes
- manage date syntaxe ("oct" for tile, "october" for article page)
- make a footer
  - links to youtube, facebook
  - connection for members
  - links to contact
- implements image upload
- manage images
- make youtube videos responsive
- limit homeCards scaling
- track author of articles
- change password

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
- make fetch await once in data Access, so controller can have logic with status code and return await json
- responsive login page and CRUD pages
- merge templatePage into mainlayout
- make proxy logic if dev or prod (and why is '/api' still in url when it should be replace...)
- make 1st article larger on list pages
- indicate when a concert is coming very soon in sidebar
- allow concert to be visible 1 hour after start and write "started 1 hour ago" in red
- UI isCanceled
- allow admin to see as visitor
- make contact manageable by admin
- feed facebook ?
- allow filter event being concert or not
- pasts concerts page

### going futher ?

- members capabilities ?