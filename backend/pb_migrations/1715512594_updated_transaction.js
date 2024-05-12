/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av1rezl7ad8wsog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uurp43di",
    "name": "transac_drop_point",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av1rezl7ad8wsog")

  // remove
  collection.schema.removeField("uurp43di")

  return dao.saveCollection(collection)
})
