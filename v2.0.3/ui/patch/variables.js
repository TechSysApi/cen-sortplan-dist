var variables={
  "name": "@ch-post/cen-sortplan-stream-api",
  "version": "2.0.3",
  "description": "API definition - Sortplan S65-1",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "0.9.19",
    "apikana-defaults": "0.0.71",
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "app.techsys.cen.sortplan",
    "shortName": "cen-sortplan",
    "projectName": "cen-sortplan-stream-api",
    "npmPackage": "@ch-post/cen-sortplan-stream-api",
    "title": "API definition - Sortplan S65-1",
    "plugins": [
      "dotnet"
    ],
    "dotnetNamespace": "Ch.Post.PL.Api.CenSortplan.V1",
    "dotnetPackageId": "Ch.Post.PL.Api.CenSortplan",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}