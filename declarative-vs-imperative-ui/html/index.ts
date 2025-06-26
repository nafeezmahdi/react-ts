// select DOM elements
// let form = document.getElementById("form");
// let textarea = document.getElementById("textarea");
// let button = document.getElementById("button");
// let loadingMessage = document.getElementById("loading");
// let errorMessage = document.getElementById("error");
// let successMessage = document.getElementById("success");

const form = document.getElementById("form") as HTMLFormElement;
const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
const button = document.getElementById("button") as HTMLButtonElement;
const loadingMessage = document.getElementById("loading") as HTMLElement;
const errorMessage = document.getElementById("error") as HTMLElement;
const successMessage = document.getElementById("success") as HTMLElement;

// event handlers
// form.onsubmit = handleFormSubmit;
// textarea.oninput = handleTextareaChange;

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

// async function handleFormSubmit(e) {
//     e.preventDefault();
//     disable(textarea);
//     disable(button);
//     show(loadingMessage);
//     hide(errorMessage);
//     try {
//         await submitForm(textarea.value);
//         show(successMessage);
//         hide(form);
//     } catch (err) {
//         show(errorMessage);
//         errorMessage.textContent = err.message;
//     } finally {
//         hide(loadingMessage);
//         enable(textarea);
//         enable(button);
//     }
// }

async function handleFormSubmit(e: Event): Promise<void> {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);

    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

// function handleTextareaChange() {
//     if (textarea.value.length === 0) {
//         disable(button);
//     } else {
//         enable(button);
//     }
// }

function handleTextareaChange(): void {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

// function hide(el) {
//     el.style.display = "none";
// }

function hide(el: HTMLElement): void {
  el.style.display = "none";
}

// function show(el) {
//     el.style.display = "";
// }

function show(el: HTMLElement): void {
  el.style.display = "";
}

// function enable(el) {
//     el.disabled = false;
// }

function enable(el: HTMLButtonElement | HTMLTextAreaElement): void {
  el.disabled = false;
}

// function disable(el) {
//     el.disabled = true;
// }

function disable(el: HTMLButtonElement | HTMLTextAreaElement): void {
  el.disabled = true;
}

// function submitForm(answer) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (answer.toLowerCase() === "dhaka") {
//                 resolve();
//             } else {
//                 reject(new Error("Good guess but a wrong answer. Try again!"));
//             }
//         }, 3000);
//     });
// }

function submitForm(answer: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}
