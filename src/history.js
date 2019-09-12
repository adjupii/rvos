import { createBrowserHistory as createHistory } from 'history';

const history = createHistory({
  // eslint-disable-next-line no-undef
  basename: process.env.PUBLIC_PATH
});

const goToPage = page => () => history.push(page);

export default history;

export {
  goToPage
};