$(".thumbnail").on("click", e => {
  const img = e.target;
  console.log(img.src, img.alt);
  $(".hero img").attr({
    src: img.src,
    alt: img.alt
  });
});

$(".thumbnail").on("keyup", e => {
  const img = e.currentTarget.children[0];
  console.log(img.src, img.alt);
  $(".hero img").attr({
    src: img.src,
    alt: img.alt
  });
});
