// =========================================================
// WEBSITE LOAD CHECK
// =========================================================

console.log(
    "Portfolio website loaded successfully."
);



// =========================================================
// RANDOM PORTFOLIO LOADER ICON
// 50 / 50 CHANCE
// =========================================================

const portfolioLoaderIcon =
    document.querySelector(
        ".loader-icon"
    );


if (portfolioLoaderIcon) {

    const loaderIcons = [
        "twisting-tower-loader.svg",
        "himeji-sketch-loader.svg"
    ];


    const randomLoader =
        loaderIcons[
            Math.floor(
                Math.random() *
                loaderIcons.length
            )
        ];


    const currentSource =
        portfolioLoaderIcon.getAttribute(
            "src"
        );


    const currentFolder =
        currentSource.substring(
            0,
            currentSource.lastIndexOf("/") + 1
        );


    portfolioLoaderIcon.src =
        currentFolder + randomLoader;

}



// =========================================================
// PORTFOLIO LOADING SCREEN
// MINIMUM DISPLAY TIME: 3.5 SECONDS
// =========================================================

const portfolioLoader =
    document.getElementById(
        "portfolio-loader"
    );


const loaderStartTime =
    performance.now();


const minimumLoaderTime =
    3500;


window.addEventListener(
    "load",
    () => {

        if (!portfolioLoader) {
            return;
        }


        const elapsedTime =
            performance.now() -
            loaderStartTime;


        const remainingTime =
            Math.max(
                minimumLoaderTime -
                elapsedTime,
                0
            );


        setTimeout(
            () => {

                portfolioLoader.classList.add(
                    "loader-hidden"
                );


                portfolioLoader.addEventListener(
                    "transitionend",
                    () => {

                        portfolioLoader.remove();

                    },
                    {
                        once: true
                    }
                );

            },
            remainingTime
        );

    }
);



// =========================================================
// GLOBAL NAVIGATION ELEMENTS
// =========================================================

const projectsToggle =
    document.querySelector(
        ".projects-toggle"
    );


const projectsPanel =
    document.querySelector(
        ".projects-panel"
    );


const briefToggle =
    document.querySelector(
        ".brief-toggle"
    );


const briefPanel =
    document.querySelector(
        ".brief-panel"
    );


const briefClose =
    document.querySelector(
        ".brief-close"
    );


const bottomNav =
    document.querySelector(
        ".bottom-nav"
    );



// =========================================================
// PROJECTS PANEL
// =========================================================

if (
    projectsToggle &&
    projectsPanel &&
    bottomNav
) {

    projectsToggle.addEventListener(
        "click",
        () => {

            const projectsAreOpen =
                projectsPanel.classList.contains(
                    "active"
                );


            // ---------------------------------------------
            // CLOSE PROJECT BRIEF
            // ---------------------------------------------

            if (briefPanel) {

                briefPanel.classList.remove(
                    "active"
                );

            }


            bottomNav.classList.remove(
                "brief-open"
            );


            // ---------------------------------------------
            // TOGGLE PROJECTS
            // ---------------------------------------------

            projectsPanel.classList.toggle(
                "active",
                !projectsAreOpen
            );


            bottomNav.classList.toggle(
                "projects-open",
                !projectsAreOpen
            );

        }
    );

}



// =========================================================
// PROJECT BRIEF PANEL
// =========================================================

if (
    briefToggle &&
    briefPanel &&
    bottomNav
) {

    briefToggle.addEventListener(
        "click",
        () => {

            const briefIsOpen =
                briefPanel.classList.contains(
                    "active"
                );


            // ---------------------------------------------
            // CLOSE PROJECTS
            // ---------------------------------------------

            if (projectsPanel) {

                projectsPanel.classList.remove(
                    "active"
                );

            }


            bottomNav.classList.remove(
                "projects-open"
            );


            // ---------------------------------------------
            // TOGGLE PROJECT BRIEF
            // ---------------------------------------------

            briefPanel.classList.toggle(
                "active",
                !briefIsOpen
            );


            bottomNav.classList.toggle(
                "brief-open",
                !briefIsOpen
            );

        }
    );

}



// =========================================================
// CLOSE PROJECT BRIEF
// =========================================================

