import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CardEn from "./CardEn";
import { cardsEn } from "@/constants/cardsEn";
import { useDisclosure } from "@nextui-org/react";
import ModalWithFormEn from "./common/ModalWithFormEn";

export default function EmblaCarousel(props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <>
            <section className="embla xl:hidden">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {cardsEn.map((card, i) => {
                            return (
                                <div className="embla__slide SM:px-0 SM:w-[95vw]" key={i}>
                                    <CardEn card={card} onOpen={onOpen} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <ModalWithFormEn isOpen={isOpen} onOpenChange={onOpenChange} title={"Submit a request for the service"} />
        </>
    );
}
