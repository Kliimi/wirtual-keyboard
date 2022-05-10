import { addHeader, addDescription } from "./text";
import { implementTextarea } from "./textarea";
import { renderKeyboard } from "./keyboard";
import { rows } from "./variables";
import {
  shiftDown,
  shiftUp,
  toggleCapsLock,
  changeLang,
} from "./keyboard-logic";
import { typingInTextarea } from "./textarea";
import "../styles/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const BODY = document.querySelector("body");
  let wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  BODY.prepend(wrapper);
  let title = addHeader();

  wrapper.append(title);
  let textarea = implementTextarea();
  wrapper.append(textarea);
  let renderedKeyboard = renderKeyboard(rows);
  wrapper.append(renderedKeyboard);
  let description = addDescription();
  wrapper.append(description);

  let keys = document.querySelectorAll(".key");
  let space = document.querySelector("#Space");
  let leftShift = document.querySelector("#LShift");
  let rightShift = document.querySelector("#RShift");
  let capsLock = document.querySelector("#CapsLock");
  let body = document.querySelector("body");
  let textArea = document.querySelector("#textarea");
  let leftCtrl = document.querySelector("#LCtrl");
  let rightCtrl = document.querySelector("#RCtrl");
  let leftAlt = document.querySelector("#LAlt");
  let rightAlt = document.querySelector("#RAlt");
  let changedKeys = document.querySelectorAll(".change-key");
  let keyboard = document.querySelector(".keyboard");
  let tab = document.querySelector("#Tab");

  window.addEventListener("keydown", function (e) {
    for (let i = 0; i < keys.length; i++) {
      if (
        e.key == keys[i].getAttribute("rus-value") ||
        e.key == keys[i].getAttribute("rus-Shiftvalue") ||
        e.key == keys[i].getAttribute("eng-value") ||
        e.key == keys[i].getAttribute("eng-Shiftvalue") ||
        e.key == keys[i].getAttribute("keyName")
      ) {
        e.preventDefault();
        if (e.code == "CapsLock") {
          if (capsLock.classList.contains("active")) {
            capsLock.classList.remove("active");
          } else {
            capsLock.classList.add("active");
          }

          toggleCapsLock(e, capsLock, changedKeys);
        } else {
          keys[i].classList.add("active");
          if (keys[i].classList.contains("change-key")) {
            typingInTextarea(e, keys[i], textArea);
          }
        }
      }

      if (e.code == "Space") {
        space.classList.add("active");
      }
      if (e.key == "Shift") {
        shiftDown(e, capsLock, leftShift, rightShift, changedKeys);
      }
      if (e.code == "ShiftLeft") {
        rightShift.classList.remove("active");
      }
      if (e.code == "ShiftRight") {
        leftShift.classList.remove("active");
      }
      if (e.code == "ControlLeft") {
        rightCtrl.classList.remove("active");
      }
      if (e.code == "ControlRight") {
        leftCtrl.classList.remove("active");
      }
      if (e.code == "AltLeft") {
        rightAlt.classList.remove("active");
      }
      if (e.code == "AltRight") {
        leftAlt.classList.remove("active");
      }

      changeLang(changedKeys, leftCtrl, leftAlt, capsLock);
    }
    if (e.code == "Space") {
      return (textArea.value += " ");
    }
    if (e.code == "Backspace") {
      return (textArea.value = textArea.value.slice(0, -1));
    }
    if (e.code == "Tab") {
      e.preventDefault();
      return (textArea.value += "    ");
    }
    if (e.code == "Enter") {
      return (textArea.value += "\r\n");
    }
  });

  window.addEventListener("keyup", function (e) {
    for (let i = 0; i < keys.length; i++) {
      if (
        e.key == keys[i].getAttribute("rus-value") ||
        e.key == keys[i].getAttribute("rus-Shiftvalue") ||
        e.key == keys[i].getAttribute("eng-value") ||
        e.key == keys[i].getAttribute("eng-Shiftvalue") ||
        e.key == keys[i].getAttribute("keyName")
      ) {
        if (e.code !== "CapsLock") {
          keys[i].classList.remove("active");
        }
      }
      if (e.code == "Space") {
        space.classList.remove("active");
      }
      if (e.key == "Shift") {
        shiftUp(e, capsLock, leftShift, rightShift, changedKeys);
      }
      if (e.code == "ShiftLeft") {
      }
      if (e.code == "ShiftRight") {
      }
      if (e.code == "ControlLeft") {
      }
      if (e.code == "ControlRight") {
      }
      if (e.code == "AltLeft") {
      }
      if (e.code == "AltRight") {
      }
    }
  });

  keyboard.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("change-key")) {
      textArea.value += e.target.innerText;
    } else {
      if (e.target.getAttribute("keyname") == "Backspace") {
        return (textArea.value = textArea.value.slice(0, -1));
      }
      if (e.target.getAttribute("keyname") == "Tab") {
        return (textArea.value += "    ");
      }
      if (e.target.getAttribute("keyname") == "Enter") {
        return (textArea.value += "\r\n");
      }
      if (
        e.target.getAttribute("id") == "RShift" ||
        e.target.getAttribute("id") == "LShift"
      ) {
        shiftDown(e, capsLock, leftShift, rightShift, changedKeys);
      }
      if (e.target.getAttribute("keyname") == "CapsLock") {
        capsLock.classList.toggle("active");
        toggleCapsLock(e, capsLock, changedKeys);
      }
      if (e.target.getAttribute("keyname") == "space") {
        return (textArea.value += " ");
      }
    }
  });
  keyboard.addEventListener("mouseup", (e) => {
    if (
      e.target.getAttribute("id") == "RShift" ||
      e.target.getAttribute("id") == "LShift"
    ) {
      shiftUp(e, capsLock, leftShift, rightShift, changedKeys);
    }
  });
});
