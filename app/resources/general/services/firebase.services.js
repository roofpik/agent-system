 var config = {
     apiKey: "AIzaSyBSSYFQ2ZhbF7d0fwTIiHVOL1GTHAWpilA",
     authDomain: "roofpik-new.firebaseapp.com",
     databaseURL: "https://roofpik-new.firebaseio.com",
     projectId: "roofpik-new",
     storageBucket: "roofpik-new.appspot.com",
     messagingSenderId: "362004565118"
 };

 firebase.initializeApp(config);
 var db = firebase.database();

 app.factory('Firebase', firebaseDataService);

 function firebaseDataService() {
     var service = {
         db: db,
         update: update,
         once: once
     };

     return service;

     function update(updates) {
         return db.update(updates);
     }

     function once(url, callback) {
         return db.ref(url).once('value', callback);
     }
 };
