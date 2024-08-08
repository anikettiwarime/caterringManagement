import React, {useState} from 'react';
import {Input, Select, TextArea} from '@/components/common/forms';

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
    dishName: '',
    priority: '',
    category: '',
    dishDescription: '',
    rawMaterialName: '',
    quantity: '',
    unit: '',
    process: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  return (
    <div className="bg-gray-100 flex min-h-screen flex-col">
      <h1 className="mb-6 text-2xl font-bold">Dish Master</h1>

      <div className="mb-6 flex w-full flex-col rounded-lg bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-4 flex items-center">
          <Input
            type="text"
            id="dishName"
            name="dishName"
            placeholder="Dish Name"
            className="text-md mr-4 flex-1 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.dishName}
            onChange={handleInputChange}
          />
          <Select
            id="priority"
            name="priority"
            options={{
              placeholder: 'Select Priority',
              items: [
                {value: 'high', label: 'High'},
                {value: 'medium', label: 'Medium'},
                {value: 'low', label: 'Low'},
              ],
            }}
            className="text-md mr-4 w-48 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.priority}
            onChange={handleInputChange}
          />
          <Select
            id="category"
            name="category"
            options={{
              placeholder: 'Select Category',
              items: [
                {value: 'appetizer', label: 'Appetizer'},
                {value: 'mainCourse', label: 'Main Course'},
                {value: 'dessert', label: 'Dessert'},
              ],
            }}
            className="text-md mr-4 w-48 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
            value={formData.category}
            onChange={handleInputChange}
          />
          <button className="text-md ml-4 rounded-md bg-primary px-6 py-3 text-white hover:bg-opacity-90">
            Load
          </button>
        </div>

        <TextArea
          id="dishDescription"
          name="dishDescription"
          placeholder="Dish Description"
          className="text-md mb-4 h-24 w-full rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.dishDescription}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6 w-full rounded-lg bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-gray-300 mb-4 grid grid-cols-5 gap-4 pb-4">
          <div className="text-md flex items-center justify-center rounded-md p-4 text-center">
            Content
          </div>
          <div className="flex items-center justify-center">
            <div className="text-md mt-3 flex flex-col items-center space-y-4 rounded-md p-4">
              <input
                type="text"
                placeholder="People"
                className="bg-gray-100 w-20 max-w-xs rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
              <input
                type="text"
                placeholder="Kg"
                className="bg-gray-100 w-20 max-w-xs rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
              <input
                type="text"
                placeholder="Price"
                className="bg-gray-100 w-20 max-w-xs rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-3 overflow-x-auto p-4">
            <div className="flex space-x-4">
              {/* Map through columns */}
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="People"
                    className="bg-gray-100 w-20 rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Kg"
                    className="bg-gray-100 w-20 rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    className="bg-gray-100 w-20 rounded-md border border-stroke p-2 text-center dark:border-strokedark dark:bg-meta-4 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-md flex items-center justify-center rounded-md p-4 text-center">
            Unit
          </div>
          <div className="text-md flex items-center justify-center rounded-md p-4 text-center">
            Process
          </div>
        </div>
      </div>

      <div className="mb-6 flex w-full items-center space-x-4">
        <Input
          id=""
          type="text"
          name="rawMaterialName"
          placeholder="Raw Material Name"
          className="text-md mr-4 w-full rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.rawMaterialName}
          onChange={handleInputChange}
        />
        <Input
          id=""
          type="text"
          name="quantity"
          placeholder="Quantity"
          className="text-md mr-4 w-32 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <Select
          id=""
          name="unit"
          options={{
            placeholder: 'Select Unit',
            items: [
              {value: 'kg', label: 'Kg'},
              {value: 'g', label: 'Grams'},
              {value: 'l', label: 'Litres'},
            ],
          }}
          className="text-md mr-4 w-36 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.unit}
          onChange={handleInputChange}
        />
        <Select
          id=""
          name="process"
          options={{
            placeholder: 'Select Process',
            items: [
              {value: '1', label: 'Process 1'},
              {value: '2', label: 'Process 2'},
            ],
          }}
          className="text-md mr-4 w-36 rounded-md border border-stroke p-3 dark:border-strokedark dark:bg-meta-4 dark:text-white"
          value={formData.process}
          onChange={handleInputChange}
        />
        <button className="text-md rounded-md bg-primary px-6 py-3 text-white hover:bg-opacity-90">
          Add
        </button>
        <button className="text-md rounded-md bg-primary px-6 py-3 text-white hover:bg-opacity-90">
          Clear
        </button>
      </div>
    </div>
  );
};

export default DishMaster;
