document.getElementById("showInfo").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  alert(`タイトル: ${tab.title}\nURL: ${tab.url}`);
});
