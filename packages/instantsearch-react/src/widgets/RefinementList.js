import connectRefinementList from '../connectors/connectRefinementList';
import RefinementList from '../impl/RefinementList';

export default connectRefinementList({
  defaultProps: {
    showMore: false,
    limitMin: 10,
    limitMax: 20,
  },
  mapPropsToConfig: props => ({
    attributeName: props.attributeName,
    operator: props.operator,
    // Always load `limitMax` facet values. This prevents UI incoherences where
    // loading more facet values changes the display of seemingly unrelated
    // components.
    limit: props.showMore ? props.limitMax : props.limitMin,
    sortBy: props.sortBy,
  }),
})(RefinementList);
