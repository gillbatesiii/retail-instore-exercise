const fetchCityData = async () => {
    let response = await fetch('./navigation.json');
    let navigationData = await response.json();
    return navigationData;
}


const handleClick = (e) => {
    console.log('event', e, e.target.clientWidth);
    const indicator = document.getElementById('indicator');
    const linkWidth = e.target.clientWidth;
    const linkLeftPosition = e.target.offsetLeft;
    indicator.style.width = `${linkWidth}px`;
    indicator.style.left = `${linkLeftPosition}px`;

};

const main = async () => {
    let cityData = await fetchCityData();

    cityData.cities.forEach( city => {
        const linkElement = document.createElement('a')
        linkElement.textContent = city.label;
        linkElement.href = '#';
        linkElement.addEventListener('click', (e) => {
            handleClick(e);
        });
       document.getElementById('menu').appendChild(linkElement);
    });

};

window.addEventListener('load', (e) => {
    main();
});