// Simulated Teacher Login
function login() {
    let username = document.getElementById('teacherUsername').value;
    let password = document.getElementById('teacherPassword').value;
    
    if (username === "teacher" && password === "1234") {
        document.getElementById('login-section').style.display = "none";
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('teacherName').innerText = username;
    } else {
        alert("Invalid credentials!");
    }
}

// Logout Function
function logout() {
    document.getElementById('login-section').style.display = "block";
    document.getElementById('dashboard').style.display = "none";
}

// Load Streams Based on Class
function loadStreams() {
    let classSelect = document.getElementById('classSelect').value;
    let streamSelect = document.getElementById('streamSelect');

    streamSelect.innerHTML = ""; // Clear previous options

    let numStreams = classSelect === "Form 2" ? 9 : 6;
    for (let i = 1; i <= numStreams; i++) {
        let option = document.createElement('option');
        option.value = `Stream ${i}`;
        option.textContent = `Stream ${i}`;
        streamSelect.appendChild(option);
    }
}

// Load Students into Table
function loadStudents() {
    let tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    let students = [
        { name: "John Doe", performance: "A", attendance: "Present", seat: "Front" },
        { name: "Jane Smith", performance: "B", attendance: "Absent", seat: "Middle" },
        { name: "Mark Lee", performance: "C", attendance: "Present", seat: "Back" }
    ];

    students.forEach(student => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.performance;
        row.insertCell(2).innerText = student.attendance;
        row.insertCell(3).innerText = student.seat;
    });
}

// Import Students from CSV
function importCSV() {
    let fileInput = document.getElementById('csvFileInput').files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
        let csvData = event.target.result.split("\n").map(row => row.split(","));
        let tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];

        csvData.forEach((row, index) => {
            if (index === 0) return; // Skip header
            let newRow = tableBody.insertRow();
            newRow.insertCell(0).innerText = row[0];
            newRow.insertCell(1).innerText = row[1];
            newRow.insertCell(2).innerText = row[2];
            newRow.insertCell(3).innerText = row[3];
        });
    };

    reader.readAsText(fileInput);
}