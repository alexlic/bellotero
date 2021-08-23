import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles';

const CustomSlider = withStyles({
  root: {
    color: '#071eb3',
    height: 4,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '5px solid currentColor',
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
  },
  rail: {
    height: 4,
    backgroundColor: 'rgba(199, 210, 254, var(--tw-bg-opacity))'
  },
})(Slider);

const RangeSlider = ({ minValue, maxValue, onChange, value }) => (
  <CustomSlider
    min={minValue}
    max={maxValue}
    onChange={onChange}
    value={value}
  />
)

export default RangeSlider
