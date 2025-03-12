export default function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className="fixed bottom-3 right-3 border-2 border-[#C1DCDC] text-[#5b9797] bg-white rounded-md p-2 text-lg cursor-pointer" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
