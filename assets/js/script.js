// element toggle function
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active")
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]")
const sidebarBtn = document.querySelector("[data-sidebar-btn]")

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar)
})

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]")
const modalContainer = document.querySelector("[data-modal-container]")
const modalCloseBtn = document.querySelector("[data-modal-close-btn]")
const overlay = document.querySelector("[data-overlay]")

// modal variable
const modalImg = document.querySelector("[data-modal-img]")
const modalTitle = document.querySelector("[data-modal-title]")
const modalText = document.querySelector("[data-modal-text]")

// modal toggle function
const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active")
  overlay.classList.toggle("active")
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML

    testimonialsModalFunc()
  })
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc)
overlay.addEventListener("click", testimonialsModalFunc)

// custom select variables
const select = document.querySelector("[data-select]")
const selectItems = document.querySelectorAll("[data-select-item]")
const selectValue = document.querySelector("[data-selecct-value]")
const filterBtn = document.querySelectorAll("[data-filter-btn]")

select.addEventListener("click", function () {
  elementToggleFunc(this)
})

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    elementToggleFunc(select)
    filterFunc(selectedValue)
  })
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]")

const filterFunc = (selectedValue) => {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active")
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active")
    } else {
      filterItems[i].classList.remove("active")
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0]

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    filterFunc(selectedValue)

    lastClickedBtn.classList.remove("active")
    this.classList.add("active")
    lastClickedBtn = this
  })
}

