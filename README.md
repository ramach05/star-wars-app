> **Archived.** Learning project from 2021, kept as a starting point.

# Star Wars App

React + TypeScript app (Create React App) listing characters from the public `swapi.dev` API. The HTTP layer is built on RxJS and fp-ts `RemoteData`: requests are observables that emit initial/loading/failure/success states, responses are typed without `any`.

Practice project for typed API handling and functional patterns; the UI is intentionally minimal.

## Run

```bash
yarn install
yarn start
```
