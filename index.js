firebase.initializeApp({
  apiKey: 'API-KEY',
  authDomain: 'AUTH-DOMAIN',
  projectId: 'PROJECT-ID'
});

const firestore = firebase.firestore();

function querySignatures() {
  firestore.collection('signatures')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().name);
      });
    })
}

function queryApprovedTestimony() {
  firestore.collection('testimony')
    .where("approved", "==", true)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().name, "and", doc.data().testimony, "and", doc.data().email);
      });
    })
}

function createSigner() {
  const name = document.querySelector('.signer-name').value;
  const occupation = document.querySelector('.signer-occupation').value;
  const email = document.querySelector('.signer-email').value;
  const createdAt = new Date();

  firestore.collection("signatures").add({
    name: name,
    occupation: occupation,
    email: email,
    created_at: createdAt
  })
    .then(function() {
      console.log("Signature successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing Signature: ", error);
    });
}

function createTestimony() {
  const name = document.querySelector('.author-name').value;
  const testimony = document.querySelector('.testimony').value;
  const email = document.querySelector('.author-email').value;
  const createdAt = new Date();

  firestore.collection("testimony").add({
    testimony: testimony,
    name: name,
    email: email,
    approved: false,
    created_at: createdAt
  })
    .then(function() {
      console.log("Testimony successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing testimony: ", error);
    });
}
