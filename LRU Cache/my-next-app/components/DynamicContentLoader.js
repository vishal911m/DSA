"use client";

import React, { useState } from "react";
import useLRUCache from "../hooks/useLRUCache";

const DynamicContentLoader = () => {
  const [content, setContent] = useState([]);
  const { get, put } = useLRUCache(3);

  const loadContent = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const loadedContent = {
      id,
      text: `Tab ${id} Data`,
    };

    put(id, loadedContent);
    setContent((prev) => [...prev, loadedContent]);
  };

  const handleButtonClick = (id) => {
    const cachedContent = get(id);
    if (cachedContent) {
      console.log(`Content ${id} loaded from cache`);
      setContent((prev) => [...prev, cachedContent]);
    } else {
      console.log(`Loading content ${id}`);
      loadContent(id);
    }
  };

  return (
    <div>
      <h2>Dynamic Content Loader with LRU Cache</h2>
      <div style={{ marginBottom: "10px" }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <button key={id} onClick={() => handleButtonClick(id)}>
            Tab {id}
          </button>
        ))}
      </div>

      <div>
        <h3>Loaded Content</h3>
        <ul>
          {content.map((item, i) => (
            <li key={`${item.id}${i}`}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicContentLoader;
