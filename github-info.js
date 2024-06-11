const core = require('@actions/core');
const github = require('@actions/github');


function getGithubInfo() {

    const context = JSON.stringify(github.context, undefined, 2);
    console.log(`Github Context:\n${context}`);
}



module.exports = { getGithubInfo };