"use client";

import { useState, useEffect } from "react";

function CountDown() {
  const [counts, setCounts] = useState({
    projects: 0,
    countries: 0,
    customers: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  const finalValues = {
    projects: 200,
    countries: 20,
    customers: 150,
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    const incrementValues = {
      projects: finalValues.projects / steps,
      countries: finalValues.countries / steps,
      customers: finalValues.customers / steps,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounts({
        projects: Math.min(
          Math.floor(incrementValues.projects * currentStep),
          finalValues.projects
        ),
        countries: Math.min(
          Math.floor(incrementValues.countries * currentStep),
          finalValues.countries
        ),
        customers: Math.min(
          Math.floor(incrementValues.customers * currentStep),
          finalValues.customers
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts(finalValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Projects Completed */}
        <div className="text-center group">
          <div className="mb-4">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 transition-all duration-300 group-hover:text-emerald-600">
              {counts.projects}
              <span className="text-emerald-600 ml-1">+</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base font-medium tracking-wide">
            Projects Completed
          </p>
        </div>

        {/* Countries Served */}
        <div className="text-center group">
          <div className="mb-4">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 transition-all duration-300 group-hover:text-emerald-600">
              {counts.countries}
              <span className="text-emerald-600 ml-1">+</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base font-medium tracking-wide">
            Countries Served
          </p>
        </div>

        {/* Satisfied Customers */}
        <div className="text-center group">
          <div className="mb-4">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 transition-all duration-300 group-hover:text-emerald-600">
              {counts.customers}
              <span className="text-emerald-600 ml-1">+</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base font-medium tracking-wide">
            Satisfied Customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
