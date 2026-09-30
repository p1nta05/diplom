document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navbar = document.createElement('nav');
    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm";
    navbar.innerHTML = `
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.html">
                <span class="text-info">Photoshop</span> <span class="text-secondary">|</span> <span class="text-light">УХТ</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto fw-semibold">
                    <li class="nav-item"><a class="nav-link ${currentPage.includes('index.html') || currentPage === '' ? 'active text-info' : ''}" href="index.html">Начало</a></li>
                    <li class="nav-item"><a class="nav-link ${currentPage.includes('lessons.html') || currentPage.includes('lesson-view.html') ? 'active text-info' : ''}" href="lessons.html">Уроци</a></li>
					<li class="nav-item"><a class="nav-link ${currentPage.includes('quiz.html') ? 'active text-info' : ''}" href="quiz.html">Тест</a></li>
                    <li class="nav-item"><a class="nav-link ${currentPage.includes('about.html') ? 'active text-info' : ''}" href="about.html">За курса</a></li>
                    <li class="nav-item"><a class="nav-link ${currentPage.includes('contacts.html') ? 'active text-info' : ''}" href="contacts.html">Контакти</a></li>
                </ul>
            </div>
        </div>
    `;
    document.body.insertBefore(navbar, document.body.firstChild);

    const footer = document.createElement('footer');
    footer.className = "bg-dark text-secondary text-center py-4 mt-auto border-top border-secondary";
    footer.innerHTML = `
        <div class="container">
            <p class="mb-1 text-light">&copy; 2026 Васил Янев. Всички права запазени.</p>
            <small>Дипломна работа към катедра „Компютърни системи и технологии“, УХТ - Пловдив</small>
        </div>
    `;
    document.body.appendChild(footer);
});