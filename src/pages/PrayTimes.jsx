/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const PrayTimes = ({ times, date }) => {
  // Determine AM or PM
  const calculateAmORPm = (time) => {
    const timeInt = parseInt(time[0] + time[1] + time[3] + time[4]);
    if (timeInt < 1200 || timeInt > 2400) {
      return " AM";
    }
    return " PM";
  };

  // Convert 24h to 12h time
  const convertTo12h = (time) => {
    const timeInt = parseInt(time[0] + time[1]);
    if (timeInt > 12) {
      return `${timeInt - 12}:${time[3]}${time[4]}`;
    }
    return time;
  };

  // Calculate Aliqama
  // const aliqamaTime = (time, prayNow) => {
  //   const miniutes = parseInt(time[3]+time[4]);
  //   const hours = parseInt(time[0]+time[1]);
  //   const IqamaMinutiesAdding = {
  //     Fajr: '20',
  //     Dhuhr: '15',
  //     Asr: '15',
  //     Sunset: '10',
  //     Isha: '15'
  //   }
  //   const {prayNow} = IqamaMinutiesAdding
  //   console.log(prayNow)
  // }
  return (
    <div className="hero  bg-base-200 py-10 reem-kufi-nav" dir="rtl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-[180px] justify-around">
        <div className="text-center lg:text-right w-full">
          <h1 className="text-6xl font-bold">اوقات الصلاة اليوم</h1>

          <p className="pt-6 text-xl">
            {date.hijri.weekday.ar}, {date.hijri.day} {date.hijri.month.ar}{" "}
            {date.hijri.year}
          </p>
          <p className="mt-3 text-xl">
            {date.gregorian.weekday.en}, {date.gregorian.day}{" "}
            {date.gregorian.month.en} {date.gregorian.year}
          </p>
        </div>

        {/* pray times */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>الصلاة</th>
                  <th>الاذان</th>
                  <th>الاقامة</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-base-200">
                  <td>الفجر</td>
                  <td>
                    {convertTo12h(times.Fajr)} {calculateAmORPm(times.Fajr)}
                  </td>
                  <td>+20 دقيقة</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-base-200">
                  <td>الشروق</td>
                  <td>
                    {convertTo12h(times.Sunrise)}{" "}
                    {calculateAmORPm(times.Sunrise)}
                  </td>
                  <td>-</td>
                </tr>
                {/* row 3 */}
                <tr className="hover:bg-base-200">
                  <td>الظهر</td>
                  <td>
                    {convertTo12h(times.Dhuhr)} {calculateAmORPm(times.Dhuhr)}
                  </td>
                  <td>+15 دقيقة</td>
                </tr>
                {/* row 4 */}
                <tr className="hover:bg-base-200">
                  <td>العصر</td>
                  <td>
                    {convertTo12h(times.Asr)} {calculateAmORPm(times.Asr)}
                  </td>
                  <td>+15 دقيقة</td>
                </tr>
                {/* row 5 */}
                <tr className="hover:bg-base-200">
                  <td>المغرب</td>
                  <td>
                    {convertTo12h(times.Sunset)} {calculateAmORPm(times.Sunset)}
                  </td>
                  <td>+10 دقيقة</td>
                </tr>
                {/* row 6 */}
                <tr className="hover:bg-base-200">
                  <td>العشاء</td>
                  <td>
                    {convertTo12h(times.Isha)} {calculateAmORPm(times.Isha)}
                  </td>
                  <td>+15 دقيقة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayTimes;
