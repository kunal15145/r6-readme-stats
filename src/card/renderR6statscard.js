const CARD_HTML = require('../constants')

// Thanks to https://jsbin.com/zelogof/7/edit?js,console
function escapeRegExp(input){
  return (input || '').replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}

function reduceTemplate(template, key) {
  return template.replace(
    new RegExp('\{\{\\s*' + escapeRegExp(key) + '\\s*\}\}', 'g'),
    this.data[key]
  );
}

function applyTemplate(template, data) {
  return Object.keys(data).reduce(
    reduceTemplate.bind({ data }),
    template
  );
}

const renderStatsCard = (userInfo = {}, userStats = {}) => {
    const {
      username,
      platform,
      avatar_url_146,
      level
    } = userInfo;
    const {
      genericStats
    } = userStats;

    return applyTemplate(CARD_HTML, {
      width: 100,
      height: 100
    });
  };
  
  module.exports = renderStatsCard;