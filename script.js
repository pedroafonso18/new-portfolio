const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Pedro Afonso\'s Portfolio',
        'hero.subtitle': 'Backend Developer | Problem Solver | Tech Enthusiast',
        'hero.quote': '"Talk is cheap, show me the code." - Linus Torvalds',
        'about.title': 'About Me',
        'about.description': 'I\'m a passionate developer with a strong foundation in back-end technologies. I love creating efficient, scalable solutions and learning new technologies.',
        'about.skills': 'Skills',
        'projects.title': 'My Projects',
        'projects.project1.title': 'grepbutbetter',
        'projects.project1.description': 'A Grep clone made in Rust with additional features, like regex and color output.',
        'projects.project2.title': 'GB-C',
        'projects.project2.description': 'A GameBoy emulator made in C, still in development.',
        'projects.project3.title': 'asm-reader',
        'projects.project3.description': 'A rust program that translates c code to assembly.',
        'projects.project4.title': 'c-physics-engine',
        'projects.project4.description': 'A sample physics engine made in C using raylib.',
        'projects.project5.title': 'rustic-notification',
        'projects.project5.description': 'A rust application that sends notifications to the user in multiple platforms.',
        'projects.project6.title': 'gupshup_template_creator',
        'projects.project6.description': 'A rust application that creates gupshup templates for whatsapp without a partners API.',
        'projects.code': 'Code',
        'projects.demo': 'Live Demo',
        'contact.title': 'Get in Touch',
        'contact.email': 'Feel free to reach out to me at <a href="mailto:pedroafonsoprogramador@gmail.com">pedroafonsoprogramador@gmail.com</a>',
        'footer.copyright': '© 2025 Pedro Afonso. All rights reserved.'
    },
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.title': 'Portfólio do Pedro Afonso',
        'hero.subtitle': 'Desenvolvedor Backend | Solucionador de Problemas | Entusiasta de Tecnologia',
        'hero.quote': '"Falar é fácil, me mostre o código." - Linus Torvalds',
        'about.title': 'Sobre Mim',
        'about.description': 'Sou um desenvolvedor apaixonado com uma base sólida em tecnologias back-end. Adoro criar soluções eficientes e escaláveis e aprender novas tecnologias.',
        'about.skills': 'Habilidades',
        'projects.title': 'Meus Projetos',
        'projects.project1.title': 'grepbutbetter',
        'projects.project1.description': 'Um clone do grep feito em Rust com funcionalidades adicionais, como regex e saída colorida.',
        'projects.project2.title': 'GB-C',
        'projects.project2.description': 'Um emulador de GameBoy feito em C, ainda em desenvolvimento.',
        'projects.project3.title': 'asm-reader',
        'projects.project3.description': 'Um programa em Rust que traduz código C para assembly.',
        'projects.project4.title': 'c-physics-engine',
        'projects.project4.description': 'Um motor de física de exemplo feito em C usando raylib.',
        'projects.project5.title': 'rustic-notification',
        'projects.project5.description': 'Uma aplicação em Rust que envia notificações para o usuário em múltiplas plataformas.',
        'projects.project6.title': 'gupshup_template_creator',
        'projects.project6.description': 'Uma aplicação em Rust que cria templates do Gupshup para WhatsApp sem uma API de parceiros.',
        'projects.code': 'Código',
        'projects.demo': 'Demo',
        'contact.title': 'Entre em Contato',
        'contact.email': 'Sinta-se à vontade para me contatar em <a href="mailto:pedroafonsoprogramador@gmail.com">pedroafonsoprogramador@gmail.com</a>',
        'footer.copyright': '© 2025 Pedro Afonso. Todos os direitos reservados.'
    }
};

const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('preferredLanguage', lang);
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('preferredLanguage');
if (savedLang) {
    setLanguage(savedLang);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
}); 