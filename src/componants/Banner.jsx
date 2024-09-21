const Banner = () => {
  const x = "{البقرة:238}";
  return (
    <div className="container mx-auto ">
      <div
        dir="ltr"
        className=" mx-auto flex m-h-screen bg-[url('https://i.ibb.co/0Ct1Mhc/bg.png')] text-white flex-col sm:flex-row"
      >
        <div className="w-full sm:w-1/2 shrink-0 px-4 h-auto">
          <img
            className="sm:h-screen my-3 rounded-full mx-auto "
            src="https://i.ibb.co/WBBm9rd/28213383-7262024-copy-1.png"
          />
        </div>

        <div className=" w-1\2 flex-col text-center text-white flex flex-col justify-center items-center">
          {/* الاحاديث و الاستدلالات */}
          <div className="flex flex-col justify-center items-center">
            <img className="size-80 hidden sm:block" src="https://i.ibb.co/wKjXRCW/22632665-6670940-removebg-preview.png" alt="" />
            <p className="my-3 px-4 font-bold text-2xl">
              قال تعالى : حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَى
              وَقُومُوا لِلَّهِ قَانِتِينَ
              <br />
              <br />
              {x}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
