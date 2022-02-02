rect = document.querySelector('#svg').getBoundingClientRect();
mouse = {
    x: 0,
    y: 0,
    moved: false
};
gsap.ticker.add(() => {
    if (mouse.moved) {
        //bottom-line
        parallaxIt('.cls-2', 15);
        //top-line-dx
        parallaxIt('.cls-3', -30);
        //top-line-sx
        parallaxIt('.cls-4', -90);
        //outline-circle:
        parallaxIt('.cls-5', 30); //sx
        parallaxIt('.cls-6', -25); //dx
        //big-circle-sx
        parallaxIt('.cls-7', -40);
        //little-circles-sx
        parallaxIt('.cls-8', 85);
        parallaxIt('.cls-9', -85);
        //big-circle-dx
        parallaxIt('.cls-10', -40);
        //little-circles-dx
        parallaxIt('.cls-11', -85);
        parallaxIt('.cls-12', 85);
        //center-logo-lines
        parallaxIt('.cls-13', 35);
        parallaxIt('.cls-14', 40);
        parallaxIt('.cls-15', 45);
        //center-logo
        parallaxIt('.cls-16', 50);
        //top-dx-lines
        parallaxIt('.cls-17', -28);
        parallaxIt('.cls-18', -34);
        parallaxIt('.cls-19', -30);
        //bottom-sx-lines
        parallaxIt('.cls-20', -25);
        parallaxIt('.cls-21', -30);
    }
    mouse.moved = false;
});

function initParticlesJS(config) {
    particlesJS("particles-js", config);
    particlesJS("Cerchio-sinistro", config);
}

function parallaxIt(target, movement) {
    gsap.to(target, {
        x: ((mouse.x - rect.width / 2) / rect.width) * movement,
        y: ((mouse.y - rect.height / 2) / rect.height) * movement,
        duration: 0.3,
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