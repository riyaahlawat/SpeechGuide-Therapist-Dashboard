function toggleChat() {
  var chatWindow = document.getElementById("chat-window");
  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "flex";
  } else {
    chatWindow.style.display = "none";
  }
}