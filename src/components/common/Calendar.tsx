import {useState} from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
} from 'date-fns';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa6';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startOfMonthDate = startOfMonth(currentMonth);
  const endOfMonthDate = endOfMonth(currentMonth);
  const startWeekDate = startOfWeek(startOfMonthDate);
  const endWeekDate = endOfWeek(endOfMonthDate);

  const days = eachDayOfInterval({start: startWeekDate, end: endWeekDate});

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <header className="flex items-center justify-between bg-primary p-4 text-white">
          <button onClick={handlePrevMonth} className="text-sm">
            <FaAngleLeft />
          </button>
          <h2 className="text-xl font-semibold">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <button onClick={handleNextMonth} className="text-sm">
            <FaAngleRight />
          </button>
        </header>

        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <th
                  key={day}
                  className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((_day, index) => (
              <tr key={index} className="grid grid-cols-7">
                {days.slice(index * 7, index * 7 + 7).map((date, idx) => (
                  <td
                    key={idx}
                    className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"
                  >
                    <span className="font-medium text-black dark:text-white">
                      {format(date, 'd')}
                    </span>
                    {/* Add event details here if needed */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calendar;
