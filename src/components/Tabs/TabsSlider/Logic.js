import {
  compose,
  withStateHandlers,
  withHandlers,
  lifecycle
} from 'recompose';

import animate from 'app/helpers/utils/animate';

export default compose(
  withStateHandlers(
    {
      start: false,
      end: true,
      showButtons: false
    },

    {
      changeScrollPosition: () => (start, end) => ({
        start,
        end
      }),

      changeShowButtons: () => isShow => ({ showButtons: isShow })
    }
  ),

  withHandlers(() => {
    let _ref;

    return {
      registerSlider: () => ref => {
        _ref = ref;
      },

      handlePrev: () => () => {
        animate('scrollLeft', _ref, _ref.scrollLeft - _ref.clientWidth);
      },

      handleNext: () => () => {
        animate('scrollLeft', _ref, _ref.scrollLeft + _ref.clientWidth);
      },

      handleScroll: ({ changeScrollPosition }) => () => {
        const
          {
            scrollWidth,
            clientWidth,
            scrollLeft
          } = _ref,

          left = 0,
          right = scrollWidth - clientWidth;

        if (scrollLeft === left) {
          changeScrollPosition(false, true);
        }

        if (scrollLeft === right) {
          changeScrollPosition(true, false);
        }

        if (
          scrollLeft > left
          && scrollLeft < right
        ) {
          changeScrollPosition(true, true);
        }
      },

      handleResize: ({
        changeShowButtons,
        end
      }) => () => {
        const {
          scrollWidth,
          clientWidth,
          scrollLeft
        } = _ref;

        if (!end) {
          animate('scrollLeft', _ref, scrollLeft + clientWidth);
        }

        scrollWidth > clientWidth
          ? changeShowButtons(true)
          : changeShowButtons(false);
      }
    };
  }),

  lifecycle({
    componentDidMount() {
      const {
        withSlider,
        handleResize
      } = this.props;

      if (withSlider) {
        handleResize();

        window.addEventListener('resize', handleResize);
      }
    },

    componentWillUnmount() {
      const {
        withSlider,
        handleResize
      } = this.props;

      if (withSlider) {
        window.removeEventListener('resize', handleResize);
      }
    }
  })
);