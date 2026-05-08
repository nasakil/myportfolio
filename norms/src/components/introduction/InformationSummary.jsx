const InformationSummary = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="w-auto h-auto mx-3 sm:mx-6 my-5 sm:my-6 text-center">
        <p className="text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-[#456882]">
          {item.description}
        </p>
        <p className="text-[11px] xxs:text-[12px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;