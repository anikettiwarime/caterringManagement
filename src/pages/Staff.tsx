import React, {useState} from 'react';
import Breadcrumb from '@/components/Breadcrumbs';
import {VerticalTab} from '@/components/VerticalTab';
import {staffConditonalRender} from '@/components/Staff/CreateStaffRouting';
const Staff: React.FC = () => {
  const [jsxElement, setJsxElement] = useState<JSX.Element>();

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <VerticalTab
            tabData={staffConditonalRender}
            setJsxElement={setJsxElement}
          />
        </div>
        <div className="col-span-6">{jsxElement}</div>
      </div>
    </div>
  );
};

export default Staff;
