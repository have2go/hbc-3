import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import Image from "next/image";
import exampleDoc from "/public/example-doc.jpg";

export default function ReviewsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [modalImageSrc, setModalImageSrc] = useState("");
    const onImageClick = e => {
        console.log(e.target.srcset);
        setModalImageSrc("/example-doc.jpg");
        onOpen();
    };

    return (
        <>
            <div className="navigation-wrapper LG:text-xs">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide px-16 MD:px-10 SM:px-4">
                        <div className="bg-white h-full mx-auto flex items-center gap-20 MD:flex-col MD:gap-5 SM:gap-2">
                            <p className="">
                                ООО “Кофе из Колумбии”
                                {<br />}
                                {<br />}
                                Сотрудничество с Highbrow Customs стало для нас настоящим прорывом в области
                                международной логистики. Благодаря их профессионализму и вниманию к деталям, мы смогли
                                значительно ускорить процесс таможенного оформления и оптимизировать наши затраты на
                                доставку. Команда Highbrow Customs всегда на связи и готова помочь в любой момент, что
                                делает их незаменимыми партнерами для нашего бизнеса. Рекомендую их услуги всем, кто
                                ищет надежного помощника в сложном мире международных перевозок!
                            </p>
                            <Image
                                src={exampleDoc}
                                alt='Отзыв компании " "'
                                className="h-64 cursor-pointer MD:h-56 object-contain"
                                onClick={onImageClick}
                            />
                        </div>
                    </div>
                    <div className="keen-slider__slide px-16 MD:px-10 SM:px-4">
                        <div className="bg-white h-full mx-auto flex items-center gap-20 MD:flex-col MD:gap-5 SM:gap-2">
                            <p className="">
                                ООО “Кофе из Колумбии”
                                {<br />}
                                {<br />}
                                Сотрудничество с Highbrow Customs стало для нас настоящим прорывом в области
                                международной логистики. Благодаря их профессионализму и вниманию к деталям, мы смогли
                                значительно ускорить процесс таможенного оформления и оптимизировать наши затраты на
                                доставку. Команда Highbrow Customs всегда на связи и готова помочь в любой момент, что
                                делает их незаменимыми партнерами для нашего бизнеса. Рекомендую их услуги всем, кто
                                ищет надежного помощника в сложном мире международных перевозок!
                            </p>
                            <Image
                                src={exampleDoc}
                                alt='Отзыв компании " "'
                                className="h-64 cursor-pointer MD:h-56 object-contain"
                                onClick={onImageClick}
                            />
                        </div>
                    </div>
                    <div className="keen-slider__slide px-16 MD:px-10 SM:px-4">
                        <div className="bg-white h-full mx-auto flex items-center gap-20 MD:flex-col MD:gap-5 SM:gap-2">
                            <p className="">
                                ООО “Кофе из Колумбии”
                                {<br />}
                                {<br />}
                                Сотрудничество с Highbrow Customs стало для нас настоящим прорывом в области
                                международной логистики. Благодаря их профессионализму и вниманию к деталям, мы смогли
                                значительно ускорить процесс таможенного оформления и оптимизировать наши затраты на
                                доставку. Команда Highbrow Customs всегда на связи и готова помочь в любой момент, что
                                делает их незаменимыми партнерами для нашего бизнеса. Рекомендую их услуги всем, кто
                                ищет надежного помощника в сложном мире международных перевозок!
                            </p>
                            <Image
                                src={exampleDoc}
                                alt='Отзыв компании " "'
                                className="h-64 cursor-pointer MD:h-56 object-contain"
                                onClick={onImageClick}
                            />
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={e => e.stopPropagation() || instanceRef.current?.next()}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        );
                    })}
                </div>
            )}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={modalImageSrc} alt="Отзыв" className="max-h-[80vh] object-contain" />
                            </ModalBody>
                            <ModalFooter>
                                {/* <Button color="danger" variant="light" onPress={onClose}>
                                    Закрыть
                                </Button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
            {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
        </svg>
    );
}
