document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  try {
    const userCred = await auth.createUserWithEmailAndPassword(email, password);
    const uid = userCred.user.uid;

    await db.collection("users").doc(uid).set({
      uid,
      name,
      email,
      role,
      createdAt: new Date().toISOString()
    });

    alert("Registration successful!");

    // Redirect based on role
    window.location.href = role === "admin" ? "admin.html" : "dashboard.html";
  } catch (err) {
    console.error("Registration error:", err);
    alert(err.message);
  }
});
