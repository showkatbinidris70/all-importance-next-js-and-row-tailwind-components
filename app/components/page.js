"use client";
import React from "react";

export default function Nav_bar() {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
  return (
    <div>
      {/* <button id="hamburger" onClick={toggleMenu}>
        Hamburger
      </button> */}
      <section className="">
        <div className="container max-w-7xl px-4">
          <nav class="flex flex-wrap items-center justify-between p-5 bg-blue-200">
            <div>showkat</div>
            <div class="flex md:hidden">
              <button id="hamburger" onClick={toggleMenu}>
                <img
                  class="toggle block"
                  src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                  width="40"
                  height="40"
                />
                <img
                  class="toggle hidden"
                  src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                  width="40"
                  height="40"
                />
              </button>
            </div>
            <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
              <a
                href="#"
                class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Home
              </a>
              <a
                href="#"
                class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Products
              </a>
              <a
                href="#"
                class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Pricing
              </a>
              <a
                href="#"
                class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Contact
              </a>
            </div>
            <a
              href="#"
              class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded"
            >
              Create Account
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
