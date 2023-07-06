function GetAllStudents(){
    fetch('http://localhost:1000/GetAllStudents')
      .then(response => response.json())
      .then(json => {
        let studentsOl = document.getElementById("AllList");
        json.forEach(element => {
            let studentli = document.createElement('li');
            studentli.innerHTML = element.Name;
            studentsOl.appendChild(studentli);           
        });
    })
}