// import { OAUTH } from "config"; // todo: how to auto-translate this path during runtime?

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "441520115283-sauarhnqdkqlq2oh28ae4lkmlj5skel3.apps.googleusercontent.com",
    callback: console.log,
  });
  google.accounts.id.prompt();
};
