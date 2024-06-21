// Function to fetch and insert the header content
function insertHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../inc/header.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var headerElement = document.querySelector('header');
            headerElement.innerHTML = xhr.responseText;
            //Navigation toggle function
            const toggle = document.querySelector('.toggle-icon');
            toggle.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('show-nav');
            });
        }
    };
    xhr.send();
}

insertHeader();

// Function to fetch and insert the footer content
function insertFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../inc/footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var footerElement = document.querySelector('footer');
            footerElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

insertFooter();