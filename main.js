import { viz as originalViz } from './viz';

let state = {};
let viz = originalViz;

const render = () => {
  viz(document.body, { state, setState });
};

const setState = (next) => {
  state = next(state);
  render();
};

render();

if (import.meta.hot) {
  import.meta.hot.accept('./viz', (module) => {
    viz = module.viz;
    render();
  });
}