// Language content object
const languageContent = {
  en: {
    about: {
      title: "About me",
      text1:
        "I'm a FullStack Developer from Rio Cuarto, Argentina, specializing in web development and data analysis. Currently an advanced Software Development student at iTec with Data Analysis certification from CODERHOUSE.",
      text2:
        "I stand out for my rapid adaptability, analytical thinking, and teamwork skills. I enjoy transforming complex problems into simple, beautiful, and intuitive solutions. My goal is to build functional, user-friendly, and visually appealing applications.",
      servicesTitle: "What I'm doing",
      webDesign: "Web Design",
      webDesignText: "Modern and high-quality design with focus on UX/UI and responsive design.",
      webDev: "Web Development",
      webDevText: "Professional web application development with React.js, Flask, Django and Node.js.",
      database: "Database Design",
      databaseText: "Database design and management with MySQL, SQLite and MongoDB.",
      dataAnalysis: "Data Analysis",
      dataAnalysisText: "CODERHOUSE certified data analysis with Python and specialized tools.",
    },
    resume: {
      title: "Resume",
      education: "Education",
      experience: "Experience",
      skills: "My skills",
      downloadCvEs: "Download CV (ES)",
      downloadCvEn: "Download CV (EN)",
      // Education items
      educationItems: {
        software: {
          title: "Software Development",
          period: "2022 — Present",
          description:
            "iTec Rio Cuarto - 67% completed with an average grade of 8.75/10. Specialization in web development with Flask, React.js, databases and version control.",
        },
        dataAnalyst: {
          title: "Data Analyst",
          period: "2023",
          description:
            "CODERHOUSE - Data analysis certification with Python, data visualization and specialized tools.",
        },
        biochemistry: {
          title: "Bachelor's Degree in Biochemistry",
          period: "2019 — 2022",
          description:
            "National University of Córdoba - Training in exact sciences that developed my analytical and methodological thinking.",
        },
      },
      // Experience items
      experienceItems: {
        fullstack: {
          title: "FullStack Developer",
          period: "2023 — Present",
          description:
            "Development of web applications with Flask and React.js, database design in MySQL and SQLite, implementation of version control with Git and GitHub.",
        },
        frontend: {
          title: "Frontend Developer",
          period: "2022 — 2023",
          description:
            "Web page development with HTML, CSS and JavaScript. Featured project: BAGBAC CARS using BulmaCSS.",
        },
        database: {
          title: "Database Designer",
          period: "2022",
          description:
            "Creation and configuration of databases using SQLyog, relationship design and data normalization.",
        },
      },
      // Skills
      skillsItems: {
        react: "React.js",
        python: "Python/Flask",
        javascript: "JavaScript",
        database: "MySQL/SQLite",
        dataAnalysis: "Data Analysis",
      },
    },
    portfolio: {
      title: "Portfolio",
    },
    contact: {
      title: "Contact",
      formTitle: "Contact Form",
      namePlaceholder: "Full name",
      emailPlaceholder: "Email address",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! ✅",
      error: "Error sending message. Please try again. ❌",
      validation: {
        nameRequired: "Full name is required.",
        emailRequired: "Email address is required.",
        emailInvalid: "Please enter a valid email address.",
        messageRequired: "Message is required.",
      },
    },
  },
  es: {
    about: {
      title: "Sobre mí",
      text1:
        "Soy un Desarrollador FullStack de Río Cuarto, Argentina, especializado en desarrollo web y análisis de datos. Actualmente estudiante avanzado de Desarrollo de Software en iTec con certificación en Análisis de Datos por CODERHOUSE.",
      text2:
        "Me destaco por mi rápida capacidad de adaptación, pensamiento analítico y habilidades en trabajo en equipo. Disfruto transformar problemas complejos en soluciones simples, hermosas e intuitivas. Mi objetivo es construir aplicaciones funcionales, fáciles de usar y visualmente atractivas.",
      servicesTitle: "Lo que hago",
      webDesign: "Diseño Web",
      webDesignText: "Diseño moderno y de alta calidad con enfoque en UX/UI y diseño responsivo.",
      webDev: "Desarrollo Web",
      webDevText: "Desarrollo de aplicaciones web con React.js, Flask, Django y Node.js a nivel profesional.",
      database: "Diseño de Bases de Datos",
      databaseText: "Diseño y gestión de bases de datos con MySQL, SQLite y MongoDB.",
      dataAnalysis: "Análisis de Datos",
      dataAnalysisText: "Análisis de datos certificado por CODERHOUSE con Python y herramientas especializadas.",
    },
    resume: {
      title: "Currículum",
      education: "Educación",
      experience: "Experiencia",
      skills: "Mis habilidades",
      downloadCvEs: "Descargar CV (ES)",
      downloadCvEn: "Descargar CV (EN)",
      // Education items
      educationItems: {
        software: {
          title: "Desarrollo de Software",
          period: "2022 — Presente",
          description:
            "iTec Rio Cuarto - 67% completado con nota promedio de 8.75/10. Especialización en desarrollo web con Flask, React.js, bases de datos y control de versiones.",
        },
        dataAnalyst: {
          title: "Analista de Datos",
          period: "2023",
          description:
            "CODERHOUSE - Certificación en análisis de datos con Python, visualización de datos y herramientas especializadas.",
        },
        biochemistry: {
          title: "Licenciatura en Bioquímica",
          period: "2019 — 2022",
          description:
            "Universidad Nacional de Córdoba - Formación en ciencias exactas que desarrolló mi pensamiento analítico y metodológico.",
        },
      },
      // Experience items
      experienceItems: {
        fullstack: {
          title: "Desarrollador FullStack",
          period: "2023 — Presente",
          description:
            "Desarrollo de aplicaciones web con Flask y React.js, diseño de bases de datos en MySQL y SQLite, implementación de control de versiones con Git y GitHub.",
        },
        frontend: {
          title: "Desarrollador Frontend",
          period: "2022 — 2023",
          description:
            "Desarrollo de páginas web con HTML, CSS y JavaScript. Proyecto destacado: BAGBAC CARS usando BulmaCSS.",
        },
        database: {
          title: "Diseñador de Bases de Datos",
          period: "2022",
          description:
            "Creación y configuración de bases de datos usando SQLyog, diseño de relaciones y normalización de datos.",
        },
      },
      // Skills
      skillsItems: {
        react: "React.js",
        python: "Python/Flask",
        javascript: "JavaScript",
        database: "MySQL/SQLite",
        dataAnalysis: "Análisis de Datos",
      },
    },
    portfolio: {
      title: "Portafolio",
    },
    contact: {
      title: "Contacto",
      formTitle: "Formulario de Contacto",
      namePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Tu Mensaje",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado correctamente! ✅",
      error: "Error al enviar mensaje. Inténtalo de nuevo. ❌",
      validation: {
        nameRequired: "El nombre completo es obligatorio.",
        emailRequired: "El correo electrónico es obligatorio.",
        emailInvalid: "Por favor, introduce una dirección de correo válida.",
        messageRequired: "El mensaje es obligatorio.",
      },
    },
  },
}

