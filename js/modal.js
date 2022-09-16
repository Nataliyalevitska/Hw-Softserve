(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".feedback-form"),
    message: document.querySelector('textarea[name="user-comment"]'),
  };

  const STORAGE_KEY = "feedback-form";

  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

  const onInput = (e) => {
    const { name, type, checked, value } = e.target;

    data = {
      ...data,
      [name]: type === "checkbox" ? checked : value,
    };
    // console.log(data);
    // data[e.target.name] = e.target.value;
    const inputJson = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, inputJson);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const finalData = {};
    const entries = formData.entries();
    for (const [name, value] of entries) {
      if (!value) {
        alert("fill in all fields");
        return;
      }
      finalData[name] = value;
    }
    finalData.policy = !!formData.get("policy");
    console.log(finalData);

    form.reset();
    data = {};
    localStorage.removeItem(STORAGE_KEY);
  };
  function populateMessageOutput() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);

    if (savedMsg) {
      const newData = JSON.parse(savedMsg);
      data = newData;
      const keys = Object.keys(newData);
      console.log(keys);

      keys.forEach((key) => {
        const input = refs.form.elements[key];
        if (input.type === "checkbox") {
          input.checked = newData[key];
        } else {
          input.value = newData[key];
        }
      });
      // refs.form.elements.email.value = savedMsg.input ?? "";
      // refs.form.elements.message.value = savedMsg.message ?? "";
    }
  }

  refs.form.addEventListener("submit", onFormSubmit);
  refs.form.addEventListener("input", onInput);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  populateMessageOutput();

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
