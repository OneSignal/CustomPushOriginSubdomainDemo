window.OneSignal = window.OneSignal || [];
var initOptions = {
  appId: "97dce7c1-ab1c-4609-9436-d45ee3aa7143",
  autoRegister: true,
  notifyButton: {
    enable: true
  }
};

/*
  Special Case: Worker files in a subdirectory
  
  We're hosting on GitHub pages so the worker files can't be uploaded to the root.

  NOTE: This is NOT necessary if you can follow our web push setup guide and upload files to the root.
 */
function changeServiceWorkerFilePath() {
  OneSignal.SERVICE_WORKER_PATH = 'CustomPushOriginSubdomainDemo/OneSignalSDKWorker.js';
  OneSignal.SERVICE_UPDATER_WORKER_PATH = 'CustomPushOriginSubdomainDemo/OneSignalSDKUpdaterWorker.js';
  OneSignal.SERVICE_WORKER_PARAM = {scope: '/CustomPushOriginSubdomainDemo/' };
};

OneSignal.push(function() {
  changeServiceWorkerFilePath();
  OneSignal.init(initOptions);
});
