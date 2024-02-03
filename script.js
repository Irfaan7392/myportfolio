const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

window.addEventListener("DOMContentLoaded",()=>{
  lenis.scrollTo("#home")
})


// creating typing of sentence using low-dash cursor

const commandPromptAnimation = ()=>{
    const delay = (ms)=>{
        return new Promise(resolve=> setTimeout(resolve,ms))
    };
    
    window.addEventListener("DOMContentLoaded",async()=>{
        await delay(600);
        addTextToSpan(text, document.querySelector(".designation-name span"));
    });
    
    const text = "A Front-end Web Developer";
    const addTextToSpan = async(text, element)=>{
       for(const char of text){
        element.append(char);
        await delay(100);
       }
    }
}
commandPromptAnimation();

// navlinks elment border animation

// ddocument.querySelectorAll(".nav-link").forEach((element) => {
//   element.addEventListener("mouseenter", (event) => {
//     event.currentTarget.style.setProperty("--before-right", "0%");
//   });

//   element.addEventListener("mouseleave", async (event) => {
//     event.currentTarget.style.setProperty("--before-right", "-100%");

//     // Task 1
//     event.currentTarget.style.setProperty("--before-top", "100%");
    
//     // Task 2
//     await function(){
      
//     };

//     // Task 3
//     event.currentTarget.style.setProperty("--before-right", "100%");
//   });
// });

// cursor-animation

// const cursorAnimation = ()=>{
//     let cursor = document.querySelector("#cursor");
//     let imageSection = document.querySelector(".image-section");
//     let socialMediaSection = document.querySelector(".social-media-section");
// // document.querySelector(".header").addEventListener("mousemove", (element)=>{
// //     gsap.to(cursor,
// //         {
// //             x:element.x-50,
// //             y:element.y-50,
// //             scale:1,
// //             opacity:1,
// //         }
// //         )
// // })
// imageSection.addEventListener("mouseleave", (element)=>{
//     gsap.to(cursor,
//         {
//             delay:.2,
//             scale:1,
//             opacity:1
//         }
//         )
// })
// imageSection.addEventListener("mouseenter", (element)=>{
//     gsap.to(cursor,
//         {
//             scale:0,
//             opacity:0
//         }
//         )
// })
// socialMediaSection.addEventListener("mouseleave", (element)=>{
//     gsap.to(cursor,
//         {
//             delay:.2,
//             scale:1,
//             opacity:1
//         }
//         )
// })
// socialMediaSection.addEventListener("mouseenter", (element)=>{
//     gsap.to(cursor,
//         {
//             scale:0,
//             opacity:0
//         }
//         )
// })
// document.querySelector(".whole-page").addEventListener("mousemove", (element)=>{
//     gsap.to(cursor,
//         {
//             x:element.x-50,
//             y:element.y-50,
//             scale:1,
//             opacity:1,
//         }
//         )
// })
// document.querySelector(".whole-page").addEventListener("mouseleave", (element)=>{
//     gsap.to(cursor,
//         {
//             delay:0,
//             scale:0,
//             opacity:0
//         }
//         )
// })
// document.querySelector(".whole-page").addEventListener("mouseenter", (element)=>{
//     gsap.to(cursor,
//         {
//             scale:1,
//             opacity:1
//         }
//         )
// })
// // document.querySelector(".socialaddEventListener("mose", (element)=>{
// //     gsap.to(cursor,
// //         {
// //             scale:0,
// //             opacity:0
// //         }
// //         )
// // })
// };
// cursorAnimation()

document.querySelectorAll(".animating-div").forEach((element)=>{
  gsap.to(element, {
    opacity: 1,
    x: "110%",
    duration: 3,

    scrollTrigger: {
      trigger: element,
      start: "top 60%", 
      end: "bottom 30%", // Adjust this value based on when you want the trigger to end
      toggleActions: "play none none none", // Define the actions on enter/leave
      // markers: true ,// Add markers for debugging,
      scrub:true,
      stagger:1
    }
  });
})
document.querySelectorAll(".skill-heading").forEach((element)=>{
  gsap.from(element, {
    opacity: 1,
    y: "-100%",
    duration: 3,

    scrollTrigger: {
      trigger: element,
      start: "top 60%", 
      end: "bottom 30%", // Adjust this value based on when you want the trigger to end
      toggleActions: "play none none none", // Define the actions on enter/leave
      // markers: true ,// Add markers for debugging,
      scrub:true,
      stagger:1
    }
  });
})

