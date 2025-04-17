const UserMessage = ({ text }) => {
  return (
    <div className="flex w-[80%] ml-auto text-left right-0 p-1 justify-end">
      <div className="bg-black text-white border-black border-1 inline-block px-3 py-2 rounded-2xl">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
