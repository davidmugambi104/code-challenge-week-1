
function gradeFunction() {
    const marksInput = document.getElementById("Input");
    const grade = document.getElementById("gradePrint");
    
    const marks = parseFloat(Input.value);
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      grade.textContent = 'Invalid entry. Input should be between 0 and 100.';
      return;
    }
  
    let gradeMessage;
  
    switch (true) {
      case marks > 79:
        gradeMessage = 'A ';
        break;
      case marks >= 60:
        gradeMessage= ' B';

        break;
      case marks >= 50:
        gradeMessage = ' C';
        break;
      case marks >= 40:
        gradeMessage = ' D';
        break;
      default:
        gradeMessage = ' E';
    }
  
    gradePrint.textContent = gradeMessage;
  }

  