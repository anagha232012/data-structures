name_student_array = [];
function submit() {
   var s1 = document.getElementById("name1").value
   var s2 = document.getElementById("name2").value
   var s3 = document.getElementById("name3").value
   var s4 = document.getElementById("name4").value
   name_student_array.push(s1);
   name_student_array.push(s2);
   name_student_array.push(s3);
   name_student_array.push(s4);
   console.log(name_student_array);
   document.getElementById("disname").innerHTML=name_student_array;
   document.getElementById("sub").style.display="none";
   document.getElementById("sort").style.display="dotted";
   
}
function sorting() {
    name_student_array.sort();
    document.getElementById("disname").innerHTML=name_student_array;
}
