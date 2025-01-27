// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("modal");
//   const closeBtn = document.querySelector(".close-btn");

//   document.querySelectorAll(".portfolio-item").forEach((item) => {
//     item.addEventListener("click", () => {
//       modal.style.display = "flex"; // Показываем модальное окно
//     });
//   });

//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none"; // Скрываем модальное окно
//   });

//   modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       modal.style.display = "none"; // Закрытие по клику вне окна
//     }
//   });
// });

// $(document).ready(function () {
//   let customModal;
//   let modalSlider;

//   let openSliderItem = $(".open-slider-item");
//   let modelingModalExit = $(".modal-exit");

//   openSliderItem.on("click", function () {
//     const customModalId = $(this).data("modalId");

//     if (customModalId) {
//       customModal = $(`#${customModalId}`);
//       modalSlider = $(`#${customModalId} .custom-slider`);

//       customModal.css("display", "flex");

//       modalSlider.slick({
//         dots: true,
//         slidesToShow: 1,
//         lazyLoaded: true,
//       });
//     }
//   });

//   const hideModalDestroySlider = () => {
//     modalSlider.slick("unslick");
//     customModal.hide();
//     customModal = modalSlider = null;
//   };

//   modelingModalExit.on("click", function () {
//     hideModalDestroySlider();
//   });

//   $(".custom-modal").on("click", function (e) {
//     if (e.target.id === customModal?.[0]?.id) {
//       hideModalDestroySlider();
//     }
//   });
// });

$(document).ready(function () {
  let customModal;
  let modalSlider;

  let openSliderItem = $(".open-slider-item");
  let modelingModalExit = $(".modal-exit");

  openSliderItem.on("click", function () {
    const customModalId = $(this).data("modalId");

    if (customModalId) {
      customModal = $(`#${customModalId}`);
      modalSlider = $(`#${customModalId} .custom-slider`);

      // Открываем модальное окно
      customModal.css("display", "flex");

      // Инициализируем слайдер
      modalSlider.slick({
        dots: true,
        slidesToShow: 1,
        lazyLoaded: true,
        prevArrow: '<button class="custom-prev">←</button>',
        nextArrow: '<button class="custom-next">→</button>',
      });
    }
  });

  // Функция для закрытия модального окна и уничтожения слайдера
  const hideModalDestroySlider = () => {
    if (modalSlider) {
      modalSlider.slick("unslick");
    }
    customModal.hide();
    customModal = modalSlider = null;
  };

  // Закрытие при клике на кнопку "Закрыть"
  modelingModalExit.on("click", function () {
    hideModalDestroySlider();
  });

  // Закрытие при клике вне содержимого модального окна
  $(".custom-modal").on("click", function (e) {
    if (e.target.id === customModal?.[0]?.id) {
      hideModalDestroySlider();
    }
  });
});
