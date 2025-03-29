// Simulated teacher login credentials
const teachers = [{ username: "teacher", password: "1234" }];

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let validTeacher = teachers.find(t => t.username === username && t.password === password);

    if (validTeacher) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("teacherName").innerText = username;
    } else {
        alert("Invalid Credentials!");
    }
}

function logout() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

// Load Streams Based on Selected Class
function loadStreams() {
    let classSelect = document.getElementById("classSelect").value;
    let streamSelect = document.getElementById("streamSelect");

    streamSelect.innerHTML = ""; // Clear previous options

    let numStreams = classSelect === "Form 2" ? 9 : 6;
    for (let i = 1; i <= numStreams; i++) {
        let option = document.createElement("option");
        option.value = `Stream ${i}`;
        option.textContent = `Stream ${i}`;
        streamSelect.appendChild(option);
    }
}

// Student Management
let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentID").value;

    if (!name || !id) {
        alert("Enter both Student Name and ID!");
        return;
    }

    students.push({ name, id, performance: "N/A", attendance: "Present" });
    updateStudentTable();
    alert("Student Added Successfully!");
}

function removeStudent() {
    let id = document.getElementById("studentID").value;

    students = students.filter(student => student.id !== id);
    updateStudentTable();
    alert("Student Removed!");
}

// Update Student Table
function updateStudentTable() {
    let tableBody = document.getElementById("studentsTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    students.forEach(student => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.id;
        row.insertCell(2).innerText = student.performance;
        row.insertCell(3).innerText = student.attendance;
    });
}

// Report Generation (Download as CSV)
function generateReport() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Name,ID,Performance,Attendance\n";
    
    students.forEach(student => {
        csvContent += `${student.name},${student.id},${student.performance},${student.attendance}\n`;
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "class_report.csv");
    document.body.appendChild(link);
    link.click();
}
    
