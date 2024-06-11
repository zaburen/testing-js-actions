const githubInfo = require('./github-info');
const CustomAsana = require('./asana');
const CustomGithub = require('./github');
const UtilUrl = require('./util-url');

function run() {
  // githubInfo.getGithubInfo();

  const eventBody = CustomGithub.getGithubEventsBody();
  const eventUrl = CustomGithub.getEventUrl();
  const hrefText = CustomGithub.getEventHrefText();
  const linkList = UtilUrl.getAnyAsanaUrls(eventBody);
  linkList.forEach((obj) => {
      CustomAsana.getTaskNotesAndUpdateThemIfNeeded(obj.gid, eventUrl, hrefText);
  })
}

run();