if (
    briefClose &&
    briefPanel
) {

    briefClose.addEventListener(
        "click",
        () => {

            briefPanel.classList.remove(
                "active"
            );


            if (bottomNav) {

                bottomNav.classList.remove(
                    "brief-open"
                );

            }

        }
    );

}



// =========================================================
// BEFORE / AFTER IMAGE SLIDER
// =========================================================

const comparisonSliders =
    document.querySelectorAll(
        ".before-after"
    );


comparisonSliders.forEach(
    (comparison) => {

        const slider =
            comparison.querySelector(
                ".comparison-slider"
            );


        const afterWrapper =
            comparison.querySelector(
                ".after-wrapper"
            );


        const afterImg =
            comparison.querySelector(
                ".after-img"
            );


        const divider =
            comparison.querySelector(
                ".divider"
            );


        if (
            !slider ||
            !afterWrapper ||
            !afterImg ||
            !divider
        ) {

            return;

        }



        // =================================================
        // LOCK IMAGE SIZE
        // =================================================

        function lockImageSize() {

            const comparisonWidth =
                comparison
                    .getBoundingClientRect()
                    .width;


            afterImg.style.width =
                comparisonWidth + "px";

        }



        // =================================================
        // UPDATE SLIDER POSITION
        // =================================================

        function updateComparisonSlider() {

            const value =
                slider.value + "%";


            afterWrapper.style.width =
                value;


            divider.style.left =
                value;

        }



        // =================================================
        // SLIDER INTERACTION
        // =================================================

        slider.addEventListener(
            "input",
            updateComparisonSlider
        );



        // =================================================
        // WINDOW RESIZE
        // =================================================

        window.addEventListener(
            "resize",
            () => {

                lockImageSize();
                updateComparisonSlider();

            }
        );



        // =================================================
        // INITIALIZE
        // =================================================

        lockImageSize();
        updateComparisonSlider();

    }
);



// =========================================================
// PROJECT IMAGE SLIDERS
// MULTIPLE SLIDERS
// =========================================================

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".slider-button"
            );


        if (!button) {
            return;
        }


        const projectSlider =
            button.closest(
                ".project-slider"
            );


        if (!projectSlider) {
            return;
        }


        const slides =
            projectSlider.querySelectorAll(
                ".slider-image"
            );


        if (slides.length === 0) {
            return;
        }


        let currentSlide =
            Array.from(
                slides
            ).findIndex(
                (slide) =>
                    slide.classList.contains(
                        "active"
                    )
            );


        if (currentSlide === -1) {

            currentSlide = 0;

        }



        // =================================================
        // NEXT IMAGE
        // =================================================

        if (
            button.classList.contains(
                "right"
            ) ||
            button.classList.contains(
                "slider-next"
            )
        ) {

            currentSlide++;


            if (
                currentSlide >=
                slides.length
            ) {

                currentSlide = 0;

            }

        }



        // =================================================
        // PREVIOUS IMAGE
        // =================================================

        if (
            button.classList.contains(
                "left"
            ) ||
            button.classList.contains(
                "slider-prev"
            )
        ) {

            currentSlide--;


            if (currentSlide < 0) {

                currentSlide =
                    slides.length - 1;

            }

        }



        // =================================================
        // UPDATE SLIDES
        // =================================================

        slides.forEach(
            (slide) => {

                slide.classList.remove(
                    "active"
                );

            }
        );


        slides[
            currentSlide
        ].classList.add(
            "active"
        );

    }
);



// =========================================================
// AUTOPLAY PROJECT VIDEOS
// MULTIPLE VIDEOS
// =========================================================

const projectVideos =
    document.querySelectorAll(
        ".project-autoplay-video"
    );


projectVideos.forEach(
    (projectVideo) => {

        const videoObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                projectVideo
                                    .play()
                                    .catch(
                                        (error) => {

                                            console.log(
                                                "Video autoplay blocked:",
                                                error
                                            );

                                        }
                                    );

                            }

                            else {

                                projectVideo.pause();

                                projectVideo.currentTime =
                                    0;

                            }

                        }
                    );

                },

                {
                    threshold: 0.2
                }

            );


        videoObserver.observe(
            projectVideo
        );

    }
);



