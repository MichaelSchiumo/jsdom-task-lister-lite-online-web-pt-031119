document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");

  document.getElementById("new-task-description").submit();

  document.getElementById('list').innerHTML =
    document.getElementById("text").value;
});
