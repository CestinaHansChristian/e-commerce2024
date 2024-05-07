/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "av1rezl7ad8wsog",
    "created": "2024-05-07 05:19:03.713Z",
    "updated": "2024-05-07 05:19:03.713Z",
    "name": "transaction",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1iked67u",
        "name": "user_transac_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "giuwvn8u",
        "name": "transac_mode_of_payment",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dryuogkv",
        "name": "transac_total_price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": "@request.auth.id !=''",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("av1rezl7ad8wsog");

  return dao.deleteCollection(collection);
})
