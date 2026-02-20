import { FaStar } from "react-icons/fa";

const RatingStar = ({ rating }) => {
  return (
    <div className="flex gap-1 text-3xl">
      {[1, 2, 3, 4, 5].map((star, idx) => {
        const roundUpDecimal = (num, decimals) => {
            const factor = 10 ** decimals;
            return Math.ceil(num * factor) / factor;
        };

        // const fill = Math.min(Math.max(rating - idx, 0), 1);
        const fill = rating - 1 - idx;
        let width = 100;
        if (Math.ceil(roundUpDecimal(fill, 2)) > 1) {
          width = 100;
        } else if(Math.ceil(roundUpDecimal(fill, 2)) > 0){
          width = (1 - Math.ceil(fill));
        }

        console.log("idx: ", idx, fill, width);
        return (
          <div key={idx} className="relative w-6 h-6">
            <FaStar className="absolute top-0 left-0 w-[fill] h-full text-yellow-300" />

            {/* {fill > 0 && (
              <FaStar
                className="absolute top-0 left-0 h-full text-yellow-400"
                style={{
                  width: `${fill * 100}%`,
                  overflow: "hidden",
                //   clipPath: `inset(0 ${100 - fill * 100}% 0 0)`,
                }}
              />
            )} */}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStar;
