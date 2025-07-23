'use strict';

// 프로젝트 초기화 함수
function initializeProjects() {
  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
  }

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }

  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }

    }

  }

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }

  // 프로젝트 모달 관련 기능
  const projectData = {
    'finance': {
      title: 'Finance Project',
      category: 'Web Development',
      description: '프로젝트에 대한 상세한 설명을 여기에 작성합니다.',
      image: './assets/images/project-1.jpg',
      technologies: ['Spring', 'Java', 'MySQL', 'JPA'],
      github: 'https://github.com/username/project',
      demo: 'https://demo-link.com'
    }
    // 다른 프로젝트들도 같은 형식으로 추가
  };

  // 프로젝트 클릭 이벤트 리스너
  document.querySelectorAll('.project-item a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.currentTarget.querySelector('.project-title').textContent.toLowerCase();
      const project = projectData[projectId];
      
      if (project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalDescription').textContent = project.description;
        
        const techList = document.getElementById('modalTechList');
        techList.innerHTML = '';
        project.technologies.forEach(tech => {
          const li = document.createElement('li');
          li.textContent = tech;
          techList.appendChild(li);
        });
        
        document.getElementById('modalGithub').href = project.github;
        document.getElementById('modalDemo').href = project.demo;
        
        document.getElementById('projectModal').style.display = 'block';
      }
    });
  });

  // 모달 닫기 버튼
  const closeModal = document.querySelector('.close-modal');
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      document.getElementById('projectModal').style.display = 'none';
    });
  }

  // 모달 외부 클릭 시 닫기
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
} 