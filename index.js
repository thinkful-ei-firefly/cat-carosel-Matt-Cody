$(".thumbnail").on("click", e => {
  const img = e.target;
  $(".hero img").attr({
    src: img.src,
    alt: img.alt
  });
});

$(".thumbnail").on("keyup", e => {
  const img = e.currentTarget.children[0];
  $(".hero img").attr({
    src: img.src,
    alt: img.alt
  });
});
