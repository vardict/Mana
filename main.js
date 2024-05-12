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

