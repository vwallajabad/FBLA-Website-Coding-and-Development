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
    <link rel="stylesheet" href="/style/forms.css">
    <title>QuantumSphere | """ + i.replace('-', ' ') + """</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"
        style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;">
        <a class="navbar-brand" href=“/“>QuantumSphere</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="/about-us.html">About Us</a>
                <a class="nav-item nav-link" href="/benefits.html">Benefits</a>
                <a class="nav-item nav-link" href="/jobs.html">Jobs</a>
            </div>
        </div>
    </nav>
    <form class="custom-form-width" id="application-form">
        <div class="container mt-5">
            <h2 class="text-center mb-4">Apply as a """ + i.replace('-', ' ') + """ for QuantumSphere!</h2><br>
            <div class="mb-3">
                <label for="applicantName" class="form-label">Full Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="mb-3">
                <label for="applicantName" class="form-label">Birth Date</label>
                <input type="date" id="birthdate" required>
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
                <textarea class id="experience" rows="3"
                    placeholder="Please list your experience in under 1000 characters." required></textarea>
            </div>
            <div class="mb-3">
                <label for="applicantMessage" class="form-label">Resume</label>
                <input class="form-control" type="file" id="resume" required>
            </div>
            <button type="submit" class="btn"
                style="background-color: rgb(80,103,136); border: solid 2px black; color:white; padding: 12px 12px 12px 12px;">Submit
                Application</button>
        </div>
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
        };
        firebase.initializeApp(firebaseConfig);

        const db = firebase.firestore();

        const form = document.getElementById('application-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form['name'].value;
            const birthdate = form['birthdate'].value;
            const email = form['email'].value;
            const phone = form['phone'].value;
            const experience = form['experience'].value;

            db.collection('""" + i + """').add({
                name,
                birthdate,
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

    </div>

</html>""")