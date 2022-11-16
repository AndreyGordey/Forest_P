window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmooter)
ScrollSmooter.create({
    wrapper: '.wrapper',
    content: '.content'
})