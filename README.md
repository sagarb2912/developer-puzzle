# T-Mobile Coding Challenge

### Important! Read this First !

### Task 4

```
Technical requirement: the server `stocks-api` should be used as a proxy
to make calls. Calls should be cached in memory to avoid querying for the
same data. If a query is not in cache we should call-through to the API.
```

- Created separte file for server and cache configuration
- Route added for new api in main.js
- Server method is used for catching
- Stock-utils created which contain actual api call
- Api-constant, endpoint & number constant placed in separte file
- ApiUrl is changed to http://localhost:3333/ in environment.ts 
- Changes are made in ngRx effect to configure new api url
- Async pipe added in stock.component template and data binding is corrected in chart component
  template to make google chart working