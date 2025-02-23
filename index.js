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

      customModal.css("display", "flex");

      modalSlider.slick({
        dots: true,
        slidesToShow: 1,
        lazyLoaded: true,
        prevArrow: '<button class="custom-prev">←</button>',
        nextArrow: '<button class="custom-next">→</button>',
      });
    }
  });

  const hideModalDestroySlider = () => {
    if (modalSlider) {
      modalSlider.slick("unslick");
    }
    customModal.hide();
    customModal = modalSlider = null;
  };

  modelingModalExit.on("click", function () {
    hideModalDestroySlider();
  });

  $(".custom-modal").on("click", function (e) {
    if (e.target.id === customModal?.[0]?.id) {
      hideModalDestroySlider();
    }
  });
});

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

      customModal.css("display", "flex");

      modalSlider.slick({
        dots: true,
        slidesToShow: 1,
        lazyLoaded: true,
        prevArrow: '<button class="custom-prev">←</button>',
        nextArrow: '<button class="custom-next">→</button>',
      });
    }
  });

  const hideModalDestroySlider = () => {
    if (modalSlider) {
      modalSlider.slick("unslick");
    }
    customModal.hide();
    customModal = modalSlider = null;
  };

  modelingModalExit.on("click", function () {
    hideModalDestroySlider();
  });

  $(".custom-modal").on("click", function (e) {
    if (e.target.id === customModal?.[0]?.id) {
      hideModalDestroySlider();
    }
  });
});
