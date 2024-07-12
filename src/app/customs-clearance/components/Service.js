import { useState } from "react";

export default function Service() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <button
      className="grid grid-cols-[24px_1fr] gap-11 border-2 border-customPurple rounded-[20px] items-center"
      disabled={isDisabled}
      onClick={() => setIsDisabled(!isDisabled)}
    >
      <div className="h-[calc(100%-25px)] w-6 bg-customPurple/50 rounded-r-[20px]"></div>
      <div className="">
        <div className="h-28 flex items-center">
          <p className="font-bold text-2xl">Импорт 40</p>
        </div>
        <div className="hidden">
          <p className="text-left">
            Таможенная процедура выпуска для внутреннего потребления –
            таможенная процедура, применяемая в отношении иностранных товаров, в
            соответствии с которой товары находятся и используются на таможенной
            территории Союза без ограничений по владению, пользованию и (или)
            распоряжению ими, предусмотренных международными договорами и актами
            в сфере таможенного регулирования в отношении иностранных товаров.
            Товары, помещенные под таможенную процедуру выпуска для внутреннего
            потребления, приобретают статус товаров Союза.
          </p>
          <div className="h-28 flex items-center">
            <p className="font-bold text-2xl">
              Стоимость декларирования товара: от 5000 руб.
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
