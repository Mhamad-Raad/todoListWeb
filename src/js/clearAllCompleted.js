function clearAllCompleted() {
  const completedItems = document.querySelectorAll('.completed');
  completedItems.forEach((item) => {
    item.remove();
  });
}