// =========================================================
// RUSSELL LOFTS INTERACTIVE COVER
// =========================================================

const russellInteractiveCover =
    document.querySelector(
        ".russell-interactive-cover"
    );


if (russellInteractiveCover) {


    // =====================================================
    // ELEMENTS
    // =====================================================

    const russellBubbles =
        russellInteractiveCover.querySelectorAll(
            ".cover-bubble"
        );


    const processOverlay =
        russellInteractiveCover.querySelector(
            ".process-overlay"
        );


    const processOverlayImage =
        russellInteractiveCover.querySelector(
            ".overlay-image"
        );


    const processOverlayClose =
        russellInteractiveCover.querySelector(
            ".overlay-close"
        );



    // =====================================================
    // PRELOAD PROCESS IMAGES
    // =====================================================

    russellBubbles.forEach(
        (bubble) => {

            const preloadImage =
                new Image();


            preloadImage.src =
                bubble.dataset.image;


            if (preloadImage.decode) {

                preloadImage
                    .decode()
                    .catch(
                        () => {}
                    );

            }

        }
    );



    // =====================================================
    // OPEN PROCESS IMAGE
    // =====================================================

    russellBubbles.forEach(
        (bubble) => {

            bubble.addEventListener(
                "click",
                () => {

                    const image =
                        bubble.dataset.image;


                    if (
                        !processOverlay ||
                        !processOverlayImage
                    ) {

                        return;

                    }


                    processOverlayImage.src =
                        image;


                    processOverlay.classList.add(
                        "active"
                    );


                    processOverlay.setAttribute(
                        "aria-hidden",
                        "false"
                    );

                }
            );

        }
    );



    // =====================================================
    // CLOSE PROCESS IMAGE
    // =====================================================

    function closeProcessOverlay() {

        if (!processOverlay) {
            return;
        }


        processOverlay.classList.remove(
            "active"
        );


        processOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }



    // =====================================================
    // CLOSE BUTTON
    // =====================================================

    if (processOverlayClose) {

        processOverlayClose.addEventListener(
            "click",
            closeProcessOverlay
        );

    }



    // =====================================================
    // CLICK DARK BACKGROUND TO CLOSE
    // =====================================================

    if (processOverlay) {

        processOverlay.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    processOverlay
                ) {

                    closeProcessOverlay();

                }

            }
        );

    }



    // =====================================================
    // ESCAPE KEY
    // =====================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                processOverlay &&
                event.key === "Escape" &&
                processOverlay.classList.contains(
                    "active"
                )
            ) {

                closeProcessOverlay();

            }

        }
    );

}



// =========================================================
// CRI INTERACTIVE SITE SECTION
// CENOTE RESEARCH INSTITUTE
// =========================================================

const criOverlay =
    document.getElementById(
        "cri-overlay"
    );


const criOverlayImage =
    document.querySelector(
        ".cri-overlay-image"
    );


const criOverlayClose =
    document.querySelector(
        ".cri-overlay-close"
    );



// =========================================================
// CLOSE CRI OVERLAY
// =========================================================

function closeCriOverlay() {

    if (
        !criOverlay ||
        !criOverlayImage
    ) {

        return;

    }


    criOverlay.classList.remove(
        "active"
    );


    criOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    setTimeout(
        () => {

            criOverlayImage.src =
                "";

        },
        220
    );

}



// =========================================================
// CRI CLICK INTERACTIONS
// =========================================================

document.addEventListener(
    "click",
    (event) => {

        const criBubble =
            event.target.closest(
                ".cri-bubble"
            );



        // =================================================
        // OPEN CRI GRAPHIC
        // =================================================

        if (criBubble) {

            if (
                !criOverlay ||
                !criOverlayImage
            ) {

                return;

            }


            const imageSource =
                criBubble.dataset.criImage;


            if (!imageSource) {
                return;
            }


            criOverlayImage.src =
                imageSource;


            criOverlay.classList.add(
                "active"
            );


            criOverlay.setAttribute(
                "aria-hidden",
                "false"
            );


            return;

        }



        // =================================================
        // CLICK BACKGROUND TO CLOSE
        // =================================================

        if (
            criOverlay &&
            event.target ===
            criOverlay
        ) {

            closeCriOverlay();

        }

    }
);