// Language toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle")
  let currentLanguage = "es" // default language

  // Load language preference from localStorage if available
  if (localStorage.getItem("portfolioLanguage")) {
    currentLanguage = localStorage.getItem("portfolioLanguage")
  }

  // Initialize language
  updateLanguage(currentLanguage)
  languageToggle.textContent = currentLanguage === "en" ? "ES/EN" : "EN/ES"

  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "es" : "en"
    localStorage.setItem("portfolioLanguage", currentLanguage)
    updateLanguage(currentLanguage)
    this.textContent = currentLanguage === "en" ? "ES/EN" : "EN/ES"
  })

  function updateLanguage(lang) {
    const content = languageContent[lang]

    // Update about section
    const aboutSection = document.querySelector('[data-page="about"]')
    if (aboutSection) {
      const articleTitle = aboutSection.querySelector(".article-title")
      if (articleTitle) articleTitle.textContent = content.about.title

      const aboutTexts = aboutSection.querySelectorAll(".about-text p")
      if (aboutTexts.length >= 2) {
        aboutTexts[0].textContent = content.about.text1
        aboutTexts[1].textContent = content.about.text2
      }

      const servicesTitle = aboutSection.querySelector(".service-title")
      if (servicesTitle) servicesTitle.textContent = content.about.servicesTitle

      const serviceItems = aboutSection.querySelectorAll(".service-item")
      if (serviceItems.length >= 4) {
        serviceItems[0].querySelector(".service-item-title").textContent = content.about.webDesign
        serviceItems[0].querySelector(".service-item-text").textContent = content.about.webDesignText

        serviceItems[1].querySelector(".service-item-title").textContent = content.about.webDev
        serviceItems[1].querySelector(".service-item-text").textContent = content.about.webDevText

        serviceItems[2].querySelector(".service-item-title").textContent = content.about.database
        serviceItems[2].querySelector(".service-item-text").textContent = content.about.databaseText

        serviceItems[3].querySelector(".service-item-title").textContent = content.about.dataAnalysis
        serviceItems[3].querySelector(".service-item-text").textContent = content.about.dataAnalysisText
      }
    }

    // Update resume section content
    const resumeSection = document.querySelector('[data-page="resume"]')
    if (resumeSection) {
      const articleTitle = resumeSection.querySelector(".article-title")
      if (articleTitle) articleTitle.textContent = content.resume.title

      const timelineTitles = resumeSection.querySelectorAll(".timeline .h3")
      if (timelineTitles.length >= 2) {
        timelineTitles[0].textContent = content.resume.education
        timelineTitles[1].textContent = content.resume.experience
      }

      const skillsTitle = resumeSection.querySelector(".skills-title")
      if (skillsTitle) skillsTitle.textContent = content.resume.skills

      // Update CV download buttons
      const downloadCvEsBtn = resumeSection.querySelector("[data-download-cv-es]")
      if (downloadCvEsBtn) downloadCvEsBtn.querySelector("span").textContent = content.resume.downloadCvEs
      const downloadCvEnBtn = resumeSection.querySelector("[data-download-cv-en]")
      if (downloadCvEnBtn) downloadCvEnBtn.querySelector("span").textContent = content.resume.downloadCvEn

      // Update education timeline items
      const educationTimeline = resumeSection.querySelectorAll(".timeline")[0]
      if (educationTimeline) {
        const educationItems = educationTimeline.querySelectorAll(".timeline-item")
        if (educationItems.length >= 3) {
          // Software Development
          educationItems[0].querySelector(".timeline-item-title").textContent =
            content.resume.educationItems.software.title
          educationItems[0].querySelector("span").textContent = content.resume.educationItems.software.period
          educationItems[0].querySelector(".timeline-text").textContent =
            content.resume.educationItems.software.description

          // Data Analyst
          educationItems[1].querySelector(".timeline-item-title").textContent =
            content.resume.educationItems.dataAnalyst.title
          educationItems[1].querySelector("span").textContent = content.resume.educationItems.dataAnalyst.period
          educationItems[1].querySelector(".timeline-text").textContent =
            content.resume.educationItems.dataAnalyst.description

          // Biochemistry
          educationItems[2].querySelector(".timeline-item-title").textContent =
            content.resume.educationItems.biochemistry.title
          educationItems[2].querySelector("span").textContent = content.resume.educationItems.biochemistry.period
          educationItems[2].querySelector(".timeline-text").textContent =
            content.resume.educationItems.biochemistry.description
        }
      }

      // Update experience timeline items
      const experienceTimeline = resumeSection.querySelectorAll(".timeline")[1]
      if (experienceTimeline) {
        const experienceItems = experienceTimeline.querySelectorAll(".timeline-item")
        if (experienceItems.length >= 3) {
          // FullStack Developer
          experienceItems[0].querySelector(".timeline-item-title").textContent =
            content.resume.experienceItems.fullstack.title
          experienceItems[0].querySelector("span").textContent = content.resume.experienceItems.fullstack.period
          experienceItems[0].querySelector(".timeline-text").textContent =
            content.resume.experienceItems.fullstack.description

          // Frontend Developer
          experienceItems[1].querySelector(".timeline-item-title").textContent =
            content.resume.experienceItems.frontend.title
          experienceItems[1].querySelector("span").textContent = content.resume.experienceItems.frontend.period
          experienceItems[1].querySelector(".timeline-text").textContent =
            content.resume.experienceItems.frontend.description

          // Database Designer
          experienceItems[2].querySelector(".timeline-item-title").textContent =
            content.resume.experienceItems.database.title
          experienceItems[2].querySelector("span").textContent = content.resume.experienceItems.database.period
          experienceItems[2].querySelector(".timeline-text").textContent =
            content.resume.experienceItems.database.description
        }
      }

      // Update skills items
      const skillsItems = resumeSection.querySelectorAll(".skills-item")
      if (skillsItems.length >= 5) {
        skillsItems[0].querySelector(".h5").textContent = content.resume.skillsItems.react
        skillsItems[1].querySelector(".h5").textContent = content.resume.skillsItems.python
        skillsItems[2].querySelector(".h5").textContent = content.resume.skillsItems.javascript
        skillsItems[3].querySelector(".h5").textContent = content.resume.skillsItems.database
        skillsItems[4].querySelector(".h5").textContent = content.resume.skillsItems.dataAnalysis
      }
    }

    // Update portfolio section
    const portfolioSection = document.querySelector('[data-page="portfolio"]')
    if (portfolioSection) {
      const articleTitle = portfolioSection.querySelector(".article-title")
      if (articleTitle) articleTitle.textContent = content.portfolio.title
    }

    // Update contact section
    const contactSection = document.querySelector('[data-page="contact"]')
    if (contactSection) {
      const articleTitle = contactSection.querySelector(".article-title")
      if (articleTitle) articleTitle.textContent = content.contact.title

      const formTitle = contactSection.querySelector(".form-title")
      if (formTitle) formTitle.textContent = content.contact.formTitle

      const inputs = contactSection.querySelectorAll(".form-input")
      if (inputs.length >= 3) {
        inputs[0].placeholder = content.contact.namePlaceholder
        inputs[1].placeholder = content.contact.emailPlaceholder
        inputs[2].placeholder = content.contact.messagePlaceholder
      }

      const sendButton = contactSection.querySelector(".form-btn span")
      if (sendButton) sendButton.textContent = content.contact.sendButton
    }
  }
})

