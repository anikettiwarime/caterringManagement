import Breadcrumb from '@/components/Breadcrumbs';
import { maharajConditonalRender } from '@/components/Maharaj/CreateMaharajRouting';
import { VerticalTab } from '@/components/VerticalTab';
import { useState } from 'react';

const Maharaj = () => {

  const [jsxElement,setJsxElement] = useState<JSX.Element>()

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb />
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <VerticalTab tabData={maharajConditonalRender} setJsxElement={setJsxElement} />
        </div>
        <div className="col-span-6">{jsxElement}</div>
      </div>
    </div>
  );
};

export default Maharaj;
