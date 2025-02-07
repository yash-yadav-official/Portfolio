document.addEventListener("DOMContentLoaded", function () {
    (function () {
      emailjs.init("XYBbzfqAVRUGMnas8"); // Replace with your actual EmailJS User ID
    })();
  
    document.querySelector(".form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const fullName = document.querySelector("[name='fullname']").value;
      const email = document.querySelector("[name='email']").value;
      const message = document.querySelector("[name='message']").value;
  
      // Send email using EmailJS
      emailjs.send("service_ndsf4to", "template_q5y7rrq", {
        full_name: fullName,
        email: email,
        message: message,
      })
      .then(
        function (response) {
        showPopup("Message sent successfully!", "success");
        },
        function (error) {
          showPopup("Failed to send message!", "error");
          console.error("FAILED...", error);
        }
      );
    });
  });

  function showPopup(message, type) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupClose = document.getElementById("popup-close");

    popupMessage.textContent = message;
    popup.style.display = "flex"; // Show popup

    // Change text color based on success or error
    popupMessage.style.color = type === "success" ? "green" : "red";

    // Close popup when user clicks the "X"
    popupClose.onclick = function () {
      popup.style.display = "none";
    };

    // Close popup when user clicks outside of it
    popup.onclick = function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    };
  }
