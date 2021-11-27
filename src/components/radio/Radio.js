import React from "react";

const Radio = () => {
  return (
    <fieldset>
      <legend className="sr-only">Countries</legend>

      <div className="flex items-center mb-4">
        <input
          id="country-option-1"
          type="radio"
          name="countries"
          value="USA"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="country-option-1"
          aria-describedby="country-option-1"
        />
        <label
          htmlFor="country-option-1"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          United States
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="country-option-2"
          type="radio"
          name="countries"
          value="Germany"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="country-option-2"
          aria-describedby="country-option-2"
        />
        <label
          htmlFor="country-option-2"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          Germany
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="country-option-3"
          type="radio"
          name="countries"
          value="Spain"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="country-option-3"
          aria-describedby="country-option-3"
        />
        <label
          htmlFor="country-option-3"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          Spain
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="country-option-4"
          type="radio"
          name="countries"
          value="United Kingdom"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="country-option-4"
          aria-describedby="country-option-4"
        />
        <label
          htmlFor="country-option-4"
          className="text-sm font-medium text-gray-900 ml-2 block"
        >
          United Kingdom
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="option-disabled"
          type="radio"
          name="countries"
          value="China"
          className="h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="option-disabled"
          aria-describedby="option-disabled"
          disabled
        />
        <label
          htmlFor="option-disabled"
          className="text-sm font-medium text-gray-400 ml-2 block"
        >
          China (disabled)
        </label>
      </div>
    </fieldset>
  );
};

export default Radio;