// email-validation

const emailValidation = ()=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = document.querySelector("#email-box").value;
  const emailFormateValidation = emailRegex.test(email);
  
  const hasAtleastOneDot = email.indexOf(".") !== -1;
  const hasAtleastOneAtSymbol = email.indexOf("@") !== -1;
  if(emailFormateValidation && hasAtleastOneDot && hasAtleastOneAtSymbol){
      document.querySelector(".email-box").innerHTML = '<div class="thanks"><span>Great! Thank you. get back to you soon</span></div>'
  }else{
      alert("Invalid Email")
  }
  console.log(emailFormateValidation);
  console.log(email)
}

document.querySelector("#arrow-image").addEventListener('click',()=>{
  emailValidation();
})
document.querySelector("#email-box").addEventListener('keypress',(event)=>{
  if(event.key === "Enter"){
      event.preventDefault();
      emailValidation();
  }
})

// page5
gsap.from(".projects", {
  opacity: 1,
  y: "-100%",
  duration: 3,

  scrollTrigger: {
    trigger: ".projects",
    start: "top 60%", 
    end: "bottom 30%", // Adjust this value based on when you want the trigger to end
    toggleActions: "play none none none", // Define the actions on enter/leave
    // markers: true ,// Add markers for debugging,
    scrub:true,
    stagger:1
  }
});

const pageFive = () => {
  document.addEventListener("DOMContentLoaded", () => {
      document.querySelector("#heading1").classList.add("clickable-heading");
      document.querySelector(".heading-discription span").innerHTML = "The cloned website faithfully captures the essence of Sundown.com, showcasing my proficiency in frontend technologies and attention to detail. This project demonstrates my ability to recreate intricate web designs and deliver a seamless user experience.";

      let headingArray = [...document.querySelectorAll(".heading")];
      headingArray.forEach((element, index, array) => {
          element.addEventListener("click", (e) => {
              let textContent = e.currentTarget.getAttribute("text-content");
              let imageLink = e.currentTarget.getAttribute("image-link");
              e.currentTarget.classList.add("clickable-heading");
              document.querySelector(".heading-discription span").innerHTML = textContent;
              document.querySelector("#page5-heading-image video").setAttribute("src", `${imageLink}`);
              // console.log(`text=> ${textContent} \nl image=> ${imageLink}`);
              console.log(index)
              handleClick(index, array);
          })
      })
  })

  const handleClick = (index, array) => {
      currentIteration = { index, value: array[index] };
      array.slice(0, index).forEach((elem) => {
          console.log(elem)
          elem.classList.remove("clickable-heading");
      })
      array.slice(index + 1).forEach((elem) => {
          elem.classList.remove("clickable-heading");
      })
  }
}
pageFive();

// hamburger-menu

let hamburgerMenu = document.querySelector("#hamburger-menu");
let header = document.querySelector(".header");
hamburgerMenu.addEventListener("click", (event)=>{
  hamburgerMenu.classList.toggle("bar");
  header.classList.toggle("header-toggle")
});

let navLinks = document.querySelectorAll(".nav-link a");
navLinks.forEach((element)=>{
  
  element.addEventListener("click", (event)=>{
    event.preventDefault();
    hamburgerMenu.classList.toggle("bar");
  header.classList.toggle("header-toggle")
  })
})

// toparrow Animation
gsap.to(".top-arrow img",{
  y:"-50%",
  duration:2,
  repeat:-1,
})

document.querySelector("#contact>a").addEventListener("click", (event)=>{
  event.preventDefault();
})
//forced download
let link = document.querySelector(".nav-link:last-child a");
console.log(link)
link.addEventListener("click", ()=>{
  let bodyLink = document.createElement('a');
    bodyLink.href = '/thumbnails/Resume.pdf';
    bodyLink.download = 'Resume.pdf';
    document.body.appendChild(bodyLink);
    bodyLink.click();
    document.body.removeChild(bodyLink);
})
