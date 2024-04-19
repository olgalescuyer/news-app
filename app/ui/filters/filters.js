import { ChevronDownIcon, CalendarIcon } from '@/app/icons/icons';
// https://react-day-picker.js.org/

const Filters = () => {
  return (
    <div className="filters flex items-center space-x-1.5 ">
      <button className="sort-by-date">
        <div className="chips">
          <span> date</span>

          <CalendarIcon variant="size-5 " />
        </div>
      </button>

      <div className="vertical-divider w-px h-8 bg-grayscale-300"></div>

      <div className="flex space-x-3 ">
        {[
          ['country', 1],
          ['language', 2],
          ['source', 3],
        ].map(([label, i], index) => (
          <button key={i} className="">
            <div className="chips flex items-center space-x-1 bg-light">
              <span> {label}</span>

              <ChevronDownIcon variant="size-5 mt-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
