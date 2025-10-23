## to deploy

```
git add dist -f
git commit -m "msg"
git subtree push --prefix dist origin gh-pages

there possibly is a way to update the deployment
```

[React Doc](https://react.dev/)

[Tailwind Doc](https://tailwindcss.com/docs/installation/using-vite)

## Template json (temporary until back-end)

### concert

```json
"id": 0,
"title": "",
"content": "",
"dayRedaction" : 0,
"monthRedaction" : 0,
"yearRedaction" : 0,
"cover" : "",
"dayStart" :0,
"monthStart" :0,
"yearStart" :0,
"hourStart" :0,
"minuteStart" :0,
"location" : {
    "name" : "",
    "street" : "",
    "number" : 0,
    "codePostal" : 0,
    "city" : ""
}
```

### news

```json
"id": 0,
"title": "",
"content": "",
"dayRedaction" : 0,
"monthRedaction" : 0,
"yearRedaction" : 0,
"cover" : ""
```

```
window.scrollTo(0, 0)
```

## Control panel

- all pages
    - se deconnecter
- all news page
    - new news
    - new eventNews
- single news
    - modify
    - delete
- all concerts page
    - new concert
    - new eventNews
- single concert
    - modify
    - delete