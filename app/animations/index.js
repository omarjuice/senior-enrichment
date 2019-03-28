import anime from 'animejs'

export const popIn = (targets) => {
    return anime({
        targets,
        scale: [.2, 1],
        duration: 500,
        elasticity: 1000
    })
}