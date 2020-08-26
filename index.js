const db = firebase.firestore();

db.collection("signatures").get().then((result) => {
  console.log(result)
  for (let i in result.docs) {
    console.log(i.id);
  }
});
