var variables={
  "name": "@ch-post/cen-sortplan-stream-api",
  "version": "1.1.4",
  "description": "API definition - Sortplan S65-1",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "apikana validate-samples"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "0.7.6"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "cen.sortplan",
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