/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0l4cctqt8tdt8mf")

  // remove
  collection.schema.removeField("ovmaoocd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p5njmorz",
    "name": "product_stocks",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0l4cctqt8tdt8mf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovmaoocd",
    "name": "product_stocks",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("p5njmorz")

  return dao.saveCollection(collection)
})
