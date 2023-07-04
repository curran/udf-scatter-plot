import { csv } from 'd3';
export const loadAndParseCSV = ({
  csvURL,
  parseRow,
  state: { data },
  setState,
}) => {
  if (data === undefined) {
    setState((state) => ({ ...state, data: 'LOADING' }));
    csv(csvURL, parseRow).then((data) => {
      setState((state) => ({ ...state, data }));
    });
  }
  return data && data !== 'LOADING' ? data : null;
};
