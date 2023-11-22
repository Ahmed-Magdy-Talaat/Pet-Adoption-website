import React, { useRef, useEffect, Children } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  // Create a reference to a DOM element
  const elRef = useRef(null);

  if (!elRef.current) {
    // If the reference is empty, create a new <div> element
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // Find the container with the id "modal" in the DOM
    const modalRoot = document.getElementById("modal");

    // Add the newly created <div> (elRef.current) to the container
    modalRoot.appendChild(elRef.current);

    // This line should be removed; it immediately removes the element you just added
    // modalRoot.removeChild(elRef.current);

    // Cleanup function to remove the element when the component unmounts
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // Render the modal content using createPortal
  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
