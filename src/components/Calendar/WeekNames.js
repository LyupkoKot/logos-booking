const WeekNames = () => {
  return (
    <div className="flex rounded-t-xl bg-green-500 dark:bg-gray-900">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <div
          className="md:w-24 md:h-24 w-10 h-10 flex items-center justify-center text-white dark:text-green-500 text-lg font-semibold border-r border-b border-gray-300 dark:border-gray-700 last:border-r-0"
          key={dayName}
        >
          {dayName}
        </div>
      ))}
    </div>
  );
};

export default WeekNames;
