import styled from 'styled-components';
import Slider from 'react-slick';

import ButtonPrev from 'app/images/slider/buttons/prev.svg';
import ButtonNext from 'app/images/slider/buttons/next.svg';

export default styled(Slider)`
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  &.slider {
    &--one-line-arrows {
      display: flex;
      align-items: center;
    }

    &--terms {
      margin-bottom: 17px;

      .slide {
        font: 16px/20px "Muli", sans-serif;
        text-align: center;
      }
    }

    &--policy-terms {
      .slick-list {
        width: 190px;
      }
    }

    &--billing-terms {
      .slick-list {
        width: 60px;
      }
    }

    &--new-claim-policy {
      max-width: 466px;

      .slide {
        padding: 0 3px;
      }
    }
  }

  .slide {
    outline: none;
  }

  .slick-track,
  .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
      display: table;
      content: '';
    }

    &:after {
      clear: both;
    }
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  &.slick-initialized {
    .slick-slide {
      display: block;
    }
  }

  .slick-arrow {
    &.slick-hidden {
      display: none;
    }
  }

  /* Buttons */
  .slick-arrow {
    border: none;
    padding: 0;
    font-size: 0;
    line-height: 0;
    outline: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    &.slick-prev {
      background: url(${ButtonPrev});
    }

    &.slick-next {
      background: url(${ButtonNext});
    }

    &.slick-disabled {
      visibility: hidden;
    }
  }
`;