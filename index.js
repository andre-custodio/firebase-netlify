firebase.initializeApp({
  apiKey: 'API_KEY',
  authDomain: 'AUTH_DOMAIN',
  projectId: 'PROJECT_ID'
});

const firestore = firebase.firestore();

function query() {
  firestore.collection('signatures')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().name);
      });
    })
}

function create() {
  const name = document.querySelector('.signer-name').value;
  const occupation = document.querySelector('.signer-occupation').value;
  const createdAt = new Date();

  firestore.collection("signatures").add({
    name: name,
    occupation: occupation,
    created_at: createdAt,
  })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
