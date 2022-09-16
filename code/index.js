const fetchCityData = async () => {
    let response = await fetch('./navigation.json');
    return await response.json();
}



const main = async () => {
    let cityData = await fetchCityData();

    const indicator = document.getElementById('indicator');

    const handleClick = (e) => {
        const target = e.target;
        indicator.style.width = `${target.clientWidth}px`;
        indicator.style.left = `${target.offsetLeft}px`;
        target.className = `${target.className} active`;
    };

    const handleResize = () => {
        const activeElement = document.getElementsByClassName('active')[0];
        activeElement && (indicator.style.width = `${activeElement.clientWidth}px`);
        activeElement && (indicator.style.left = `${activeElement.offsetLeft}px`);
    };

    cityData.cities.forEach( city => {
        const linkElement = document.createElement('a')
        linkElement.textContent = city.label;
        linkElement.href = '#';
        linkElement.addEventListener('click', (e) => {
            handleClick(e);
        });
       document.getElementById('menu').appendChild(linkElement);
    });

    window.addEventListener('resize', () => {
        handleResize();
    })



};

window.addEventListener('load', () => {
    main();
});