// contact form variables
const form = document.querySelector("[data-form]")
const formInputs = document.querySelectorAll("[data-form-input]")
const formBtn = document.querySelector("[data-form-btn]")
const formStatus = document.getElementById("form-status")
const statusMessage = document.getElementById("status-message")

// Helper function to display validation messages
const showValidationMessage = (input, message) => {
  const errorMessageSpan = document.querySelector(`[data-error-for="${input.name}"]`)
  if (errorMessageSpan) {
    errorMessageSpan.textContent = message
    input.classList.add("invalid")
  }
}

// Helper function to clear validation messages
const clearValidationMessage = (input) => {
  const errorMessageSpan = document.querySelector(`[data-error-for="${input.name}"]`)
  if (errorMessageSpan) {
    errorMessageSpan.textContent = ""
    input.classList.remove("invalid")
  }
}

// Validate a single input field
const validateInput = (input) => {
  const currentLang = localStorage.getItem("portfolioLanguage") || "es"
  const validationMessages = languageContent[currentLang].contact.validation

  clearValidationMessage(input) // Clear previous errors

  if (input.validity.valueMissing) {
    if (input.name === "fullname") showValidationMessage(input, validationMessages.nameRequired)
    if (input.name === "email") showValidationMessage(input, validationMessages.emailRequired)
    if (input.name === "message") showValidationMessage(input, validationMessages.messageRequired)
    return false
  } else if (input.name === "email" && input.validity.typeMismatch) {
    showValidationMessage(input, validationMessages.emailInvalid)
    return false
  }
  return true
}

