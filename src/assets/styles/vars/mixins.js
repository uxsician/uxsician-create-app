import colors from './colors';

const mixins = (color = colors.lightGreyAlpha) => ({
    bbox: 'box-sizing: border-box;',
    bshadow: `box-shadow: inset 0 0 30px ${color};`,
    overlay: `box-shadow: inset 0px 0px 3px 1px ${color};`
});

export default mixins;
