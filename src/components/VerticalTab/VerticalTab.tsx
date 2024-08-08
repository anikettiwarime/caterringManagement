import React, {useEffect, useState} from 'react';
import {FaAngleDown} from 'react-icons/fa6';
import {TabTypes} from '@/types';
import {VerticalTabPropsTypes} from '@/types';


const VerticalTab: React.FC<VerticalTabPropsTypes> = (props) => {

  const { tabData , setJsxElement}: VerticalTabPropsTypes = props;

  const [dropDownKey, setDropDownKey] = useState<number>();

  const [component, setComponent] = useState<string>(tabData[0].categories[0].accessor);


  const handleComponentConditionaly = (value: string) => {
    
      setComponent(value);

  }

  const componentToRender = tabData.map((renderComponent) => {
    return renderComponent.categories.map((renderComponent2) => {
      return (
        renderComponent2.accessor === component && renderComponent2.component
      );
    });
  });

  useEffect(() => {
    setJsxElement(componentToRender)
  },[component])
  

  return (
    <div className="w-50 rounded-sm border border-stroke bg-white p-2 shadow-default dark:border-strokedark dark:bg-boxdark">
      {tabData?.map((value: TabTypes, valueindex: number) => {
        return (
          <div key={valueindex}>
            <div
              className="align-center flex justify-between p-2"
              onClick={() => setDropDownKey(valueindex)}
            >
              <p className="font-medium">{value.name}</p>
              <FaAngleDown />
            </div>
            {dropDownKey === valueindex && (
              <div>
                {value.categories?.map((category, categoryindex: number) => {
                  return (
                    <div
                      key={categoryindex}
                      className="cursor-pointer p-2 pl-4"
                      onClick={() =>
                        handleComponentConditionaly(category.accessor)
                      }
                    >
                      {category?.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      {/* {componentToRender} */}
    </div>
  );
};

export default VerticalTab;
