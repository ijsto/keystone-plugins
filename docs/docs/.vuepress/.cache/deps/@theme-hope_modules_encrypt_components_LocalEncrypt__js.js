import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-WYDFLC6Z.js";
import "./chunk-BYQIQ7ZI.js";
import "./chunk-UMIBI3BT.js";
import "./chunk-FECFGNAG.js";
import "./chunk-RQ7A2YV3.js";
import "./chunk-P4PLXKWE.js";
import "./chunk-2TVHH35V.js";
import {
  defineComponent,
  h
} from "./chunk-XQCAFQ4P.js";
import "./chunk-P5YHOUTL.js";
import "./chunk-LUYR6PBK.js";
import "./chunk-5E3NKPRU.js";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
