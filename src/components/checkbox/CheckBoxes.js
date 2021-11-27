import React from "react";

const CheckBoxes = () => {
  return (
    <fieldset>
      <legend className="sr-only">Checkbox variants</legend>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-1"
          aria-describedby="checkbox-1"
          type="checkbox"
          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        />
        <label
          htmlFor="checkbox-1"
          className="text-sm ml-3 font-medium text-gray-900"
        >
          I agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms and conditions
          </a>
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-2"
          aria-describedby="checkbox-2"
          type="checkbox"
          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        />
        <label
          htmlFor="checkbox-2"
          className="text-sm ml-3 font-medium text-gray-900"
        >
          I want to get promotional offers
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-3"
          aria-describedby="checkbox-3"
          type="checkbox"
          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        />
        <label
          htmlFor="checkbox-3"
          className="text-sm ml-3 font-medium text-gray-900"
        >
          I am 18 years or older
        </label>
      </div>

      <div className="flex mb-4">
        <div className="flex items-center h-5">
          <input
            id="shipping-2"
            aria-describedby="shipping-2"
            type="checkbox"
            className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
          />
        </div>
        <div className="text-sm ml-3">
          <label htmlFor="shipping-2" className="font-medium text-gray-900">
            Free shipping via Flowbite
          </label>
          <div className="text-gray-500">
            <span className="font-normal text-xs">
              For orders shipped from Flowbite from{" "}
              <span className="font-medium">€ 25</span> in books or{" "}
              <span>€ 29</span> on other categories
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="international-shipping-disabled"
          aria-describedby="international-shipping-disabled"
          type="checkbox"
          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
          disabled
        />
        <label
          htmlFor="international-shipping-disabled"
          className="text-sm ml-3 font-medium text-gray-400"
        >
          Eligible for international shipping (disabled)
        </label>
      </div>
    </fieldset>
  );
};

export default CheckBoxes;
