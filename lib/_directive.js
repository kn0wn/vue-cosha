import defaults from "./_defaults";
import { createWrapperClass, createCloneStyles } from "./_styles";

const className = "cosha";

const cosha = (el, options, vnode) => {
  if (!el) return console.warn("[vue-cosha]: Element doesn't exist!");
  if (vnode.tag !== "img")
    return console.warn("[vue-cosha]: Directive must be on an image");

  createWrapperClass(className);

  const parent = el.parentNode;
  const hasBeenCreated = parent.classList.contains(`${className}-wrapper`);

  if (!hasBeenCreated) {
    const wrapper = document.createElement("div");
    const clonedNode = el.cloneNode(true);

    wrapper.classList.add(`${className}-wrapper`);
    clonedNode.classList.add(`${className}-clone`);
    clonedNode.style.cssText = createCloneStyles(clonedNode.style, options);
    clonedNode.setAttribute("alt", "");

    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    wrapper.appendChild(clonedNode);
  }

  if (hasBeenCreated) {
    const clonedChild = [...el.parentNode.children].find(child =>
      child.classList.contains(`${className}-clone`)
    );
    clonedChild.style.cssText = createCloneStyles(clonedChild.style, options);
  }
};

export default options => {
  const mergedOptions = Object.assign(defaults, options);

  const inserted = (el, { value }, vnode) => {
    const mergedValues = Object.assign(mergedOptions, value);

    return cosha(el, mergedValues, vnode);
  };

  const update = (el, { value }, vnode) => {
    const mergedValues = Object.assign(mergedOptions, value);

    return cosha(el, mergedValues, vnode);
  };

  return { inserted, update };
};
