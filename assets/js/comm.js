gsap.registerPlugin(TweenMax, Power4);

document.addEventListener("DOMContentLoaded", function () {
  const mainContentsSlide = document.querySelector(".main_contents_slide");
  const mainContentsImg = document.querySelector(".main_contents_img");
  const closeBtn = document.getElementById("closeBtn");

  gsap.set(mainContentsSlide, { x: "20%" });
  gsap.set(mainContentsImg, { opacity: "0" });
  gsap.set(closeBtn, { x: "50%" });

  gsap.to(mainContentsSlide, {
    delay: 0.5,
    duration: 1,
    x: "0%",
    opacity: 1,
    ease: "power4.out",
  });
  gsap.to(closeBtn, {
    delay: 0.5,
    duration: 1,
    x: "0%",
    opacity: 1,
    ease: "power4.out",
  });
  gsap.to(mainContentsImg, {
    delay: 0.5,
    duration: 1,
    x: "0%",
    opacity: 1,
    ease: "power4.out",
  });

  closeBtn.addEventListener("click", function () {
    if (parseFloat(mainContentsSlide.style.opacity) === 0) {
      gsap.to(mainContentsSlide, {
        duration: 1.8,
        x: "0%",
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(closeBtn, {
        delay: 0,
        duration: 1.5,
        x: "0%",
        opacity: 1,
        ease: "power4.out",
      });
      gsap.to(".main_logo", {
        duration: 1,
        top: "330px",
        left: "130px",
      });
      gsap.to(".main_drink1", {
        duration: 1,
        top: "200px",
        left: "520px",
      });
      gsap.to(".main_drink2", {
        duration: 1,
        top: "520px",
        left: "580px",
      });
      gsap.to(".main_drink3", {
        duration: 1,
        top: "290px",
        left: "830px",
      });

      closeBtn.innerHTML = '<i class="las la-arrow-right"></i>';
    } else {
      gsap.to(mainContentsSlide, {
        duration: 0.7,
        x: "20%",
        opacity: 0,
        ease: "power4.in",
      });
      gsap.to(closeBtn, {
        delay: 0,
        duration: 1.1,
        x: "350%",
        opacity: 1,
        ease: "power4.in",
      });

      closeBtn.innerHTML = '<i class="las la-arrow-left"></i>';

      gsap.to(".main_logo", {
        delay: 0.5,
        duration: 1,
        top: "330px",
        left: "220px",
      });
      gsap.to(".main_drink1", {
        delay: 0.5,
        duration: 1,
        top: "200px",
        left: "670px",
      });
      gsap.to(".main_drink2", {
        delay: 0.5,
        duration: 1,
        top: "520px",
        left: "700px",
      });
      gsap.to(".main_drink3", {
        delay: 0.5,
        duration: 1,
        top: "290px",
        left: "1000px",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.querySelector(".yes_btn");
  const noBtn = document.querySelector(".no_btn");
  const backBtn = document.querySelector(".back_btn");
  const backBtn2 = document.querySelector(".back_btn2");
  const titTxt = document.querySelector(".rewards_contents_tit");
  const loginTxt = document.querySelector(".rewards_contents_yes");
  const signTxt = document.querySelector(".rewards_contents_no");

  gsap.set(loginTxt, { opacity: 0, display: "none" });
  gsap.set(signTxt, { opacity: 0, display: "none" });

  yesBtn.addEventListener("click", function () {
    gsap.to(titTxt, {
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power4.out",
    });
    gsap.to(loginTxt, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      display: "block",
      ease: "power4.out",
    });
  });

  noBtn.addEventListener("click", function () {
    gsap.to(titTxt, {
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power4.out",
    });
    gsap.to(signTxt, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      display: "block",
      ease: "power4.out",
    });
  });

  backBtn.addEventListener("click", function () {
    gsap.to(loginTxt, {
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power4.out",
    });
    gsap.to(titTxt, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      display: "block",
      ease: "power4.out",
    });
  });

  backBtn2.addEventListener("click", function () {
    gsap.to(signTxt, {
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power4.out",
    });
    gsap.to(titTxt, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      display: "block",
      ease: "power4.out",
    });
  });
});