// =========================================================
// CRI CLOSE BUTTON
// =========================================================

if (criOverlayClose) {

    criOverlayClose.addEventListener(
        "click",
        closeCriOverlay
    );

}



// =========================================================
// CRI ESCAPE KEY
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            criOverlay &&
            event.key === "Escape" &&
            criOverlay.classList.contains(
                "active"
            )
        ) {

            closeCriOverlay();

        }

    }
);



// =========================================================
// GRAPE — INTERACTIVE FOCAL ZOOM
// CENOTE RESEARCH INSTITUTE
// =========================================================

document
    .querySelectorAll(
        ".grape-viewport"
    )
    .forEach(
        (viewport) => {

            const layer =
                viewport.querySelector(
                    ".grape-layer"
                );


            const image =
                viewport.querySelector(
                    ".grape-image"
                );


            const bubbles =
                viewport.querySelectorAll(
                    ".grape-bubble"
                );


            if (
                !layer ||
                !image ||
                bubbles.length === 0
            ) {

                return;

            }



            // =================================================
            // SETTINGS
            // =================================================

            const zoomScale =
                2.6;


            let isZoomed =
                false;



            // =================================================
            // ZOOM INTO SELECTED BUBBLE
            // =================================================

            bubbles.forEach(
                (bubble) => {

                    bubble.addEventListener(
                        "click",
                        (event) => {

                            event.stopPropagation();


                            if (isZoomed) {
                                return;
                            }


                            const xPercent =
                                parseFloat(
                                    bubble.dataset.x
                                ) / 100;


                            const yPercent =
                                parseFloat(
                                    bubble.dataset.y
                                ) / 100;


                            const viewportWidth =
                                viewport.clientWidth;


                            const viewportHeight =
                                viewport.clientHeight;


                            const imageWidth =
                                image.clientWidth;


                            const imageHeight =
                                image.clientHeight;


                            const focalX =
                                imageWidth *
                                xPercent;


                            const focalY =
                                imageHeight *
                                yPercent;


                            const translateX =
                                (
                                    viewportWidth /
                                    2
                                ) -
                                (
                                    focalX *
                                    zoomScale
                                );


                            const translateY =
                                (
                                    viewportHeight /
                                    2
                                ) -
                                (
                                    focalY *
                                    zoomScale
                                );


                            layer.style.transform =
                                `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;


                            viewport.classList.add(
                                "is-zoomed"
                            );


                            isZoomed =
                                true;

                        }
                    );

                }
            );



            // =================================================
            // CLICK ZOOMED IMAGE → RESET
            // =================================================

            viewport.addEventListener(
                "click",
                () => {

                    if (!isZoomed) {
                        return;
                    }


                    layer.style.transform =
                        "translate(0px, 0px) scale(1)";


                    viewport.classList.remove(
                        "is-zoomed"
                    );


                    isZoomed =
                        false;

                }
            );



            // =================================================
            // RESET ON WINDOW RESIZE
            // =================================================

            window.addEventListener(
                "resize",
                () => {

                    if (!isZoomed) {
                        return;
                    }


                    layer.style.transform =
                        "translate(0px, 0px) scale(1)";


                    viewport.classList.remove(
                        "is-zoomed"
                    );


                    isZoomed =
                        false;

                }
            );

        }
    );



// =========================================================
// SUE MANGO GARDEN
// IMAGE LIGHTBOX / LOOPING GALLERY
// =========================================================

const sueMangoPage =
    document.querySelector(
        ".project-sue-page"
    );


if (sueMangoPage) {


    // =====================================================
    // ELEMENTS
    // =====================================================

    const sueLightbox =
        document.querySelector(
            ".sue-lightbox"
        );


    const sueLightboxImage =
        document.querySelector(
            ".sue-lightbox-image"
        );


    const sueLightboxCaption =
        document.querySelector(
            ".sue-lightbox-caption"
        );


    const sueCloseButton =
        document.querySelector(
            ".sue-lightbox-close"
        );


    const suePreviousButton =
        document.querySelector(
            ".sue-lightbox-prev"
        );


    const sueNextButton =
        document.querySelector(
            ".sue-lightbox-next"
        );


    const sueThumbnailContainer =
        document.querySelector(
            ".sue-lightbox-thumbnails"
        );


    const sueSourceImages =
        Array.from(
            document.querySelectorAll(
                ".sue-lightbox-source"
            )
        );



    // =====================================================
    // SAFETY CHECK
    // =====================================================

    if (
        sueLightbox &&
        sueLightboxImage &&
        sueLightboxCaption &&
        suePreviousButton &&
        sueNextButton &&
        sueThumbnailContainer &&
        sueSourceImages.length > 0
    ) {


        // =================================================
        // BUILD IMAGE DATA
        // =================================================

        const sueImages =
            sueSourceImages.map(
                (image) => {

                    return {

                        src:
                            image.currentSrc ||
                            image.src,

                        alt:
                            image.alt ||
                            "Sue Mango Garden",

                        caption:
                            image.dataset.caption ||
                            ""

                    };

                }
            );


        let currentSueImage =
            0;



        // =================================================
        // BUILD MINI PREVIEWS
        // =================================================

        sueImages.forEach(
            (imageData, index) => {

                const thumbnail =
                    document.createElement(
                        "button"
                    );


                thumbnail.type =
                    "button";


                thumbnail.classList.add(
                    "sue-lightbox-thumbnail"
                );


                thumbnail.setAttribute(
                    "aria-label",
                    `Open image ${index + 1}`
                );


                const thumbnailImage =
                    document.createElement(
                        "img"
                    );


                thumbnailImage.src =
                    imageData.src;


                thumbnailImage.alt =
                    "";


                thumbnailImage.loading =
                    "lazy";


                thumbnailImage.decoding =
                    "async";


                thumbnail.appendChild(
                    thumbnailImage
                );



                // -----------------------------------------
                // CLICK MINI PREVIEW
                // -----------------------------------------

                thumbnail.addEventListener(
                    "click",
                    (event) => {

                        event.stopPropagation();


                        showSueImage(
                            index
                        );

                    }
                );


                sueThumbnailContainer.appendChild(
                    thumbnail
                );

            }
        );



        // =================================================
        // SHOW SELECTED IMAGE
        // =================================================

        function showSueImage(index) {

            currentSueImage =
                (
                    index +
                    sueImages.length
                ) %
                sueImages.length;


            const imageData =
                sueImages[
                    currentSueImage
                ];



            // ---------------------------------------------
            // UPDATE IMAGE
            // ---------------------------------------------

            if (
                sueLightboxImage.src !==
                imageData.src
            ) {

                sueLightboxImage.src =
                    imageData.src;

            }


            sueLightboxImage.alt =
                imageData.alt;



            // ---------------------------------------------
            // UPDATE CAPTION
            // ---------------------------------------------

            sueLightboxCaption.textContent =
                imageData.caption;



            // ---------------------------------------------
            // UPDATE ACTIVE MINI PREVIEW
            // ---------------------------------------------

            const thumbnails =
                sueThumbnailContainer
                    .querySelectorAll(
                        ".sue-lightbox-thumbnail"
                    );


            thumbnails.forEach(
                (
                    thumbnail,
                    thumbnailIndex
                ) => {

                    thumbnail.classList.toggle(
                        "active",
                        thumbnailIndex ===
                        currentSueImage
                    );

                }
            );

        }



        // =================================================
        // OPEN LIGHTBOX
        // =================================================

        function openSueLightbox(index) {

            showSueImage(
                index
            );


            sueLightbox.classList.add(
                "active"
            );


            sueLightbox.setAttribute(
                "aria-hidden",
                "false"
            );

        }



        // =================================================
        // CLOSE LIGHTBOX
        // =================================================

        function closeSueLightbox() {

            sueLightbox.classList.remove(
                "active"
            );


            sueLightbox.setAttribute(
                "aria-hidden",
                "true"
            );

        }



        // =================================================
        // NEXT IMAGE
        // =================================================

        function nextSueImage() {

            showSueImage(
                currentSueImage + 1
            );

        }



        // =================================================
        // PREVIOUS IMAGE
        // =================================================

        function previousSueImage() {

            showSueImage(
                currentSueImage - 1
            );

        }



        // =================================================
        // CLICK SOURCE IMAGE
        // =================================================

        sueSourceImages.forEach(
            (image, index) => {

                image.addEventListener(
                    "click",
                    () => {

                        openSueLightbox(
                            index
                        );

                    }
                );

            }
        );



        // =================================================
        // CLOSE BUTTON
        // =================================================

        if (sueCloseButton) {

            sueCloseButton.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();


                    closeSueLightbox();

                }
            );

        }



        // =================================================
        // PREVIOUS BUTTON
        // =================================================

        suePreviousButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                previousSueImage();

            }
        );



        // =================================================
        // NEXT BUTTON
        // =================================================

        sueNextButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                nextSueImage();

            }
        );



        // =================================================
        // CLICK MAIN IMAGE
        // DO NOT CLOSE
        // =================================================

        sueLightboxImage.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

            }
        );



        // =================================================
        // CLICK DARK BACKGROUND
        // CLOSE LIGHTBOX
        // =================================================

        sueLightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    sueLightbox
                ) {

                    closeSueLightbox();

                }

            }
        );



        // =================================================
        // KEYBOARD CONTROLS
        // =================================================

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    !sueLightbox
                        .classList
                        .contains(
                            "active"
                        )
                ) {

                    return;

                }



                // -----------------------------------------
                // NEXT
                // -----------------------------------------

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    nextSueImage();

                }



                // -----------------------------------------
                // PREVIOUS
                // -----------------------------------------

                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previousSueImage();

                }



                // -----------------------------------------
                // CLOSE
                // -----------------------------------------

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeSueLightbox();

                }

            }
        );

    }

}

// =========================================================
// CONTACT LIGHTBOX
// GLOBAL CONTACT SYSTEM
// =========================================================

const contactTriggers =
    document.querySelectorAll(
        ".contact-trigger"
    );

const contactOverlay =
    document.querySelector(
        ".contact-overlay"
    );

const contactClose =
    document.querySelector(
        ".contact-close"
    );


// ---------------------------------------------------------
// OPEN CONTACT
// ---------------------------------------------------------

if (
    contactTriggers.length > 0 &&
    contactOverlay
) {

    contactTriggers.forEach(
        (trigger) => {

            trigger.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    contactOverlay.classList.add(
                        "active"
                    );

                    document.body.classList.add(
                        "contact-open"
                    );

                }
            );

        }
    );

}


// ---------------------------------------------------------
// CLOSE CONTACT WITH X
// ---------------------------------------------------------

if (
    contactClose &&
    contactOverlay
) {

    contactClose.addEventListener(
        "click",
        (event) => {

            event.preventDefault();
            event.stopPropagation();

            contactOverlay.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "contact-open"
            );

        }
    );

}


// ---------------------------------------------------------
// CLOSE CONTACT BY CLICKING BACKGROUND
// ---------------------------------------------------------

if (contactOverlay) {

    contactOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                contactOverlay
            ) {

                contactOverlay.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "contact-open"
                );

            }

        }
    );

}


// ---------------------------------------------------------
// CLOSE CONTACT WITH ESCAPE KEY
// ---------------------------------------------------------

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            contactOverlay &&
            contactOverlay.classList.contains(
                "active"
            )
        ) {

            contactOverlay.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "contact-open"
            );

        }

    }
);

// =========================================================
// BANANA INTERACTION
// HOVER TEXT BUBBLES
// =========================================================

const bananaPoints =
    document.querySelectorAll(
        ".banana-point"
    );


bananaPoints.forEach(
    (bananaPoint) => {


        // -----------------------------------------
        // MOUSE ENTER
        // -----------------------------------------

        bananaPoint.addEventListener(
            "mouseenter",
            () => {

                bananaPoint.classList.add(
                    "active"
                );

            }
        );


        // -----------------------------------------
        // MOUSE LEAVE
        // -----------------------------------------

        bananaPoint.addEventListener(
            "mouseleave",
            () => {

                bananaPoint.classList.remove(
                    "active"
                );

            }
        );


    }
);

/* =========================================================
   RUSSELL SLIDER LABEL VISIBILITY
========================================================= */

document
    .querySelectorAll(".russell-slider-labeled")
    .forEach((slider) => {

        const input =
            slider.querySelector(".comparison-slider");

        const leftLabel =
            slider.querySelector(".comparison-label-left");

        const rightLabel =
            slider.querySelector(".comparison-label-right");


        if (
            !input ||
            !leftLabel ||
            !rightLabel
        ) {
            return;
        }


        function updateLabelVisibility() {

            const value =
                Number(input.value);


            /* LEFT SIDE TOO SMALL */

            if (value < 25) {

                leftLabel.classList.add("is-hidden");

            } else {

                leftLabel.classList.remove("is-hidden");

            }


            /* RIGHT SIDE TOO SMALL */

            if (value > 75) {

                rightLabel.classList.add("is-hidden");

            } else {

                rightLabel.classList.remove("is-hidden");

            }

        }


        input.addEventListener(
            "input",
            updateLabelVisibility
        );


        updateLabelVisibility();

    });

    /* =========================================================
   PERSONAL WORK — COURSE OVERVIEW VIDEO
========================================================= */

const courseOverviewToggle =
    document.querySelector(".course-overview-toggle");

const courseVideoPanel =
    document.querySelector(".course-video-panel");

const courseVideoClose =
    document.querySelector(".course-video-close");

const courseVideoIframe =
    document.querySelector(".course-video-frame iframe");


/* =========================
   OPEN
========================= */

if (
    courseOverviewToggle &&
    courseVideoPanel
) {

    courseOverviewToggle.addEventListener(
        "click",
        function () {

            courseVideoPanel.classList.add("active");

            courseVideoPanel.setAttribute(
                "aria-hidden",
                "false"
            );

        }
    );

}


/* =========================
   CLOSE
========================= */

function closeCourseVideo() {

    if (!courseVideoPanel) return;


    courseVideoPanel.classList.remove("active");

    courseVideoPanel.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Reload iframe when closed.

        This stops the YouTube video
        instead of allowing it to continue
        playing invisibly.
    */

    if (courseVideoIframe) {

        const videoSource =
            courseVideoIframe.src;

        courseVideoIframe.src = "";

        courseVideoIframe.src =
            videoSource;

    }

}


if (courseVideoClose) {

    courseVideoClose.addEventListener(
        "click",
        closeCourseVideo
    );

}


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            courseVideoPanel &&
            courseVideoPanel.classList.contains("active")
        ) {

            closeCourseVideo();

        }

    }
);

/* =========================================================
   PERSONAL WORK — AXONOMETRIC VIDEO HOTSPOTS
========================================================= */

const axonVideoHotspots =
    document.querySelectorAll(".axon-video-hotspot");

const axonVideoPanel =
    document.querySelector(".axon-video-panel");

const axonVideoFrame =
    document.querySelector(".axon-video-frame iframe");

const axonVideoClose =
    document.querySelector(".axon-video-close");


/* =========================================================
   GET YOUTUBE VIDEO ID
========================================================= */

function getYouTubeVideoID(url) {

    if (!url) return null;


    /*
        youtu.be/VIDEO_ID
    */

    if (url.includes("youtu.be/")) {

        return url
            .split("youtu.be/")[1]
            .split("?")[0];

    }


    /*
        youtube.com/watch?v=VIDEO_ID
    */

    if (url.includes("watch?v=")) {

        return url
            .split("watch?v=")[1]
            .split("&")[0];

    }


    /*
        youtube.com/embed/VIDEO_ID
    */

    if (url.includes("/embed/")) {

        return url
            .split("/embed/")[1]
            .split("?")[0];

    }


    return null;
}


/* =========================================================
   OPEN VIDEO
========================================================= */

axonVideoHotspots.forEach(
    function (hotspot) {

        hotspot.addEventListener(
            "click",
            function () {

                const videoURL =
                    hotspot.dataset.video;

                const videoID =
                    getYouTubeVideoID(videoURL);


                if (
                    !videoID ||
                    !axonVideoPanel ||
                    !axonVideoFrame
                ) {
                    return;
                }


                axonVideoFrame.src =
                    "https://www.youtube-nocookie.com/embed/" +
                    videoID +
                    "?autoplay=1";


                axonVideoPanel.classList.add(
                    "active"
                );


                axonVideoPanel.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }
        );

    }
);


/* =========================================================
   CLOSE VIDEO
========================================================= */

function closeAxonVideo() {

    if (!axonVideoPanel) return;


    axonVideoPanel.classList.remove(
        "active"
    );


    axonVideoPanel.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Removing the source immediately stops playback.
    */

    if (axonVideoFrame) {

        axonVideoFrame.src = "";

    }

}


if (axonVideoClose) {

    axonVideoClose.addEventListener(
        "click",
        closeAxonVideo
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            axonVideoPanel &&
            axonVideoPanel.classList.contains("active")
        ) {

            closeAxonVideo();

        }

    }
);

/* =========================================================
   STADIA — CONCEPT IMAGE SLIDERS
   SUPPORTS MULTIPLE INDEPENDENT SLIDERS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const stadiaConceptSliders =
        document.querySelectorAll(".stadia-concept-slider");

    stadiaConceptSliders.forEach((slider) => {
        const slides =
            slider.querySelectorAll(".stadia-concept-slide");

        const previousButton =
            slider.querySelector(".stadia-concept-prev");

        const nextButton =
            slider.querySelector(".stadia-concept-next");

        const currentCounter =
            slider.querySelector(".stadia-concept-current");

        const totalCounter =
            slider.querySelector(".stadia-concept-total");

        let currentIndex = 0;

        function updateSlider() {
            slides.forEach((slide, index) => {
                const isActive = index === currentIndex;

                slide.classList.toggle("active", isActive);
                slide.hidden = !isActive;
                slide.style.display = isActive ? "block" : "none";
            });

            if (currentCounter) {
                currentCounter.textContent =
                    String(currentIndex + 1).padStart(2, "0");
            }

            if (totalCounter) {
                totalCounter.textContent =
                    ` / ${String(slides.length).padStart(2, "0")}`;
            }
        }

        if (previousButton) {
            previousButton.addEventListener("click", () => {
                currentIndex =
                    (currentIndex - 1 + slides.length) %
                    slides.length;

                updateSlider();
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentIndex =
                    (currentIndex + 1) %
                    slides.length;

                updateSlider();
            });
        }

        updateSlider();
    });
});

/* =========================================================
   STADIA
   INTERACTIVE DATA BUBBLES
========================================================= */

const stadiaOverlay =
    document.getElementById("stadia-data-overlay");

const stadiaOverlayImage =
    stadiaOverlay?.querySelector(
        ".stadia-data-overlay-image"
    );

const stadiaOverlayClose =
    stadiaOverlay?.querySelector(
        ".stadia-data-overlay-close"
    );


/* =========================================================
   INITIALIZE
========================================================= */

if (
    stadiaOverlay &&
    stadiaOverlayImage &&
    stadiaOverlayClose
) {

    document
        .querySelectorAll(".stadia-data-bubble")
        .forEach((bubble) => {

            bubble.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    const imageSource =
                        bubble.getAttribute(
                            "data-stadia-image"
                        );

                    stadiaOverlayImage.src =
                        imageSource;

                    stadiaOverlay.classList.add(
                        "is-open"
                    );

                    stadiaOverlay.setAttribute(
                        "aria-hidden",
                        "false"
                    );

                }
            );

        });


    /* =====================================================
       CLOSE
    ===================================================== */

    function closeStadiaOverlay() {

        stadiaOverlay.classList.remove(
            "is-open"
        );

        stadiaOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    stadiaOverlayClose.addEventListener(
        "click",
        closeStadiaOverlay
    );


    /* =====================================================
       CLICK BACKGROUND
    ===================================================== */

    stadiaOverlay.addEventListener(
        "click",
        (event) => {

            if (event.target === stadiaOverlay) {
                closeStadiaOverlay();
            }

        }
    );


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                stadiaOverlay.classList.contains(
                    "is-open"
                )
            ) {
                closeStadiaOverlay();
            }

        }
    );

}