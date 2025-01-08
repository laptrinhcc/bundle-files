const obj_CreateFun_ = {
  Pp_ToBody: function (elm) {
    document.body.prepend(elm);
  },
  C_Tag_FO_IE: function (tag, att = {}, children = []) {
    const elm = document.createElement(tag);
    for (const [key, value] of Object.entries(att)) {
      elm.setAttribute(key, value);
    }
    for (child of children) {
      if (typeof child === "string") {
        elm.appendChild(document.createTextNode(child));
      } else {
        elm.appendChild(child);
      }
    }
    return elm;
  },
};
