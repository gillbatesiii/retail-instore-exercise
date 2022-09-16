const fetchCityData = async () => {
    try {
        let response = await fetch('./navigation.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const main = async () => {
    let cityData = await fetchCityData();

    const indicator = document.getElementById('indicator');

    const handleClick = (e) => {
        const menuItems = document.querySelectorAll('.menu-item');
        const target = e.target;
        indicator.style.width = `${target.clientWidth}px`;
        indicator.style.left = `${target.offsetLeft}px`;
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        target.className = `${target.className} active`;
    };

    const handleResize = () => {
        const activeElement = document.getElementsByClassName('active')[0];
        if (activeElement) {
            indicator.style.width = `${activeElement.clientWidth}px`;
            indicator.style.left = `${activeElement.offsetLeft}px`
        }
    };

    cityData.cities.forEach(city => {
        const linkElement = document.createElement('a')
        linkElement.textContent = city.label;
        linkElement.className = 'menu-item';
        linkElement.href = '#';
        linkElement.addEventListener('click', handleClick);
        document.getElementById('menu').appendChild(linkElement);
    });

    window.addEventListener('resize', handleResize)
};

window.addEventListener('load', main);