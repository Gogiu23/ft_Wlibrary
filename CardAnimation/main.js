const cardWrapper = document.querySelector(".cards");
const cards = document.querySelectorAll(".cardsContainer");

const numCards = cards.length;

cardWrapper.style.setProperty("--numCards", numCards);

const viewTimeline = new ViewTimeline({
  subject: cardWrapper,
  axis: "block",
});

cards.forEach((card, index0) => {
  const index = index0 + 1;
  const reverseIndex = numCards - index0;
  const reverseIndex0 = numCards - index;
  card.animate(
    {
      transform: [`scale(1)`, `scale(${1 - 0.1 * reverseIndex})`],
    },
    {
      timeline: viewTimeline,
      fill: "forwards",
      rangeStart: `exit-crossing ${CSS.percent((index0 / numCards) * 100)}`,
      rangeEnd: `exit-crossing ${CSS.percent((index / numCards) * 100)}`,
    },
  );
});
