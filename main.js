const accordionItemQuestion = document.querySelectorAll(".accordion-item-question");

accordionItemQuestion.forEach(accordionItemQuestion => {
    accordionItemQuestion.addEventListener("click", event => {
        const currentlyActiveAccordionItemQuestion = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemQuestion && currentlyActiveAccordionItemQuestion !== accordionItemQuestion) {
            currentlyActiveAccordionItemQuestion.classList.toggle("active");
            currentlyActiveAccordionItemQuestion.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemQuestion.classList.toggle("active");
        const accordionItemAnswer = accordionItemQuestion.nextElementSibling;
        if (accordionItemQuestion.classList.contains("active")) {
            accordionItemAnswer.style.maxHeight = accordionItemAnswer.scrollHeight + "px";
        }
        else {
            accordionItemAnswer.style.maxHeight = 0;
        }
    });
});


//Gallery
// document.addEventListener("DOMContentLoaded", () => {
//     const galleryItems = document.querySelectorAll(".gallery-item");
//     const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
//     const modalImage = document.getElementById("modalImage");
//     const prevButton = document.getElementById("prevImage");
//     const nextButton = document.getElementById("nextImage");

//     let currentIndex = 0;
//     const images = Array.from(galleryItems).map(item => item.href);

//     // Open Modal on Click
//     galleryItems.forEach((item, index) => {
//         item.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent default link behavior
//             currentIndex = index;
//             updateModalImage();
//             modal.show();
//         });
//     });

//     // Update Modal Image
//     function updateModalImage() {
//         modalImage.src = images[currentIndex];
//     }

//     // Navigate to Previous Image
//     prevButton.addEventListener("click", () => {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         updateModalImage();
//     });

//     // Navigate to Next Image
//     nextButton.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateModalImage();
//     });
// });


