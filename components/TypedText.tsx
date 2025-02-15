"use client";

import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

const TypedText = (options: TypedOptions) => {
  const el = useRef(null);

  const defaultOptions: TypedOptions = {
    typeSpeed: 30,
    backSpeed: 25,
    showCursor: false,
  };

  useEffect(() => {
    const typed = new Typed(el.current, { ...defaultOptions, ...options });

    return () => {
      typed.destroy();
    };
  });

  return <span ref={el} />;
};

export default TypedText;
