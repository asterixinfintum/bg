"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
if (confirmations > 10 && !confirmedTransactions.includes(txid)) {
  var _vout$ = vout[0],
    scriptPubKey = _vout$.scriptPubKey,
    value = _vout$.value;
  if (scriptPubKey.address === address) {
    var deposit = {
      ownerId: ownerId,
      assetId: assetIdInTraderDB,
      balanceAmount: value,
      swapOrConvertFrom: "none",
      swapOrConvertTo: "none",
      assetInteractedWith: "none",
      assetType: "crypto",
      transactionType: {
        type: "deposit",
        toWallet: walletType,
        fromAsset: "",
        toAsset: ""
      },
      transactionDescription: "deposited ".concat(value, " ").concat(assetIdInTraderDB, " in ").concat(walletType, " wallet"),
      currentWallet: "".concat(assetIdInTraderDB),
      cryptoAddressInteractedWith: "".concat(address),
      cryptoAddressNetwork: "Bitcoin"
    };
    fetch("".concat(process.env.TRADERAPIURL, "/deposit"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deposit)
    }).then(function (depresponse) {
      return depresponse.json();
    }).then(function (depdata) {
      console.log(depdata);
      var confirmedTrxs = [txid];
      Wallet.updateOne({
        ownerId: ownerId
      }, {
        confirmedTransactions: [].concat(_toConsumableArray(new Set(confirmedTrxs)), _toConsumableArray(confirmedTransactions)),
        txs: txs
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }
}
Wallet.findOne({
  ownerId: 'yourOwnerId',
  walletType: 'yourWalletType'
}, function (err, wallet) {
  if (err) {
    console.error('Error retrieving the wallet:', err);
    return;
  }
  if (!wallet) {
    console.log('Wallet not found!');
    return;
  }

  // Update the wallet properties
  wallet.balance = newBalance; // replace 'newBalance' with the desired value

  // Save the updated wallet
  wallet.save(function (err) {
    if (err) {
      console.error('Error updating the wallet:', err);
      return;
    }
    console.log('Wallet updated successfully!');
  });
});