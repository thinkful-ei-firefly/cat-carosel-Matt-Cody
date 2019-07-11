$(".thumbnail").on("click", e => {
  const img = e.target;
  console.log(img.src, img.alt);
  $(".hero img").attr({
    src: img.src,
    alt: img.alt
  });
});
