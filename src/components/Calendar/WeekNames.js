const WeekNames = () => {
  return (
    <div className="flex rounded-t-xl bg-gray-400 dark:bg-gray-900">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <div className="w-24 h-24  flex items-center justify-center text-green-500 text-lg font-semibold border-r border-b border-gray-700 last:border-r-0">{dayName}</div>
      ))}
    </div>
  );
};

export default WeekNames;
