// ==================== PROJECT DATA ====================
const projects = {
  project1: {
    title: "FIFO–LRU Simulator",
    description: "An advanced memory page replacement visualization tool that demonstrates the FIFO (First-In-First-Out) and LRU (Least Recently Used) algorithms. This project features real-time analytics, interactive visualizations, and detailed performance comparisons between the two algorithms. Built with modern web technologies to provide an educational yet engaging experience for understanding operating system concepts.",
    tags: ["Algorithm", "OOP", "System", "Educational"],
    image: "assets/images/project-fifo.png"
  },
  project2: {
    title: "Timeless Celebration",
    description: "A comprehensive event planning system designed in Figma with a focus on elegant user experience and intuitive navigation. The system features event creation workflows, guest management, venue selection, and timeline planning. The design emphasizes modern aesthetics with smooth transitions and a clean, organized interface that makes event planning effortless.",
    tags: ["Figma", "UI/UX", "Design", "Event Planning"],
    image: "assets/images/project-timeless.jpg"
  },
  project3: {
    title: "EcoYou",
    description: "A sustainability-focused mobile application prototype that helps users track their carbon footprint, discover eco-friendly alternatives, and participate in environmental challenges. Features include a personal sustainability dashboard, product scanning for eco-ratings, community engagement tools, and gamified challenges to promote sustainable living. Designed with a nature-inspired color palette and intuitive mobile-first interface.",
    tags: ["Mobile", "Sustainability", "Prototype", "Visualization", "Figma"],
    image: "assets/images/project-ecoyou.jpg"
  },
  project4: {
    title: "Banking System",
    description: "A secure, full-featured banking system built with Java that implements core banking functionalities including account management, fund transfers, transaction history, and multi-layer authentication. The system features robust security measures including encrypted data storage, session management, and detailed audit logs. Built using OOP principles with a focus on scalability and maintainability.",
    tags: ["Java", "Security", "Backend", "OOP"],
    image: "assets/images/project-bank-system.jpg"
  },
  project5: {
    title: "InsideOut",
    description: "An innovative PHP object-oriented programming project that creatively represents human emotions through code. Using interfaces and polymorphism, the program models different emotional states and their interactions, demonstrating advanced OOP concepts in a unique and engaging way. Features include emotion state management, mood tracking, and dynamic emotional responses based on various triggers.",
    tags: ["PHP", "OOP", "Creative", "Psychology"],
    image: "assets/images/project-insideout.png"
  },
  project6: {
    title: "Whozzit Application",
    description: "A mobile-based Lost and Found system designed for SJPIICD that allows users to report, track, and claim lost or found items. The application supports image uploads, admin verification, item matching, and secure claiming workflows using Firebase.",

    tags: ["Android Studio", "Kotlin", "Firebase", "ImgBB"],
    image: "assets/images/project-whozzit.png"
  }
};

// ==================== DASHBOARD ENTRANCE ====================
function enterPortfolio() {
  document.getElementById('dashboard').classList.add('hidden');
}

// ==================== SECTION SWITCHING ====================
function showSection(id) {
  // Remove active class from all sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Add active class to selected section
  document.getElementById(id).classList.add('active');
  
  // Trigger skill progress animations
  if (id === 'skills') {
    animateSkills();
  }
}

// ==================== SKILL ANIMATIONS ====================
function animateSkills() {
  const progressBars = document.querySelectorAll('.skill-progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// ==================== MODAL FUNCTIONS ====================
function openModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = projects[projectId];
  
  // Set modal content
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  
  // Set modal image
  const modalImageSrc = document.getElementById('modalImageSrc');
  modalImageSrc.src = project.image;
  modalImageSrc.alt = project.title;
  
  // Generate tags HTML
  const tagsHtml = project.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');
  document.getElementById('modalTags').innerHTML = 
    `<div class="project-tags" style="margin-top: 20px;">${tagsHtml}</div>`;
  
  // Show modal
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ==================== FORM SUBMISSION ====================
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form data:', data);
  
  // Show success message
  alert('Message sent! Thank you for reaching out. I\'ll get back to you soon!');
  
  // Reset form
  e.target.reset();
}

// ==================== PARTICLE SYSTEM ====================
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 8 + 's';
  particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
  document.body.appendChild(particle);
  
  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 10000);
}

// Generate particles periodically
setInterval(createParticle, 300);

// Initial particles burst
for (let i = 0; i < 20; i++) {
  setTimeout(createParticle, i * 100);
}

// ==================== CURSOR GLOW EFFECT ====================
let lastGlowTime = 0;
const glowThrottle = 50; // Milliseconds between glows

document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  
  // Throttle glow creation
  if (now - lastGlowTime < glowThrottle) return;
  lastGlowTime = now;
  
  const glow = document.createElement('div');
  glow.style.position = 'fixed';
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
  glow.style.width = '5px';
  glow.style.height = '5px';
  glow.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
  glow.style.borderRadius = '50%';
  glow.style.pointerEvents = 'none';
  glow.style.opacity = '0.6';
  glow.style.boxShadow = '0 0 15px #8b5cf6';
  glow.style.transition = 'all 0.5s';
  glow.style.zIndex = '9999';
  document.body.appendChild(glow);
  
  // Fade out and scale
  setTimeout(() => {
    glow.style.opacity = '0';
    glow.style.transform = 'scale(2)';
  }, 10);
  
  // Remove from DOM
  setTimeout(() => {
    glow.remove();
  }, 500);
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
  // Trigger initial animations
  animateOnScroll();
});

// ==================== SCROLL ANIMATIONS ====================
function animateOnScroll() {
  const elements = document.querySelectorAll('.glass, .card, .skill-card, .stat-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => {
    observer.observe(el);
  });
}

// ==================== ACTIVE NAV HIGHLIGHT ====================
const navButtons = document.querySelectorAll('.sidebar button');
navButtons.forEach(button => {
  button.addEventListener('click', function() {
    navButtons.forEach(btn => btn.classList.remove('active-nav'));
    this.classList.add('active-nav');
  });
});

// ==================== MOBILE SIDEBAR TOGGLE ====================
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = sidebar.classList.toggle('open');
  if (isOpen) {
    overlay.classList.add('visible');
    document.body.classList.add('sidebar-open');
  } else {
    overlay.classList.remove('visible');
    document.body.classList.remove('sidebar-open');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('mobileOverlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.classList.remove('sidebar-open');
}

// Close sidebar when a nav button is clicked (mobile)
document.querySelectorAll('.sidebar button, .sidebar a').forEach(el => {
  el.addEventListener('click', () => {
    if (window.innerWidth <= 768) closeSidebar();
  });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to my portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore and reach out if you\'d like to collaborate!', 'color: #ec4899; font-size: 14px;');
console.log('%c💼 GitHub: https://github.com/allyflores0', 'color: #c4b5fd; font-size: 12px;');

// ==================== IMAGE ERROR HANDLING ====================
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Set a placeholder gradient background
      this.style.display = 'none';
      const parent = this.parentElement;
      if (parent) {
        parent.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))';
        parent.style.display = 'flex';
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';
        parent.innerHTML = '<span style="color: #8b5cf6; font-size: 1.2em;">📷 Image</span>';
      }
    });
  });
});