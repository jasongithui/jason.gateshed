
    //loader
    window.onload = function() {
    tl= new gsap.timeline()
        .from(window, {duration: .5, scrollTo:".faq1",
            onStart: () => {document.documentElement.style.scrollBehavior = "auto";},
            onComplete: () => {$(".lback").removeClass('chargement');document.documentElement.style.scrollBehavior = "smooth",$(".loading").addClass('en');$(".s1").addClass('s1content');$(".menu").addClass('menuh');}})
};

    /*     function preloader() {
    if (document.getElementById) {
    document.getElementById("img1").style.background-image = 'url("img/poppy2.jpg") ';
    document.getElementById("img2").style.background-image = 'url("img/mac-min.jpg") ';
}
}
    function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
    window.onload = func;
} else {
    window.onload = function() {
    if (oldonload) {
    oldonload();
}
    func();
}
}
}
    addLoadEvent(preloader); */


    //Bouton form
    $("#boutontr").click(function(){
    $(".contact_back").addClass("cbactive");
    $(".contact").addClass("cactive");

});

    //Bouton retour form
    $(".retour").click(function(){
    $("#err").html(" ");
    $("#succ").html(" ");
    $(".contact_back").removeClass("cbactive");
    $(".contact").removeClass("cactive");
});

    $(".contact_back").click(function(){
    $("#err").html(" ");
    $("#succ").html(" ");
    $(".contact_back").removeClass("cbactive");
    $(".contact").removeClass("cactive");
});


    // Formulaire


    function courchange(){
    if( document.querySelector('[name="email"]').value.length===0){
    $(".c1").removeClass("tactive")
}
    else{
    $(".c1").addClass("tactive")
}
}

    function nomchange(){
    if( document.querySelector('[name="name"]').value.length===0){
    $(".c2").removeClass("tactive")
}
    else{
    $(".c2").addClass("tactive")
}
}

    function projetchange(){
    if( document.querySelector('[name="message"]').value.length===0){
    $(".c3").removeClass("tactive")
}
    else{
    $(".c3").addClass("tactive")
}
}

    document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();
    const contactForm = document.querySelector('#form');
    const email = document.querySelector('[name="email"]');
    const nom = document.querySelector('[name="name"]');
    const message = document.querySelector('[name="message"]');
    // validation before sending the data
    if(nom.value.length===0 ||email.value.length===0 || message.value.length===0){
    $("#succ").html("")
    $("#err").html(" Veillez remplir tous les champs !")
    ;}
    else if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    $("#succ").html("")
    $("#err").html(" Veillez rentrer une adresse email valide...");
}
    else{
    $("#err").html("");
    $(".c1").removeClass("tactive")
    $(".c2").removeClass("tactive")
    $(".c3").removeClass("tactive")
    let data = new FormData(contactForm);
    fetch("https://formbold.com/s/oPxbo", { method: "POST", body: data });
    $("#succ").html(" Message envoyé avec succés !")
    contactForm.reset()
}
})


    //image swipper right
    $('#next').mousemove(function(e){
    $('#nextimg').addClass('visible');
    $('#nextimg').css({
    left:e.pageX, top:e.pageY
});
}).mouseleave(function(){
    $('#nextimg').removeClass('visible');
});

    //image swipper realisation
    $('#prev').mousemove(function(e){
    $('#previmg').addClass('visible');
    $('#previmg').css({
    left:e.pageX, top:e.pageY
});
}).mouseleave(function(){
    $('#previmg').removeClass('visible');
});

    // Bar de scroll top
    window.onscroll = function() {myFunction()};

    function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

    //retour en haut de la page quand on reload
    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

    //menu

    $("#boutontr").click(function(){
    $(".contact_back").addClass("cbactive");
    $(".contact").addClass("cactive");
});

    function qu(){
    gsap.to(window, {duration: 1, scrollTo:{y: ".sec6", offsetX: 0},
        onStart: () => {document.documentElement.style.scrollBehavior = "auto";$(".men").addClass('click');},
        onComplete: () => {document.documentElement.style.scrollBehavior = "smooth";$(".men").removeClass('click');}});
}
    function rea(){
    gsap.to(window, {duration: 1, scrollTo:"#realisation",
        onStart: () => {document.documentElement.style.scrollBehavior = "auto";$(".men").addClass('click');},
        onComplete: () => {document.documentElement.style.scrollBehavior = "smooth";$(".men").removeClass('click');}});
}
    function acc(){
    gsap.to(window, {duration: 1, scrollTo:".sec1",
        onStart: () => {document.documentElement.style.scrollBehavior = "auto";$(".men").addClass('click');},
        onComplete: () => {document.documentElement.style.scrollBehavior = "smooth";$(".men").removeClass('click');}});
}

    $(".select").toggleClass("active");
    $(".select img").attr('src',"img/acca.svg");

    $(".item").hover(function() {
    $(".select").toggleClass("active");
    $(this).toggleClass("active");
})

    function men1() {
    meni();
    $(".ac").addClass('select');
    $(".ac img").attr('src',"img/acca.svg");
    menc()
}

    function men2() {
    meni();
    $(".rea").addClass('select');
    $(".rea img").attr('src',"img/reaa.svg");
    menc()
}

    function men3() {
    meni();
    $(".qu").addClass('select');
    $(".qu img").attr('src',"img/bioa.svg");
    menc()
}
    function meni() {
    $(".ac img").attr('src',"img/acc.svg");
    $(".rea img").attr('src',"img/rea.svg");
    $(".qu img").attr('src',"img/bio.svg");
    $(".item").removeClass('select');
    $(".item").removeClass('active');
}

    function menc() {
    $(".select").toggleClass("active");
}

    //animation section 1
    const content = document.querySelector('.back');
    const el = document.querySelector(".item1");
    const el2 = document.querySelector(".item2");
    const el3 = document.querySelector(".item3");
    const el4 = document.querySelector(".item4");
    const el5 = document.querySelector(".item5");
    const el6 = document.querySelector(".item6");
    const el7 = document.querySelector(".item7");
    const el8 = document.querySelector(".item8");


    content.addEventListener("mousemove", (e) => {
    el.style.marginLeft = 0;
    el2.style.marginTop= 0;
    el3.style.marginTop = 0;
    el4.style.marginTop= 0;
    el5.style.marginLeft = 0;
    el6.style.marginLeft= 0;
    el7.style.marginLeft = 0;
    el8.style.marginLeft= 0;
    el.style.marginLeft = (-e.offsetX/60.5)+ "px";
    el2.style.marginTop= (e.offsetX/60.2)+ "px";
    el3.style.marginTop = (e.offsetX/60.7)+ "px";
    el4.style.marginTop= (-e.offsetX/64.3)+ "px";
    el5.style.marginLeft = (-e.offsetX/67.6)+ "px";
    el6.style.marginLeft= (e.offsetX/65.4)+ "px";
    el7.style.marginLeft = (-e.offsetX/60)+ "px";
    el8.style.marginLeft= (e.offsetX/60.7)+ "px";
});

    Draggable.create(".men", {trigger:".drag", inertia: true, bounds: "body" });

    //scroll
    var scrollEventHandler = function()
    {
        window.scroll(0, window.pageYOffset)
    }


    window.addEventListener("scroll", scrollEventHandler, false);

    function scrollacc2(){
    gsap.to(window, {duration: 1, scrollTo:{y: ".sec2", offsetY: -300},
        onStart: () => {document.documentElement.style.scrollBehavior = "auto";},
        onComplete: () => {document.documentElement.style.scrollBehavior = "smooth";}});
}

    function scrollacc(){
    gsap.to(window, {duration: 1, scrollTo:{y: "#sec2", offsetX: 0},
        onStart: () => {document.documentElement.style.scrollBehavior = "auto";},
        onComplete: () => {document.documentElement.style.scrollBehavior = "smooth";}});
}



    // animations

    const anim = gsap.from(".title", { opacity:0, y: -100, duration: .4  })
    const anim2 = gsap.from(".m1", { opacity:0, x: -100, duration: .2  })
    const anim3 = gsap.from(".m2", { opacity:0, x: 100, duration: .2  })
    const anim4 = gsap.from(".m3", { opacity:0, x: -100, duration: .2  })
    const anim5 = gsap.from(".mac", .5, { y:100,opacity:0, duration: .3  })
    const anim51 = gsap.from(".mobile", .5, { y:100,opacity:0, duration: .3  })
    const anim6 = gsap.from("#pe1", { y:-100,opacity:0, duration: .5  })
    const anim7 = gsap.from(".sec3", {scale:.6, y:100, opacity:.4, duration: .4  })
    const anim8 = gsap.to(".ens", {  scale:0.9,y:-80, opacity:.9, duration: .5  })
    const anim9 = gsap.from("#solu", {  scale:2,y:40, opacity:0,duration: .5  })
    const faq = gsap.from(".faq1 p ", .5, {y: 100,ease: "power4.out",  delay: .2,  opacity:0,  skewY: 7,  stagger: {    amount: 0.3}})
    const anal = gsap.from(".yo p ", .5, {y: 100,ease: "power4.out",  delay: .2,  opacity:0,  skewY: 7,  stagger: {    amount: 0.3}})

    anim.pause(0)
    anim2.pause(0)
    anim3.pause(0)
    anim4.pause(0)
    anim5.pause(0)
    anim51.pause(0)
    anim6.pause(0)
    anim7.pause(0)
    anim8.pause(0)
    anim9.pause(0)
    faq.pause(0)
    anal.pause(0)


    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top 50%",
    onEnter: () => {anim.play(), $(".title").removeClass('title1'), $(".title").addClass('title1')},
    onLeaveBack: ()=> {anim.reverse(),$(".title").removeClass('title1')}
});

    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top 50%",
    onEnter: () => {anim2.play()}
});

    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top 40%",
    onEnter: () => anim3.play()
});

    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top 30%",
    onEnter: () => anim4.play()
});

    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top bottom",
    onLeaveBack: () => {anim.reverse(),anim2.pause(0),anim3.pause(0),anim4.pause(0)}
});

    /*section 3*/
    ScrollTrigger.create({
    trigger: ".sec2",
    start: "top -20%",
    onEnter: () => {anal.play(), anim7.play(),$(".title").removeClass('title1'), $(".title").addClass('title2')},
    onLeaveBack: () => {anal.reverse(),anim7.reverse(),$(".title").removeClass('title2'), $(".title").addClass('title1')}
});


    ScrollTrigger.create({
    trigger: ".sec4",
    start: "top 75%",
    onEnter: () => { anim6.play(), anim8.play(), anim9.play(), $(".title").removeClass('title2'),$(".title").addClass('title3')},
    onLeaveBack: () => {anim6.reverse(),anim8.reverse(),anim9.reverse(),$(".title").removeClass('title3'),$(".title").addClass('title2')},
});

    /*section 4*/


    if ($(window).width() < 1025) {
    ScrollTrigger.create({
        trigger: ".sec4mobile",
        start: "100% bottom ",
        onEnter: () => {anim5.play(), anim51.play(),$(".title").removeClass('title3'),$(".title").addClass('title4'), $(".arg1").addClass('dn')},
        onLeaveBack: () => {anim5.reverse(),anim51.reverse(), $(".title").removeClass('title4'),$(".title").addClass('title3'),$(".arg1").removeClass('dn')},
    });
}
    else {
    ScrollTrigger.create({
        trigger: ".pe",
        start: "20% top ",
        onEnter: () => {anim5.play(), anim51.play(),$(".title").removeClass('title3'),$(".title").addClass('title4'), $(".arg1").addClass('dn')},
        onLeaveBack: () => {anim5.reverse(),anim51.reverse(), $(".title").removeClass('title4'),$(".title").addClass('title3'),$(".arg1").removeClass('dn')},
    });

}

    //section Projects scroll
    ScrollTrigger.create({
    trigger: ".sec5",
    start: "top 30%",
    onEnter: () => {anim.reverse(),  men2()},
    onLeaveBack: () => {anim.play(), men1()}
});

    //faq
    ScrollTrigger.create({
    trigger: ".faq",
    start: "top 50%",
    onEnter: () => {faq.play(),$(".title").removeClass('title4'),$(".title").addClass('title5')},
    onLeaveBack: () => {faq.reverse(),$(".title").removeClass('title5'),$(".title").addClass('title4')}
});

    //section qui suis-je
    ScrollTrigger.create({
    trigger: ".sec6",
    start: "top 40%",
    onEnter: () => {$("#boutontr").addClass('active'), men3()},
    onLeaveBack: () => {$("#boutontr").removeClass('active'), men2()}
});





    //section Projects auto scroll
    function loopNext(){
    $('.cards').stop().animate({scrollLeft:'+=200'}, 'fast', 'linear', loopNext);
}


    function loopPrev(){
    $('.cards').stop().animate({scrollLeft:'-=200'}, 'fast', 'linear', loopPrev);
}

    function stop(){
    $('.cards').stop();
}


    $('#next').hover(function () {
    loopNext();
},function () {
    stop();
});

    $('#prev').hover(function () {
    loopPrev();
},function () {
    stop();
});


    /*
    gsap.from(".exi", {
    opacity: 0,
    top: -50,
    scale:4,
    scrollTrigger: {
    trigger: ".zone1",
    scrub: true
}
})
    gsap.to(".exi", {
    scale:1,
    scrollTrigger: {
    trigger: ".zone1",
    scrub: true
}
})
    gsap.from(".ens", {
    opacity: 0,
    scale:4,
    scrollTrigger: {
    trigger: ".zone2",
    scrub: true
}
})
    gsap.to(".ens", {
    scale:1,
    scrollTrigger: {
    trigger: ".zone2",
    scrub: true
}
})

    */
    var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 1.2,
    inertia: 0.95,
    init: function(){
    this.setEventsListeners();
},
    setEventsListeners: function(){
    var me = this;
    $(document).bind('DOMMouseScroll mousewheel', function(e){
    me.setSpeed(e.originalEvent);
});
},
    setSpeed: function(e){
    var direction = e.detail ? -e.detail : e.wheelDelta;
    this.speed += direction < 0 ? -this.scrollSpeed : this.scrollSpeed;
    if(this.timer == null){
    this.timer = setTimeout(this.smoothScroll, this.delay, this);
}
    e.preventDefault();
},
    smoothScroll: function(scope){
    var self = scope;
    self.speed *= self.inertia;

    var currScrollTop = $(window).scrollTop();
    $(window).scrollTop(currScrollTop-self.speed);

    if(self.speed < self.inertia && self.speed > -self.inertia){
    self.speed = 0;
    clearTimeout(self.timer);
    self.timer = null;
}else{
    self.timer = setTimeout(self.smoothScroll, self.delay, self);
}
}
}
    /*
    smoothScroll.init();
    */
