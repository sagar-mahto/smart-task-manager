const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {["All", "Completed", "Pending"].map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-4 py-2 rounded-lg border ${
            filter === item
              ? "bg-indigo-600 text-white"
              : "bg-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
