/**
 * The Lightest & Fuckingest Template Engine Ever
 * @param  {String} tpl
 * @param  {Object} data
 * @return {String}
 */
function render(tpl, data) {
    try {
        return new Function('return ' + tpl).call(data);
    } catch (e) {}
    return '123';
}
