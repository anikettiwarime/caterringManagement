import React, { useState } from 'react';
import { Input ,Select,TextArea} from '@/components/common/forms';

interface FormData {
  dishName: string;
  priority: string;
  category: string;
  dishDescription: string;
  rawMaterialName: string;
  quantity: string;
  unit: string;
  process: string;
}

const DishMaster: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dishName: "",
    priority: "",
    category: "",
    dishDescription: "",
    rawMaterialName: "",
    quantity: "",
    unit: "",
    process: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dish Master</h1>

      <div className="flex flex-col bg-white p-6 rounded-lg shadow-default mb-6 w-full dark:bg-boxdark dark:border-strokedark">
        <div className="flex items-center mb-4">
          <Input
            type="text"
            id="dishName"
            name="dishName"
            placeholder="Dish Name"
            className="p-3 text-md border border-stroke rounded-md flex-1 mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.dishName}
            onChange={handleInputChange}
          />
          <Select
            id="priority"
            name="priority"
            options={{ placeholder: "Select Priority", items: [{value: "high", label: "High"}, {value: "medium", label: "Medium"}, {value: "low", label: "Low"}] }}
            className="p-3 text-md border border-stroke rounded-md w-48 mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.priority}
            onChange={handleInputChange}
          />
          <Select
            id="category"
            name="category"
            options={{ placeholder: "Select Category", items: [{value: "appetizer", label: "Appetizer"}, {value: "mainCourse", label: "Main Course"}, {value: "dessert", label: "Dessert"}] }}
            className="p-3 text-md border border-stroke rounded-md w-48 mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.category}
            onChange={handleInputChange}
          />
          <button className="px-6 py-3 text-md text-white bg-primary rounded-md hover:bg-opacity-90 ml-4">
            Load
          </button>
        </div>

        <TextArea
          id="dishDescription"
          name="dishDescription"
          placeholder="Dish Description"
          className="p-3 text-md border border-stroke rounded-md w-full h-24 mb-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.dishDescription}
          onChange={handleInputChange}
        />
      </div>


      <div className="w-full bg-white rounded-lg shadow-default mb-6 dark:bg-boxdark dark:border-strokedark">
        <div className="grid grid-cols-5 gap-4 border-gray-300 pb-4 mb-4">
          <div className="flex items-center justify-center text-center p-4 rounded-md text-md">
            Content
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4 p-4 rounded-md text-md mt-3">
              <input
                type="text"
                placeholder="People"
                className="w-20 max-w-xs text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
              <input
                type="text"
                placeholder="Kg"
                className="w-20 max-w-xs text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
              <input
                type="text"
                placeholder="Price"
                className="w-20 max-w-xs text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto p-4 mt-3">
            <div className="flex space-x-4">
              {/* Map through columns */}
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="People"
                    className="w-20 text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Kg"
                    className="w-20 text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    className="w-20 text-center rounded-md p-2 border border-stroke bg-gray-100 dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-center p-4 text-md rounded-md">
            Unit
          </div>
          <div className="flex items-center justify-center text-center p-4 text-md rounded-md">
            Process
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 w-full mb-6">
        <Input
        id=''
          type="text"
          name="rawMaterialName"
          placeholder="Raw Material Name"
          className="p-3 text-md border border-stroke rounded-md mr-4 w-full dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.rawMaterialName}
          onChange={handleInputChange}
        />
        <Input
        id=''
          type="text"
          name="quantity"
          placeholder="Quantity"
          className="w-32 p-3 text-md border border-stroke rounded-md mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <Select
        id=''
          name="unit"
          options={{ placeholder: "Select Unit", items: [{value: "kg", label: "Kg"}, {value: "g", label: "Grams"}, {value: "l", label: "Litres"}] }}
          className="w-36 p-3 text-md border border-stroke rounded-md mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.unit}
          onChange={handleInputChange}
        />
        <Select
        id=''
          name="process"
          options={{ placeholder: "Select Process", items: [{value: "1", label: "Process 1"}, {value: "2", label: "Process 2"}] }}
          className="w-36 p-3 text-md border border-stroke rounded-md mr-4 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.process}
          onChange={handleInputChange}
        />
        <button className="px-6 py-3 text-md text-white bg-primary rounded-md hover:bg-opacity-90">
          Add
        </button>
        <button className="px-6 py-3 text-md text-white bg-primary rounded-md hover:bg-opacity-90">
          Clear
        </button>
      </div>
    </div>
  );
};

export default DishMaster;
