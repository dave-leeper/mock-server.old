const I18n = require('../util/i18n');
const Log = require('../util/log');
const Registry = require('../util/registry');
const Strings = require('../util/strings');

class PasswordResetForm {
  static get userPath() { return './private/users/'; }

  do(params) {
    return new Promise((inResolve, inReject) => {
      if (!params.params.token) {
        const message = I18n.get(Strings.ERROR_MESSAGE_INVALID_RESET_TOKEN);
        if (Log.will(Log.ERROR)) Log.error(message);
        inReject && inReject({ status: 400, send: message });
        return;
      }
      let user;
      const now = Date.now();
      const accounts = Registry.get('Accounts');
      for (let i = accounts.length - 1; i >= 0; i--) {
        if (accounts[i].resetPasswordToken && accounts[i].resetPasswordExpires && params.params.token === accounts[i].resetPasswordToken && now < accounts[i].resetPasswordExpires) {
          user = accounts[i];
          break;
        }
      }
      if (!user) {
        const message = I18n.get(Strings.ERROR_MESSAGE_INVALID_RESET_TOKEN);
        if (Log.will(Log.ERROR)) Log.error(message);
        inReject && inReject({ status: 400, send: message });
        return;
      }

      inResolve && inResolve({
        status: 200,
        viewName: 'password-reset-form',
        viewObject: {
          title: 'Reset Password',
          verb: 'POST',
          action: '/user/password/reset/update',
          token: params.params.token,
        },
      });
    });
  }
}
module.exports = PasswordResetForm;