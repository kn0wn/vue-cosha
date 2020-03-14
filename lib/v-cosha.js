import defaults from "./defaults";

function createStyles(options) {
  const { blur, brightness, saturation, x, y, className, index } = options;

  // Just to check that there isn't already a style created
  const created = document.getElementById(`${className}-styles`);
  if (created) {
    created.parentElement.removeChild(created);
  }

  const styles = document.createElement("style");
  styles.setAttribute("id", `${className}-styles`);

  styles.textContent = `
      .${className}-wrapper {
          position: relative;
          display: flex;
          z-index: ${index};
          align-items: center;
          justify-content: center;
      }
      .${className}-clone {
          position: absolute;
          filter: blur(${blur}) brightness(${brightness}) saturate(${saturation});
          z-index: ${index - 1};
          transform: translate3d(${x}, ${y}, 0);
      }
  `;
  document.head.appendChild(styles);
}

function create(options) {
  const mergedOptions = Object.assign(defaults, options);

  const directive = {
    options: mergedOptions
  };

  directive.cosha = function(el, binding, vnode) {
    if (!el) return;

    const wrapper = document.createElement("div");
    const clonedNode = el.cloneNode(true);
    const { className } = directive.options;

    createStyles(directive.options);

    wrapper.classList.add(`${className}-wrapper`);
    clonedNode.classList.add(`${className}-clone`);
    // Make sure to hiden the background image from screen readers
    clonedNode.setAttribute("aria-hidden", true);

    // Place the cloned element into the dom
    vnode.context.$nextTick(() => {
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
      wrapper.appendChild(clonedNode);
    });
  };

  directive.bind = function(el, binding, vnode) {
    directive.cosha(el, binding, vnode);
  };

  return directive;
}

export default create;
