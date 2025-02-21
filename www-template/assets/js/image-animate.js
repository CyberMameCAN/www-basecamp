const faseSpeed = 3000;

setTimeout(() => {
    let whaleAndFisherman = document.querySelector("#kayac-and-fisherman");
    whaleAndFisherman.animate(
        [{opacity: '1.0'}, {opacity: '0.4'}],
        {duration: 1000, fill: 'forwards'}
    );
}, faseSpeed);
