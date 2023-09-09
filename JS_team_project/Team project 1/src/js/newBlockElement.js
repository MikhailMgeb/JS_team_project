function newBlockElement(
  classNameBlock,
  classNameLabel,
  textContentLabel,
  classNameInput,
  typeInput,
  idInput,
  placeholder = null,
  value = null,
  disabled = null
) {
  const element = document.createElement("div");
  element.classList.add(classNameBlock);
  const label = document.createElement("label");
  label.classList.add(classNameLabel);
  label.for = idInput;
  label.textContent = textContentLabel;
  element.appendChild(label);
  const input = document.createElement("input");
  if (placeholder) {
    input.placeholder = placeholder;
  }
  if (typeInput) {
    input.type = typeInput;
  }
  if (value) {
    input.value = value;
  }
  if (disabled) {
    input.disabled = true;
  }
  input.classList.add(classNameInput);
  input.id = idInput;
  element.appendChild(input);
  return element;
}

export default newBlockElement;
