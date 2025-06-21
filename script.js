const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

textInput.addEventListener("input", function () {
	if (textInput.value.length <= 49) {
		charCount.textContent = `Character Count: ${textInput.value.length}/50`;
	} else if (textInput.value.length >= 50) {
		textInput.value = textInput.value.slice(0, 50);
		charCount.textContent = `Character Count: ${textInput.value.length}/50`;
		charCount.style.color = "red";
	}
});