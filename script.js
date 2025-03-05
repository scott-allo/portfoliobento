document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item');
    const projectDetails = document.querySelector('.project-details');
    const githubLink = document.querySelector('.github-link');
  
    // Données des projets (simulées)
    const projectsData = {
      1: {
        title: 'Projet 1',
        description: 'Description détaillée du Projet 1.',
        image: './image/projet1.jpg',
      },
      2: {
        title: 'Projet 2',
        description: 'Description détaillée du Projet 2.',
        image: './image/projet2.jpg',
      },
      3: {
        title: 'Projet 3',
        description: 'Description détaillée du Projet 3.',
        image: './image/projet3.jpg',
      },
      // Ajoute d'autres projets ici
    };
  
    // Gestion du clic sur un projet
    projectItems.forEach((item) => {
      item.addEventListener('click', function () {
        const projectId = item.getAttribute('data-project');
        const project = projectsData[projectId];
  
        // Afficher les détails du projet
        projectDetails.innerHTML = `
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
          <p>${project.description}</p>
        `;
  
        // Masquer le lien GitHub
        githubLink.style.display = 'none';
  
        // Faire défiler la page vers la section des détails
        projectDetails.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Optionnel : Réafficher le lien GitHub si on clique ailleurs
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.project-item')) {
        projectDetails.innerHTML = ''; // Masquer les détails
        githubLink.style.display = 'block'; // Réafficher le lien GitHub
      }
    });
  });