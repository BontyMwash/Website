document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const messageStatus = document.getElementById('messageStatus');
  messageStatus.textContent = "Sending...";

  // Simulate sending delay
  setTimeout(() => {
    messageStatus.textContent = "Thanks for your message! I'll get back to you soon.";
    this.reset();
  }, 1000);
});
<script>
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
  }, 7000); // Adjust delay to match your animation
</script>
