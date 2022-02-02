let rect = document.querySelector('#svg').getBoundingClientRect();
let mouse = {
    x: 0,
    y: 0,
    moved: false
};

let className = {
    '.cls-2': 15,   //bottom-line
    '.cls-3': -50,  //top-line-dx
    '.cls-4': -90,  //top-line-sx
    '.cls-5': 30,   //outline-circle-sx
    '.cls-6': -25,  //outline-circle-dx
    '.cls-7': -40,  //big-circle-sx
    '.cls-8': 85,   //top-little-circle-sx
    '.cls-9': -85,  //top-little-circle-dx
    '.cls-10': -40, //big-circle-dx
    '.cls-11': -85, //bottom-little-circle-dx
    '.cls-12': 85,  //bottom-little-circle-sx
    '.cls-13': 40,  //center-logo-line #1
    '.cls-14': 45,  //center-logo-line #2
    '.cls-15': 50,  //center-logo-line #3
    '.cls-16': 50,  //center-logo
    '.cls-17': -28, //top-dx-lines #1
    '.cls-18': -32, //top-dx-lines #2
    '.cls-19': -30, //top-dx-lines #3
    '.cls-20': 29,  //bottom-sx-lines #1
    '.cls-21': 30,  //bottom-sx-lines #2
};

gsap.ticker.add(() => {
    if (mouse.moved) {
        for (let key in className) {
            parallaxIt(key, className[key]);
        }
    }
    mouse.moved = false;
});

function initParticlesJS(config) {
    particlesJS("particles-js", config);
}

function parallaxIt(target, movement) {
    gsap.to(target, {
        x: ((mouse.x - rect.width / 2) / rect.width) * movement,
        y: ((mouse.y - rect.height / 2) / rect.height) * movement,
        duration: 0.8,
    });
}
window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('mousemove', (event) => {
        mouse.moved = true;
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    initParticlesJS(ParticlesConfig);
    window.addEventListener('resize', (event) => {
        rect = document.querySelector('#svg').getBoundingClientRect();
        initParticlesJS(ParticlesConfig);
    })
});

const ParticlesConfig = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 1.8,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
            },
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
            onclick: {
                enable: false,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 131.85970127784034,
                size: 2,
                duration: 0,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 400,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};