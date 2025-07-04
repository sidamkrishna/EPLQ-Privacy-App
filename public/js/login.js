document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    db.collection("users").limit(1).get()
  .then(snapshot => {
    console.log("✅ Firestore connected:", snapshot.docs.length);
  })
  .catch(err => {
    console.error("❌ Firestore test failed:", err);
  });

    const userCred = await auth.signInWithEmailAndPassword(email, password);
    const uid = userCred.user.uid;

    // Fetch user role from Firestore
    const userDoc = await db.collection("users").doc(uid).get();
    const userData = userDoc.data();

    if (!userData) {
      alert("User record not found in Firestore.");
      return;
    }

    alert("Login successful!");

    // Redirect based on role
    window.location.href = userData.role === "admin" ? "admin.html" : "dashboard.html";
  } catch (err) {
    console.error("Login error:", err);
    alert(err.message);
  }
});
