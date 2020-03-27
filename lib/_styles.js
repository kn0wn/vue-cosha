const createWrapperClass = className => {
  const created = document.getElementById(`${className}-class`);

  if (created) {
    created.parentElement.removeChild(created);
  }

  const styles = document.createElement("style");
  styles.setAttribute("id", `${className}-class`);

  styles.textContent = `
      .${className}-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
      }
  `;
  document.head.appendChild(styles);
};

const createCloneStyles = (currentStyles, options) => {
  const { blur, brightness, saturation, x, y, index } = options;
  const mergedStyles =
    currentStyles.cssText +
    `
    position: absolute;
    filter: blur(${blur}) brightness(${brightness}) saturate(${saturation});
    z-index: -1;
    transform: translate3d(${x}, ${y}, 0);
  `;

  return mergedStyles;
};

export { createWrapperClass, createCloneStyles };