// Check overall form validity and enable/disable button
const checkFormValidity = () => {
  let allInputsValid = true
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].validity.valid) {
      allInputsValid = false
      break
    }
  }
  if (allInputsValid) {
    formBtn.removeAttribute("disabled")
  } else {
    formBtn.setAttribute("disabled", "")
  }
}

// Add event to all form input field for real-time validation
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    validateInput(this) // Validate on input
    checkFormValidity() // Update button state
  })
  // Also validate on blur for better UX
  formInputs[i].addEventListener("blur", function () {
    validateInput(this)
  })
}

// 📧 EmailJS Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Re-validate all inputs on submit
  let formIsValid = true
  for (let i = 0; i < formInputs.length; i++) {
    if (!validateInput(formInputs[i])) {
      formIsValid = false
    }
  }

  if (!formIsValid) {
    // If form is not valid, stop submission and scroll to first invalid input
    const firstInvalidInput = document.querySelector(".form-input.invalid")
    if (firstInvalidInput) {
      firstInvalidInput.focus()
    }
    return
  }

  // Get current language for messages
  const currentLang = localStorage.getItem("portfolioLanguage") || "es"
  const messages = languageContent[currentLang].contact

  // Show loading state
  const originalText = formBtn.querySelector("span").textContent
  formBtn.querySelector("span").textContent = messages.sending
  formBtn.setAttribute("disabled", "")

  // Hide previous status
  if (formStatus) {
    formStatus.style.display = "none"
  }

  // Get form data
  const templateParams = {
    from_name: form.fullname.value,
    from_email: form.email.value,
    message: form.message.value,
    to_email: "gonsp24@gmail.com",
  }

  // 🚨 VERIFICAR QUE EMAILJS ESTÉ DISPONIBLE (viene del HTML)
  if (typeof window.emailjs === "undefined" || typeof window.EMAILJS_CONFIG === "undefined") {
    console.error("❌ EmailJS no está disponible. Verifica la configuración en el HTML.")
    showStatus(messages.error, "error")
    resetButton(originalText)
    return
  }

  // Send email using EmailJS - USANDO LAS VARIABLES GLOBALES
  window.emailjs.send(window.EMAILJS_CONFIG.serviceId, window.EMAILJS_CONFIG.templateId, templateParams).then(
    (response) => {
      console.log("✅ Email enviado exitosamente:", response)
      showStatus(messages.success, "success")
      form.reset() // Clear form
      // Clear validation messages after successful submission
      for (let i = 0; i < formInputs.length; i++) {
        clearValidationMessage(formInputs[i])
      }
      resetButton(originalText)
    },
    (error) => {
      console.error("❌ Error al enviar email:", error)
      showStatus(messages.error, "error")
      resetButton(originalText)
    },
  )
})

// Helper functions
function showStatus(message, type) {
  if (!formStatus || !statusMessage) return

  statusMessage.textContent = message
  formStatus.style.display = "block"
  formStatus.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da"
  formStatus.style.color = type === "success" ? "#155724" : "#721c24"
  formStatus.style.border = `1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"}`

  // Auto hide after 5 seconds
  setTimeout(() => {
    formStatus.style.display = "none"
  }, 5000)
}

function resetButton(originalText) {
  setTimeout(() => {
    formBtn.querySelector("span").textContent = originalText
    checkFormValidity() // Re-check validity to enable/disable button
  }, 2000)
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]")
const pages = document.querySelectorAll("[data-page]")

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedPage = this.innerHTML.toLowerCase()

    for (let j = 0; j < pages.length; j++) {
      // Normalize page names for comparison
      const pageName = pages[j].dataset.page
      const normalizedPageName = pageName === "about" ? "about" : pageName

      if (clickedPage === normalizedPageName) {
        pages[j].classList.add("active")
        navigationLinks[i].classList.add("active")
        window.scrollTo(0, 0)
      } else {
        pages[j].classList.remove("active")
        navigationLinks[j].classList.remove("active")
      }
    }
  })
}
