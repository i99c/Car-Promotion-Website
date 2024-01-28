document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll('.dropdown-menubir, .dropdown-menuiki, .dropdown-menuuc');

    dropdowns.forEach(function (dropdown) {
        let title = dropdown.querySelector('h2');
        let content = dropdown.querySelector('.dropdown-content');

        title.addEventListener('click', function () {
            // Tüm dropdown menülerini gizle
            dropdowns.forEach(function (dropdown) {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
            // Bu dropdown menüsünü göster veya gizle
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Sayfa herhangi bir yere tıklandığında dropdown menülerini gizle
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.subnav')) {
            dropdowns.forEach(function (dropdown) {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });
});