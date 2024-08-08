import React, {useState} from 'react';
import Breadcrumb from '@/components/Breadcrumbs';
import {VerticalTab} from '@/components/VerticalTab';
import {DishRouting} from '@/components/Dish/CreateRoutingData';

const DishManagement: React.FC = () => {
  const [jsxElement, setJsxElement] = useState<JSX.Element>();

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <VerticalTab tabData={DishRouting} setJsxElement={setJsxElement} />
        </div>
        <div className="col-span-6">{jsxElement}</div>
      </div>
    </div>
  );
};

export default DishManagement;
