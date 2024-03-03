names = ["Software-Developer", "Data-Analyst", "Support-Technician", "Information-Technology-Manager", "Cybersecurity-Analyst", "Chief-Executive-Officer", "Janitor", "Project-Manager", "Market-Research-Analyst"]

for i in names:
    file = open("forms/"+i+".html", "w")
    file.write("""
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
 <link href="/style/style.css" rel="stylesheet">
 <title>canvas.ai | """ + i.replace('-', ' ') + """</title>
<style>
      .nav {
        background-color: white;
        margin-left: 0px;
    }

    .custom-form-width {
        width: 50%;
    margin-left: auto;
    margin-right: auto;
}

</style>
</head>
<body style="background: linear-gradient(90deg, #92ccdd  0%, #c7eff0  25%, #f5d5fd  50%, #fdc4ec  75%, #ffc2cb  100%);">
  <ul class="nav d-flex align-items-center" style="background-color:white;">
    <li class="nav-item" style="margin-left: 50px;">
      <a class="nav-link active" aria-current="page" href="#"><img src="/assets/nav/nav.png" width="75px"
          alt="Home"></a>
    </li>    <div style="border-left: 2px solid black; height: 34px;"></div>

    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/benefits.html"><img src="/assets/nav/benefits.png"
          width="75px" alt="Benefits"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/jobs.html"><img src="/assets/nav/jobs.png" width="75px"
          alt="Jobs"></a>
    </li>
  </ul>

<form class="custom-form-width" id="application-form">
    <div class="container mt-5">
        <h2 class="text-center mb-4">Apply as a """ + i.replace('-', ' ') + """ for canvas.ai!</h2><br>
           <div class="mb-3">
             <label for="applicantName" class="form-label">Full Name</label>
             <input type="text" id="name" required>
           </div>
           <div class="mb-3">
             <label for="applicantEmail" class="form-label">Email Address</label>
             <input type="email" id="email" required>
           </div>
           <div class="mb-3">
             <label for="applicantPhone" class="form-label">Phone Number</label>
             <input type="tel" id="phone" required>
           </div>
           <div class="mb-3">
             <label for="applicantMessage" class="form-label">Experience</label>
             <textarea class id="experience" rows="3" required></textarea>
           </div>
           <button type="submit" class="btn btn-primary">Submit Application</button>
        </form>
          <script>
    const firebaseConfig = {
  apiKey: "AIzaSyAIgNXYmAw6fKG7Z3Ixi-dfbS-t2rSFvTc",
  authDomain: "fbla-web.firebaseapp.com",
  databaseURL: "https://fbla-web-default-rtdb.firebaseio.com",
  projectId: "fbla-web",
  storageBucket: "fbla-web.appspot.com",
  messagingSenderId: "248861925431",
  appId: "1:248861925431:web:7c2669d144ae7fcbbd1fb2",
  measurementId: "G-D8T7Z4XSCV"
};    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Listen for form submissions
    const form = document.getElementById('application-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get the form data
      const name = form['name'].value;
      const email = form['email'].value;
      const phone = form['phone'].value;
      const experience = form['experience'].value;

      // Add a new document to the 'users' collection with the form data
      db.collection('""" + i + """').add({
        name,
        email,
        phone,
        experience,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        // Clear the form
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    });
  </script>

       </div></html>
""")