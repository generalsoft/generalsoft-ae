const Nl=()=>{};var xi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ol=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,v=o>>2,w=(o&3)<<4|h>>4;let P=(h&15)<<2|d>>6,C=d&63;f||(C=64,l||(P=64)),r.push(e[v],e[w],e[P],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ol(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||d==null||w==null)throw new kl;const P=o<<2|h>>4;if(r.push(P),d!==64){const C=h<<4&240|d>>2;if(r.push(C),w!==64){const N=d<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xl=function(n){const t=xo(n);return Mo.encodeByteArray(t,!0)},Un=function(n){return xl(n).replace(/\./g,"")},Ml=function(n){try{return Mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=()=>Ll().__FIREBASE_DEFAULTS__,Ul=()=>{if(typeof process>"u"||typeof xi>"u")return;const n=xi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ml(n[1]);return t&&JSON.parse(t)},as=()=>{try{return Nl()||Fl()||Ul()||Bl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jl=n=>{var t,e;return(e=(t=as())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},$l=n=>{const t=jl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Lo=()=>{var n;return(n=as())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Un(JSON.stringify(e)),Un(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gl(){var t;const n=(t=as())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kl(){return!Gl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wl(){try{return typeof indexedDB=="object"}catch{return!1}}function Ql(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Xl,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Jl(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new we(i,h,r)}}function Jl(n,t){return n.replace(Yl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Yl=/\{\$([^}]+)}/g;function Bn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Mi(o)&&Mi(l)){if(!Bn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Mi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zl(n){return(await fetch(n,{credentials:"include"})).ok}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ql;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nc(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ec(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ec(n){return n===ee?void 0:n}function nc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new tc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const sc={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},ic=U.INFO,oc={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},ac=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=oc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bo{constructor(t){this.name=t,this._logLevel=ic,this._logHandler=ac,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const lc=(n,t)=>t.some(e=>n instanceof e);let Li,Fi;function cc(){return Li||(Li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uc(){return Fi||(Fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jo=new WeakMap,$r=new WeakMap,$o=new WeakMap,Nr=new WeakMap,ls=new WeakMap;function hc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(jt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&jo.set(e,n)}).catch(()=>{}),ls.set(t,n),t}function fc(n){if($r.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});$r.set(n,t)}let qr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return $r.get(n);if(t==="objectStoreNames")return n.objectStoreNames||$o.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function dc(n){qr=n(qr)}function mc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Or(this),t,...e);return $o.set(r,t.sort?t.sort():[t]),jt(r)}:uc().includes(n)?function(...t){return n.apply(Or(this),t),jt(jo.get(this))}:function(...t){return jt(n.apply(Or(this),t))}}function pc(n){return typeof n=="function"?mc(n):(n instanceof IDBTransaction&&fc(n),lc(n,cc())?new Proxy(n,qr):n)}function jt(n){if(n instanceof IDBRequest)return hc(n);if(Nr.has(n))return Nr.get(n);const t=pc(n);return t!==n&&(Nr.set(n,t),ls.set(t,n)),t}const Or=n=>ls.get(n);function gc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=jt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(jt(l.result),f.oldVersion,f.newVersion,jt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),h}const _c=["get","getKey","getAll","getAllKeys","count"],yc=["put","add","delete","clear"],kr=new Map;function Ui(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=yc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_c.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(h.shift())),(await Promise.all([d[e](...h),i&&f.done]))[0]};return kr.set(t,o),o}dc(n=>({...n,get:(t,e,r)=>Ui(t,e)||n.get(t,e,r),has:(t,e)=>!!Ui(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Tc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Tc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zr="@firebase/app",Bi="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Bo("@firebase/app"),vc="@firebase/app-compat",Ic="@firebase/analytics-compat",Ac="@firebase/analytics",wc="@firebase/app-check-compat",Rc="@firebase/app-check",Sc="@firebase/auth",Pc="@firebase/auth-compat",bc="@firebase/database",Cc="@firebase/data-connect",Vc="@firebase/database-compat",Dc="@firebase/functions",Nc="@firebase/functions-compat",Oc="@firebase/installations",kc="@firebase/installations-compat",xc="@firebase/messaging",Mc="@firebase/messaging-compat",Lc="@firebase/performance",Fc="@firebase/performance-compat",Uc="@firebase/remote-config",Bc="@firebase/remote-config-compat",jc="@firebase/storage",$c="@firebase/storage-compat",qc="@firebase/firestore",zc="@firebase/ai",Hc="@firebase/firestore-compat",Gc="firebase",Kc="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",Wc={[zr]:"fire-core",[vc]:"fire-core-compat",[Ac]:"fire-analytics",[Ic]:"fire-analytics-compat",[Rc]:"fire-app-check",[wc]:"fire-app-check-compat",[Sc]:"fire-auth",[Pc]:"fire-auth-compat",[bc]:"fire-rtdb",[Cc]:"fire-data-connect",[Vc]:"fire-rtdb-compat",[Dc]:"fire-fn",[Nc]:"fire-fn-compat",[Oc]:"fire-iid",[kc]:"fire-iid-compat",[xc]:"fire-fcm",[Mc]:"fire-fcm-compat",[Lc]:"fire-perf",[Fc]:"fire-perf-compat",[Uc]:"fire-rc",[Bc]:"fire-rc-compat",[jc]:"fire-gcs",[$c]:"fire-gcs-compat",[qc]:"fire-fst",[Hc]:"fire-fst-compat",[zc]:"fire-vertex","fire-js":"fire-js",[Gc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map,Qc=new Map,Gr=new Map;function ji(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(Gr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Gr.set(t,n);for(const e of jn.values())ji(e,n);for(const e of Qc.values())ji(e,n);return!0}function Xc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Jc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Fo("app","Firebase",Yc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=Kc;function qo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Hr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=Lo()),!e)throw $t.create("no-options");const o=jn.get(i);if(o){if(Bn(e,o.options)&&Bn(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const l=new rc(i);for(const f of Gr.values())l.addComponent(f);const h=new Zc(e,r,l);return jn.set(i,h),h}function eu(n=Hr){const t=jn.get(n);if(!t&&n===Hr&&Lo())return qo();if(!t)throw $t.create("no-app",{appName:n});return t}function ge(n,t,e){let r=Wc[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(l.join(" "));return}$n(new Ye(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="firebase-heartbeat-database",ru=1,Ze="firebase-heartbeat-store";let xr=null;function zo(){return xr||(xr=gc(nu,ru,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),xr}async function su(n){try{const e=(await zo()).transaction(Ze),r=await e.objectStore(Ze).get(Ho(n));return await e.done,r}catch(t){if(t instanceof we)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function $i(n,t){try{const r=(await zo()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,Ho(n)),await r.done}catch(e){if(e instanceof we)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(r.message)}}}function Ho(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=1024,ou=30;class au{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new cu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qi();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>ou){const l=uu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qi(),{heartbeatsToSend:r,unsentEntries:i}=lu(this._heartbeatsCache.heartbeats),o=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function qi(){return new Date().toISOString().substring(0,10)}function lu(n,t=iu){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),zi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),zi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class cu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wl()?Ql().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await su(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $i(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $i(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function zi(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}function uu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){$n(new Ye("platform-logger",t=>new Ec(t),"PRIVATE")),$n(new Ye("heartbeat",t=>new au(t),"PRIVATE")),ge(zr,Bi,n),ge(zr,Bi,"esm2020"),ge("fire-js","")}hu("");var fu="firebase",du="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge(fu,du,"app");var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,m){function g(){}g.prototype=m.prototype,y.F=m.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,I){for(var p=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)p[gt-2]=arguments[gt];return m.prototype[_].apply(E,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,m,g){g||(g=0);const E=Array(16);if(typeof m=="string")for(var _=0;_<16;++_)E[_]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=y.g[0],g=y.g[1],_=y.g[2];let I=y.g[3],p;p=m+(I^g&(_^I))+E[0]+3614090360&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[2]+606105819&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[3]+3250441966&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[6]+2821735955&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[7]+4249261313&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[10]+4294925233&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[11]+2304563134&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(I^g&(_^I))+E[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(_^m&(g^_))+E[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=_+(g^I&(m^g))+E[14]+2792965006&4294967295,_=I+(p<<17&4294967295|p>>>15),p=g+(m^_&(I^m))+E[15]+1236535329&4294967295,g=_+(p<<22&4294967295|p>>>10),p=m+(_^I&(g^_))+E[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[11]+643717713&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[0]+3921069994&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[15]+3634488961&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[4]+3889429448&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[3]+4107603335&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[8]+1163531501&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(_^I&(g^_))+E[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^_&(m^g))+E[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=_+(m^g&(I^m))+E[7]+1735328473&4294967295,_=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(_^I))+E[12]+2368359562&4294967295,g=_+(p<<20&4294967295|p>>>12),p=m+(g^_^I)+E[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[11]+1839030562&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[14]+4259657740&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[7]+4139469664&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[10]+3200236656&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[3]+3572445317&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[6]+76029189&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(g^_^I)+E[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^_)+E[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=_+(I^m^g)+E[15]+530742520&4294967295,_=I+(p<<16&4294967295|p>>>16),p=g+(_^I^m)+E[2]+3299628645&4294967295,g=_+(p<<23&4294967295|p>>>9),p=m+(_^(g|~I))+E[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[14]+2878612391&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[5]+4237533241&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[10]+4293915773&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[1]+2240044497&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[6]+2734768916&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[13]+1309151649&4294967295,g=_+(p<<21&4294967295|p>>>11),p=m+(_^(g|~I))+E[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~_))+E[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=_+(m^(I|~g))+E[2]+718787259&4294967295,_=I+(p<<15&4294967295|p>>>17),p=g+(I^(_|~m))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+m&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.v=function(y,m){m===void 0&&(m=y.length);const g=m-this.blockSize,E=this.C;let _=this.h,I=0;for(;I<m;){if(_==0)for(;I<=g;)i(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<m;)if(E[_++]=y.charCodeAt(I++),_==this.blockSize){i(this,E),_=0;break}}else for(;I<m;)if(E[_++]=y[I++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=m},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var m=1;m<y.length-8;++m)y[m]=0;m=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=m&255,m/=256;for(this.v(y),y=Array(16),m=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[m++]=this.g[g]>>>E&255;return y};function o(y,m){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=m(y)}function l(y,m){this.h=m;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const I=y[_]|0;E&&I==m||(g[_]=I,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(m){return new l([m|0],m<0?-1:0)}):new l([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return O(d(-y));const m=[];let g=1;for(let E=0;y>=g;E++)m[E]=y/g|0,g*=4294967296;return new l(m,0)}function v(y,m){if(y.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(y.charAt(0)=="-")return O(v(y.substring(1),m));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(m,8));let E=w;for(let I=0;I<y.length;I+=8){var _=Math.min(8,y.length-I);const p=parseInt(y.substring(I,I+_),m);_<8?(_=d(Math.pow(m,_)),E=E.j(_).add(d(p))):(E=E.j(g),E=E.add(d(p)))}return E}var w=f(0),P=f(1),C=f(16777216);n=l.prototype,n.m=function(){if(L(this))return-O(this).m();let y=0,m=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*m,m*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+O(this).toString(y);const m=d(Math.pow(y,6));var g=this;let E="";for(;;){const _=Rt(g,m).g;g=G(g,_.j(m));let I=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let m=0;m<y.g.length;m++)if(y.g[m]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=G(this,y),L(y)?-1:N(y)?0:1};function O(y){const m=y.g.length,g=[];for(let E=0;E<m;E++)g[E]=~y.g[E];return new l(g,~y.h).add(P)}n.abs=function(){return L(this)?O(this):this},n.add=function(y){const m=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=m;_++){let I=E+(this.i(_)&65535)+(y.i(_)&65535),p=(I>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=p>>>16,I&=65535,p&=65535,g[_]=p<<16|I}return new l(g,g[g.length-1]&-2147483648?-1:0)};function G(y,m){return y.add(O(m))}n.j=function(y){if(N(this)||N(y))return w;if(L(this))return L(y)?O(this).j(O(y)):O(O(this).j(y));if(L(y))return O(this.j(O(y)));if(this.l(C)<0&&y.l(C)<0)return d(this.m()*y.m());const m=this.g.length+y.g.length,g=[];for(var E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const I=this.i(E)>>>16,p=this.i(E)&65535,gt=y.i(_)>>>16,Qt=y.i(_)&65535;g[2*E+2*_]+=p*Qt,K(g,2*E+2*_),g[2*E+2*_+1]+=I*Qt,K(g,2*E+2*_+1),g[2*E+2*_+1]+=p*gt,K(g,2*E+2*_+1),g[2*E+2*_+2]+=I*gt,K(g,2*E+2*_+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new l(g,0)};function K(y,m){for(;(y[m]&65535)!=y[m];)y[m+1]+=y[m]>>>16,y[m]&=65535,m++}function at(y,m){this.g=y,this.h=m}function Rt(y,m){if(N(m))throw Error("division by zero");if(N(y))return new at(w,w);if(L(y))return m=Rt(O(y),m),new at(O(m.g),O(m.h));if(L(m))return m=Rt(y,O(m)),new at(O(m.g),m.h);if(y.g.length>30){if(L(y)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var g=P,E=m;E.l(y)<=0;)g=pt(g),E=pt(E);var _=Et(g,1),I=Et(E,1);for(E=Et(E,2),g=Et(g,2);!N(E);){var p=I.add(E);p.l(y)<=0&&(_=_.add(g),I=p),E=Et(E,1),g=Et(g,1)}return m=G(y,_.j(m)),new at(_,m)}for(_=w;y.l(m)>=0;){for(g=Math.max(1,Math.floor(y.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=d(g),p=I.j(m);L(p)||p.l(y)>0;)g-=E,I=d(g),p=I.j(m);N(I)&&(I=P),_=_.add(I),y=G(y,p)}return new at(_,y)}n.B=function(y){return Rt(this,y).h},n.and=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const m=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<m;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function pt(y){const m=y.g.length+1,g=[];for(let E=0;E<m;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function Et(y,m){const g=m>>5;m%=32;const E=y.g.length-g,_=[];for(let I=0;I<E;I++)_[I]=m>0?y.i(I+g)>>>m|y.i(I+g+1)<<32-m:y.i(I+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=v,cs=l}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Go,He,Ko,kn,Kr,Wo,Qo,Xo;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var T=s[u];if(!(T in c))break t;c=c[T]}s=s[s.length-1],u=c[s],a=a(u),a!=u&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&c.push([u,a[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,c){return s.call.apply(s.bind,arguments)}function d(s,a,c){return d=f,d.apply(null,arguments)}function v(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function w(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(u,T,A){for(var b=Array(arguments.length-2),x=2;x<arguments.length;x++)b[x-2]=arguments[x];return a.prototype[T].apply(u,b)}}var P=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function C(s){const a=s.length;if(a>0){const c=Array(a);for(let u=0;u<a;u++)c[u]=s[u];return c}return[]}function N(s,a){for(let u=1;u<arguments.length;u++){const T=arguments[u];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=s.length||0;const A=T.length||0;s.length=c+A;for(let b=0;b<A;b++)s[c+b]=T[b]}else s.push(T)}}class L{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function O(s){l.setTimeout(()=>{throw s},0)}function G(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class K{constructor(){this.h=this.g=null}add(a,c){const u=at.get();u.set(a,c),this.h?this.h.next=u:this.g=u,this.h=u}}var at=new L(()=>new Rt,s=>s.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,Et=!1,y=new K,m=()=>{const s=Promise.resolve(void 0);pt=()=>{s.then(g)}};function g(){for(var s;s=G();){try{s.h.call(s.g)}catch(c){O(c)}var a=at;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}Et=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function gt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(gt,_),gt.prototype.init=function(s,a){const c=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),tl=0;function el(s,a,c,u,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!u,this.ha=T,this.key=++tl,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function mn(s,a,c){for(const u in s)a.call(c,s[u],u,s)}function nl(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function ks(s){const a={};for(const c in s)a[c]=s[c];return a}const xs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ms(s,a){let c,u;for(let T=1;T<arguments.length;T++){u=arguments[T];for(c in u)s[c]=u[c];for(let A=0;A<xs.length;A++)c=xs[A],Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,c,u,T){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const b=cr(s,a,u,T);return b>-1?(a=s[b],c||(a.fa=!1)):(a=new el(a,this.src,A,!!u,T),a.fa=c,s.push(a)),a};function lr(s,a){const c=a.type;if(c in s.g){var u=s.g[c],T=Array.prototype.indexOf.call(u,a,void 0),A;(A=T>=0)&&Array.prototype.splice.call(u,T,1),A&&(dn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function cr(s,a,c,u){for(let T=0;T<s.length;++T){const A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==u)return T}return-1}var ur="closure_lm_"+(Math.random()*1e6|0),hr={};function Ls(s,a,c,u,T){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Ls(s,a[A],c,u,T);return null}return c=Bs(c),s&&s[Qt]?s.J(a,c,h(u)?!!u.capture:!1,T):rl(s,a,c,!1,u,T)}function rl(s,a,c,u,T,A){if(!a)throw Error("Invalid event type");const b=h(T)?!!T.capture:!!T;let x=dr(s);if(x||(s[ur]=x=new pn(s)),c=x.add(a,c,u,b,A),c.proxy)return c;if(u=sl(),c.proxy=u,u.src=s,u.listener=c,s.addEventListener)I||(T=b),T===void 0&&(T=!1),s.addEventListener(a.toString(),u,T);else if(s.attachEvent)s.attachEvent(Us(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function sl(){function s(c){return a.call(s.src,s.listener,c)}const a=il;return s}function Fs(s,a,c,u,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Fs(s,a[A],c,u,T);else u=h(u)?!!u.capture:!!u,c=Bs(c),s&&s[Qt]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],c=cr(a,c,u,T),c>-1&&(dn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=cr(a,c,u,T)),(c=s>-1?a[s]:null)&&fr(c))}function fr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Qt])lr(a.i,s);else{var c=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(c,u,s.capture):a.detachEvent?a.detachEvent(Us(c),u):a.addListener&&a.removeListener&&a.removeListener(u),(c=dr(a))?(lr(c,s),c.h==0&&(c.src=null,a[ur]=null)):dn(s)}}}function Us(s){return s in hr?hr[s]:hr[s]="on"+s}function il(s,a){if(s.da)s=!0;else{a=new gt(a,this);const c=s.listener,u=s.ha||s.src;s.fa&&fr(s),s=c.call(u,a)}return s}function dr(s){return s=s[ur],s instanceof pn?s:null}var mr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bs(s){return typeof s=="function"?s:(s[mr]||(s[mr]=function(a){return s.handleEvent(a)}),s[mr])}function lt(){E.call(this),this.i=new pn(this),this.M=this,this.G=null}w(lt,E),lt.prototype[Qt]=!0,lt.prototype.removeEventListener=function(s,a,c,u){Fs(this,s,a,c,u)};function dt(s,a){var c,u=s.G;if(u)for(c=[];u;u=u.G)c.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(u,s),Ms(a,T)}T=!0;let A,b;if(c)for(b=c.length-1;b>=0;b--)A=a.g=c[b],T=gn(A,u,!0,a)&&T;if(A=a.g=s,T=gn(A,u,!0,a)&&T,T=gn(A,u,!1,a)&&T,c)for(b=0;b<c.length;b++)A=a.g=c[b],T=gn(A,u,!1,a)&&T}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let u=0;u<c.length;u++)dn(c[u]);delete s.g[a],s.h--}}this.G=null},lt.prototype.J=function(s,a,c,u){return this.i.add(String(s),a,!1,c,u)},lt.prototype.K=function(s,a,c,u){return this.i.add(String(s),a,!0,c,u)};function gn(s,a,c,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let A=0;A<a.length;++A){const b=a[A];if(b&&!b.da&&b.capture==c){const x=b.listener,Z=b.ha||b.src;b.fa&&lr(s.i,b),T=x.call(Z,u)!==!1&&T}}return T&&!u.defaultPrevented}function ol(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function js(s){s.g=ol(()=>{s.g=null,s.i&&(s.i=!1,js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class al extends E{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:js(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(s){E.call(this),this.h=s,this.g={}}w(Pe,E);var $s=[];function qs(s){mn(s.g,function(a,c){this.g.hasOwnProperty(c)&&fr(a)},s),s.g={}}Pe.prototype.N=function(){Pe.Z.N.call(this),qs(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=l.JSON.stringify,ll=l.JSON.parse,cl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function zs(){}function Hs(){}var be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gr(){_.call(this,"d")}w(gr,_);function _r(){_.call(this,"c")}w(_r,_);var Xt={},Gs=null;function _n(){return Gs=Gs||new lt}Xt.Ia="serverreachability";function Ks(s){_.call(this,Xt.Ia,s)}w(Ks,_);function Ce(s){const a=_n();dt(a,new Ks(a))}Xt.STAT_EVENT="statevent";function Ws(s,a){_.call(this,Xt.STAT_EVENT,s),this.stat=a}w(Ws,_);function mt(s){const a=_n();dt(a,new Ws(a,s))}Xt.Ja="timingevent";function Qs(s,a){_.call(this,Xt.Ja,s),this.size=a}w(Qs,_);function Ve(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function De(){this.g=!0}De.prototype.ua=function(){this.g=!1};function ul(s,a,c,u,T,A){s.info(function(){if(s.g)if(A){var b="",x=A.split("&");for(let j=0;j<x.length;j++){var Z=x[j].split("=");if(Z.length>1){const tt=Z[0];Z=Z[1];const Pt=tt.split("_");b=Pt.length>=2&&Pt[1]=="type"?b+(tt+"="+Z+"&"):b+(tt+"=redacted&")}}}else b=null;else b=A;return"XMLHTTP REQ ("+u+") [attempt "+T+"]: "+a+`
`+c+`
`+b})}function hl(s,a,c,u,T,A,b){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+b})}function he(s,a,c,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+dl(s,c)+(u?" "+u:"")})}function fl(s,a){s.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function dl(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var c=A[s];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var T=u[0];if(T!="noop"&&T!="stop"&&T!="close")for(let b=1;b<u.length;b++)u[b]=""}}}}return pr(A)}catch{return a}}var yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Js;function yr(){}w(yr,zs),yr.prototype.g=function(){return new XMLHttpRequest},Js=new yr;function Ne(s){return encodeURIComponent(String(s))}function ml(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function xt(s,a,c,u){this.j=s,this.i=a,this.l=c,this.S=u||1,this.V=new Pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ys}function Ys(){this.i=null,this.g="",this.h=!1}var Zs={},Er={};function Tr(s,a,c){s.M=1,s.A=Tn(St(a)),s.u=c,s.R=!0,ti(s,null)}function ti(s,a){s.F=Date.now(),En(s),s.B=St(s.A);var c=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),di(c.i,"t",u),s.C=0,c=s.j.L,s.h=new Ys,s.g=Di(s.j,c?a:null,!s.u),s.P>0&&(s.O=new al(d(s.Y,s,s.g),s.P)),a=s.V,c=s.g,u=s.ba;var T="readystatechange";Array.isArray(T)||(T&&($s[0]=T.toString()),T=$s);for(let A=0;A<T.length;A++){const b=Ls(c,T[A],u||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.J?ks(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ce(),ul(s.i,s.v,s.B,s.l,s.S,s.u)}xt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ft(s)==3?a.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)t:{const x=Ft(this.g),Z=this.g.ya(),j=this.g.ca();if(!(x<3)&&(x!=3||this.g&&(this.h.h||this.g.la()||Ti(this.g)))){this.K||x!=4||Z==7||(Z==8||j<=0?Ce(3):Ce(2)),vr(this);var a=this.g.ca();this.X=a;var c=pl(this);if(this.o=a==200,hl(this.i,this.v,this.B,this.l,this.S,x,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,T=this.g;if((u=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(u)){var A=u;break e}}A=null}if(s=A)he(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ir(this,s);else{this.o=!1,this.m=3,mt(12),Jt(this),Oe(this);break t}}if(this.R){s=!0;let tt;for(;!this.K&&this.C<c.length;)if(tt=gl(this,c),tt==Er){x==4&&(this.m=4,mt(14),s=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Zs){this.m=4,mt(15),he(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else he(this.i,this.l,tt,null),Ir(this,tt);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),x!=4||c.length!=0||this.h.h||(this.m=1,mt(16),s=!1),this.o=this.o&&s,!s)he(this.i,this.l,c,"[Invalid Chunked Response]"),Jt(this),Oe(this);else if(c.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Vr(b),b.P=!0,mt(11))}}else he(this.i,this.l,c,null),Ir(this,c);x==4&&Jt(this),this.o&&!this.K&&(x==4?Pi(this.j,this):(this.o=!1,En(this)))}else Vl(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Jt(this),Oe(this)}}}catch{}finally{}};function pl(s){if(!ei(s))return s.g.la();const a=Ti(s.g);if(a==="")return"";let c="";const u=a.length,T=Ft(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Jt(s),Oe(s),"";s.h.i=new l.TextDecoder}for(let A=0;A<u;A++)s.h.h=!0,c+=s.h.i.decode(a[A],{stream:!(T&&A==u-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function ei(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function gl(s,a){var c=s.C,u=a.indexOf(`
`,c);return u==-1?Er:(c=Number(a.substring(c,u)),isNaN(c)?Zs:(u+=1,u+c>a.length?Er:(a=a.slice(u,u+c),s.C=u+c,a)))}xt.prototype.cancel=function(){this.K=!0,Jt(this)};function En(s){s.T=Date.now()+s.H,ni(s,s.H)}function ni(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Ve(d(s.aa,s),a)}function vr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}xt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(fl(this.i,this.B),this.M!=2&&(Ce(),mt(17)),Jt(this),this.m=2,Oe(this)):ni(this,this.T-s)};function Oe(s){s.j.I==0||s.K||Pi(s.j,s)}function Jt(s){vr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,qs(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Ir(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||Ar(c.h,s))){if(!s.L&&Ar(c.h,s)&&c.I==3){try{var u=c.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var T=u;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Rn(c),An(c);else break t;Cr(c),mt(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Ve(d(c.Va,c),6e3));ii(c.h)<=1&&c.ta&&(c.ta=void 0)}else Zt(c,11)}else if((s.L||c.g==s)&&Rn(c),!p(a))for(T=c.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const tt=j[0];if(!(tt<=c.K))if(c.K=tt,j=j[1],c.I==2)if(j[0]=="c"){c.M=j[1],c.ba=j[2];const Pt=j[3];Pt!=null&&(c.ka=Pt,c.j.info("VER="+c.ka));const te=j[4];te!=null&&(c.za=te,c.j.info("SVER="+c.za));const Ut=j[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(u=1.5*Ut,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const Bt=s.g;if(Bt){const Pn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pn){var A=u.h;A.g||Pn.indexOf("spdy")==-1&&Pn.indexOf("quic")==-1&&Pn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(wr(A,A.h),A.h=null))}if(u.G){const Dr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(u.wa=Dr,q(u.J,u.G,Dr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var b=s;if(u.na=Vi(u,u.L?u.ba:null,u.W),b.L){oi(u.h,b);var x=b,Z=u.O;Z&&(x.H=Z),x.D&&(vr(x),En(x)),u.g=b}else Ri(u);c.i.length>0&&wn(c)}else j[0]!="stop"&&j[0]!="close"||Zt(c,7);else c.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Zt(c,7):br(c):j[0]!="noop"&&c.l&&c.l.qa(j),c.A=0)}}Ce(4)}catch{}}var _l=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function Ar(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function wr(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return C(s.i)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yl(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const u=s[c].indexOf("=");let T,A=null;u>=0?(T=s[c].substring(0,u),A=s[c].substring(u+1)):T=s[c],a(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Mt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Mt?(this.l=s.l,ke(this,s.j),this.o=s.o,this.g=s.g,xe(this,s.u),this.h=s.h,Rr(this,mi(s.i)),this.m=s.m):s&&(a=String(s).match(li))?(this.l=!1,ke(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),xe(this,a[4]),this.h=Me(a[5]||"",!0),Rr(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}Mt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Le(a,ci,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Le(a,ci,!0),"@"),s.push(Ne(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Le(c,c.charAt(0)=="/"?vl:Tl,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Le(c,Al)),s.join("")},Mt.prototype.resolve=function(s){const a=St(this);let c=!!s.j;c?ke(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var u=s.h;if(c)xe(a,s.u);else if(c=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var T=a.h.lastIndexOf("/");T!=-1&&(u=a.h.slice(0,T+1)+u)}if(T=u,T==".."||T==".")u="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){u=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let b=0;b<T.length;){const x=T[b++];x=="."?u&&b==T.length&&A.push(""):x==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),u&&b==T.length&&A.push("")):(A.push(x),u=!0)}u=A.join("/")}else u=T}return c?a.h=u:c=s.i.toString()!=="",c?Rr(a,mi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function St(s){return new Mt(s)}function ke(s,a,c){s.j=c?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function xe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Rr(s,a,c){a instanceof Fe?(s.i=a,wl(s.i,s.l)):(c||(a=Le(a,Il)),s.i=new Fe(a,s.l))}function q(s,a,c){s.i.set(a,c)}function Tn(s){return q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Le(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,El),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function El(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ci=/[#\/\?@]/g,Tl=/[#\?:]/g,vl=/[#\?]/g,Il=/[#\?@]/g,Al=/#/g;function Fe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Yt(s){s.g||(s.g=new Map,s.h=0,s.i&&yl(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Fe.prototype,n.add=function(s,a){Yt(this),this.i=null,s=fe(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function ui(s,a){Yt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function hi(s,a){return Yt(s),a=fe(s,a),s.g.has(a)}n.forEach=function(s,a){Yt(this),this.g.forEach(function(c,u){c.forEach(function(T){s.call(a,T,u,this)},this)},this)};function fi(s,a){Yt(s);let c=[];if(typeof a=="string")hi(s,a)&&(c=c.concat(s.g.get(fe(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return Yt(this),this.i=null,s=fe(this,s),hi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=fi(this,s),s.length>0?String(s[0]):a):a};function di(s,a,c){ui(s,a),c.length>0&&(s.i=null,s.g.set(fe(s,a),C(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var c=a[u];const T=Ne(c);c=fi(this,c);for(let A=0;A<c.length;A++){let b=T;c[A]!==""&&(b+="="+Ne(c[A])),s.push(b)}}return this.i=s.join("&")};function mi(s){const a=new Fe;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function wl(s,a){a&&!s.j&&(Yt(s),s.i=null,s.g.forEach(function(c,u){const T=u.toLowerCase();u!=T&&(ui(this,u),di(this,T,c))},s)),s.j=a}function Rl(s,a){const c=new De;if(l.Image){const u=new Image;u.onload=v(Lt,c,"TestLoadImage: loaded",!0,a,u),u.onerror=v(Lt,c,"TestLoadImage: error",!1,a,u),u.onabort=v(Lt,c,"TestLoadImage: abort",!1,a,u),u.ontimeout=v(Lt,c,"TestLoadImage: timeout",!1,a,u),l.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function Sl(s,a){const c=new De,u=new AbortController,T=setTimeout(()=>{u.abort(),Lt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(A=>{clearTimeout(T),A.ok?Lt(c,"TestPingServer: ok",!0,a):Lt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(c,"TestPingServer: error",!1,a)})}function Lt(s,a,c,u,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),u(c)}catch{}}function Pl(){this.g=new cl}function Sr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Sr,zs),Sr.prototype.g=function(){return new vn(this.i,this.h)};function vn(s,a){lt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(vn,lt),n=vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Be(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ue(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ue(this):Be(this),this.readyState==3&&pi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ue(this))},n.Na=function(s){this.g&&(this.response=s,Ue(this))},n.ga=function(){this.g&&Ue(this)};function Ue(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Be(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Be(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function gi(s){let a="";return mn(s,function(c,u){a+=u,a+=":",a+=c,a+=`\r
`}),a}function Pr(s,a,c){t:{for(u in c){var u=!1;break t}u=!0}u||(c=gi(c),typeof s=="string"?c!=null&&Ne(c):q(s,a,c))}function Q(s){lt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Q,lt);var bl=/^https?$/i,Cl=["POST","PUT"];n=Q.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Js.g(),this.g.onreadystatechange=P(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){_i(this,A);return}if(s=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var T in u)c.set(T,u[T]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const A of u.keys())c.set(A,u.get(A));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Cl,a,void 0)>=0)||u||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of c)this.g.setRequestHeader(A,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){_i(this,A)}};function _i(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,yi(s),In(s)}function yi(s){s.A||(s.A=!0,dt(s,"complete"),dt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,dt(this,"complete"),dt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),Q.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ei(this):this.Xa())},n.Xa=function(){Ei(this)};function Ei(s){if(s.h&&typeof o<"u"){if(s.v&&Ft(s)==4)setTimeout(s.Ca.bind(s),0);else if(dt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var u;if(u=A===0){let b=String(s.D).match(li)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),u=!bl.test(b?b.toLowerCase():"")}c=u}if(c)dt(s,"complete"),dt(s,"success");else{s.o=6;try{var T=Ft(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",yi(s)}}finally{In(s)}}}}function In(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||dt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ll(a)}};function Ti(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Vl(s){const a={};s=(s.g&&Ft(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(p(s[u]))continue;var c=ml(s[u]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}nl(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function vi(s){this.za=0,this.i=[],this.j=new De,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=je("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=je("baseRetryDelayMs",5e3,s),this.Za=je("retryDelaySeedMs",1e4,s),this.Ta=je("forwardChannelMaxRetries",2,s),this.va=je("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new ri(s&&s.concurrentRequestLimit),this.Ba=new Pl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=vi.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,u){mt(0),this.W=s,this.H=a||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Vi(this,null,this.W),wn(this)};function br(s){if(Ii(s),s.I==3){var a=s.V++,c=St(s.J);if(q(c,"SID",s.M),q(c,"RID",a),q(c,"TYPE","terminate"),$e(s,c),a=new xt(s,s.j,a),a.M=2,a.A=Tn(St(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=Di(a.j,null),a.g.ea(a.A)),a.F=Date.now(),En(a)}Ci(s)}function An(s){s.g&&(Vr(s),s.g.cancel(),s.g=null)}function Ii(s){An(s),s.v&&(l.clearTimeout(s.v),s.v=null),Rn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function wn(s){if(!si(s.h)&&!s.m){s.m=!0;var a=s.Ea;pt||m(),Et||(pt(),Et=!0),y.add(a,s),s.D=0}}function Dl(s,a){return ii(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Ve(d(s.Ea,s,a),bi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new xt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=ks(A),Ms(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=wi(this,T,a),c=St(this.J),q(c,"RID",s),q(c,"CVER",22),this.G&&q(c,"X-HTTP-Session-Id",this.G),$e(this,c),A&&(this.R?a="headers="+Ne(gi(A))+"&"+a:this.u&&Pr(c,this.u,A)),wr(this.h,T),this.Ra&&q(c,"TYPE","init"),this.S?(q(c,"$req",a),q(c,"SID","null"),T.U=!0,Tr(T,c,null)):Tr(T,c,a),this.I=2}}else this.I==3&&(s?Ai(this,s):this.i.length==0||si(this.h)||Ai(this))};function Ai(s,a){var c;a?c=a.l:c=s.V++;const u=St(s.J);q(u,"SID",s.M),q(u,"RID",c),q(u,"AID",s.K),$e(s,u),s.u&&s.o&&Pr(u,s.u,s.o),c=new xt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=wi(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),wr(s.h,c),Tr(c,u,a)}function $e(s,a){s.H&&mn(s.H,function(c,u){q(a,u,c)}),s.l&&mn({},function(c,u){q(a,u,c)})}function wi(s,a,c){c=Math.min(s.i.length,c);const u=s.l?d(s.l.Ka,s.l,s):null;t:{var T=s.i;let x=-1;for(;;){const Z=["count="+c];x==-1?c>0?(x=T[0].g,Z.push("ofs="+x)):x=0:Z.push("ofs="+x);let j=!0;for(let tt=0;tt<c;tt++){var A=T[tt].g;const Pt=T[tt].map;if(A-=x,A<0)x=Math.max(0,T[tt].g-100),j=!1;else try{A="req"+A+"_"||"";try{var b=Pt instanceof Map?Pt:Object.entries(Pt);for(const[te,Ut]of b){let Bt=Ut;h(Ut)&&(Bt=pr(Ut)),Z.push(A+te+"="+encodeURIComponent(Bt))}}catch(te){throw Z.push(A+"type="+encodeURIComponent("_badmap")),te}}catch{u&&u(Pt)}}if(j){b=Z.join("&");break t}}b=void 0}return s=s.i.splice(0,c),a.G=s,b}function Ri(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;pt||m(),Et||(pt(),Et=!0),y.add(a,s),s.A=0}}function Cr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Ve(d(s.Da,s),bi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Si(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Ve(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),An(this),Si(this))};function Vr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Si(s){s.g=new xt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);q(a,"RID","rpc"),q(a,"SID",s.M),q(a,"AID",s.K),q(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&q(a,"TO",s.ia),q(a,"TYPE","xmlhttp"),$e(s,a),s.u&&s.o&&Pr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=Tn(St(a)),c.u=null,c.R=!0,ti(c,s)}n.Va=function(){this.C!=null&&(this.C=null,An(this),Cr(this),mt(19))};function Rn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Pi(s,a){var c=null;if(s.g==a){Rn(s),Vr(s),s.g=null;var u=2}else if(Ar(s.h,a))c=a.G,oi(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;u=_n(),dt(u,new Qs(u,c)),wn(s)}else Ri(s);else if(T=a.m,T==3||T==0&&a.X>0||!(u==1&&Dl(s,a)||u==2&&Cr(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function bi(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var c=d(s.bb,s),u=s.Ua;const T=!u;u=new Mt(u||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ke(u,"https"),Tn(u),T?Rl(u.toString(),c):Sl(u.toString(),c)}else mt(2);s.I=0,s.l&&s.l.pa(a),Ci(s),Ii(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Ci(s){if(s.I=0,s.ja=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.oa()}}function Vi(s,a,c){var u=c instanceof Mt?St(c):new Mt(c);if(u.g!="")a&&(u.g=a+"."+u.g),xe(u,u.u);else{var T=l.location;u=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const A=new Mt(null);u&&ke(A,u),a&&(A.g=a),T&&xe(A,T),c&&(A.h=c),u=A}return c=s.G,a=s.wa,c&&a&&q(u,c,a),q(u,"VER",s.ka),$e(s,u),u}function Di(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new Q(new Sr({ab:c})):new Q(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}n=Ni.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Sn(){}Sn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){lt.call(this),this.g=new vi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!p(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!p(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new de(this)}w(Tt,lt),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){br(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=pr(s),s=c);a.i.push(new _l(a.Ya++,s)),a.I==3&&wn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,br(this.g),delete this.g,Tt.Z.N.call(this)};function Oi(s){gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(Oi,gr);function ki(){_r.call(this),this.status=1}w(ki,_r);function de(s){this.g=s}w(de,Ni),de.prototype.ra=function(){dt(this.g,"a")},de.prototype.qa=function(s){dt(this.g,new Oi(s))},de.prototype.pa=function(s){dt(this.g,new ki)},de.prototype.oa=function(){dt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Xo=function(){return new Sn},Qo=function(){return _n()},Wo=Xt,Kr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,kn=yn,Xs.COMPLETE="complete",Ko=Xs,Hs.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",lt.prototype.listen=lt.prototype.J,He=Hs,Q.prototype.listenOnce=Q.prototype.K,Q.prototype.getLastError=Q.prototype.Ha,Q.prototype.getLastErrorCode=Q.prototype.ya,Q.prototype.getStatus=Q.prototype.ca,Q.prototype.getResponseJson=Q.prototype.La,Q.prototype.getResponseText=Q.prototype.la,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Fa,Go=Q}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="12.13.0";function mu(n){Re=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Bo("@firebase/firestore");function me(){return ie.logLevel}function V(n,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(us);ie.debug(`Firestore (${Re}): ${n}`,...e)}}function oe(n,...t){if(ie.logLevel<=U.ERROR){const e=t.map(us);ie.error(`Firestore (${Re}): ${n}`,...e)}}function tn(n,...t){if(ie.logLevel<=U.WARN){const e=t.map(us);ie.warn(`Firestore (${Re}): ${n}`,...e)}}function us(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Jo(n,r,e)}function Jo(n,t,e){let r=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw oe(r),new Error(r)}function X(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Jo(t,i,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ut.UNAUTHENTICATED))}shutdown(){}}class gu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _u{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new re,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new re)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Yo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new ut(t)}}class yu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Eu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new yu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Gi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Wr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Mr(i)===Mr(o)?B(i,o):Mr(i)?1:-1}return B(n.length,t.length)}const Iu=55296,Au=57343;function Mr(n){const t=n.charCodeAt(0);return t>=Iu&&t<=Au}function Te(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),i=bt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Wr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return cs.fromString(t.substring(4,t.length-2))}}class W extends bt{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const wu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends bt{construct(t,e,r){return new it(t,e,r)}static isValidIdentifier(t){return wu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ki}static keyField(){return new it([Ki])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(W.fromString(t))}static fromName(t){return new k(W.fromString(t).popFirst(5))}static empty(){return new k(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ru(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wi(n){if(!k.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qi(n){if(k.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ta(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function ea(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fs(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!ta(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=-62135596800,Ji=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ji);return new H(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xi)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ji}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Xi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:Y("string",H._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new H(0,0))}static max(){return new z(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Su(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new zt(i,k.empty(),t)}function Pu(n){return new zt(n.readTime,n.key,en)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(z.min(),k.empty(),en)}static max(){return new zt(z.max(),k.empty(),en)}}function bu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Cu)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,l=!1;t.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&e()},f=>r(f))}),l=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(v=>{l[d]=v,++h,h===o&&r(l)},v=>i(v))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Du(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ms.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=-1;function gs(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function Nu(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="";function Ou(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Yi(t)),t=ku(n.get(e),t);return Yi(t)}function ku(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case na:e+="";break;default:e+=o}}return e}function Yi(n){return n+na+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ra(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new rt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ot(it.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new xu("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Mu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=Mu.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="server_timestamp",ia="__type__",oa="__previous_value__",aa="__local_write_time__";function _s(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ia])==null?void 0:r.stringValue)===sa}function ys(n){const t=n.mapValue.fields[oa];return _s(t)?ys(t):t}function zn(n){const t=ae(n.mapValue.fields[aa].timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e,r,i,o,l,h,f,d,v,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=v,this.apiKey=w}}const Hn="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}function Fu(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="__type__",Uu="__max__",Vn={mapValue:{}},ca="__vector__",Qr="value";function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_s(n)?4:ju(n)?9007199254740991:Bu(n)?10:11:M(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ae(i.timestampValue),h=ae(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ve(i.bytesValue).isEqual(ve(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=st(i.doubleValue),h=st(o.doubleValue);return l===h?qn(l)===qn(h):isNaN(l)&&isNaN(h)}return!1}(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Zi(l)!==Zi(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Dt(l[f],h[f])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function nn(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function Ie(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,l){const h=st(o.integerValue||o.doubleValue),f=st(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return eo(n.timestampValue,t.timestampValue);case 4:return eo(zn(n),zn(t));case 5:return Wr(n.stringValue,t.stringValue);case 6:return function(o,l){const h=ve(o),f=ve(l);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),f=l.split("/");for(let d=0;d<h.length&&d<f.length;d++){const v=B(h[d],f[d]);if(v!==0)return v}return B(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const h=B(st(o.latitude),st(l.latitude));return h!==0?h:B(st(o.longitude),st(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return no(n.arrayValue,t.arrayValue);case 10:return function(o,l){var P,C,N,L;const h=o.fields||{},f=l.fields||{},d=(P=h[Qr])==null?void 0:P.arrayValue,v=(C=f[Qr])==null?void 0:C.arrayValue,w=B(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((L=v==null?void 0:v.values)==null?void 0:L.length)||0);return w!==0?w:no(d,v)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Vn.mapValue&&l===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(l===Vn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),d=l.fields||{},v=Object.keys(d);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const P=Wr(f[w],v[w]);if(P!==0)return P;const C=Ie(h[f[w]],d[v[w]]);if(C!==0)return C}return B(f.length,v.length)}(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function eo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ae(n),r=ae(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function no(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ie(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Ae(n){return Xr(n)}function Xr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ae(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return k.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Xr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Xr(e.fields[l])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function xn(n){switch(le(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ys(n);return t?16+xn(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+xn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Se(r.fields,(o,l)=>{i+=o.length+xn(l)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function Jr(n){return!!n&&"integerValue"in n}function Es(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function Bu(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[la])==null?void 0:r.stringValue)===ca}function Ge(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return{...n}}function ju(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Uu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=it.emptyPath(),r={},i=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=Ge(l):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Se(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new It(Ge(this.value))}}function ua(n){const t=[];return Se(n.fields,(e,r)=>{const i=new it([e]);if(Mn(r)){const o=ua(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,z.min(),z.min(),z.min(),It.empty(),0)}static newFoundDocument(t,e,r,i){return new vt(t,1,e,z.min(),r,i,0)}static newNoDocument(t,e){return new vt(t,2,e,z.min(),z.min(),It.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,z.min(),z.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.position=t,this.inclusive=e}}function ro(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=k.comparator(k.fromName(l.referenceValue),e.key):r=Ie(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function so(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function $u(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{}class nt extends ha{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new zu(t,e,r):e==="array-contains"?new Ku(t,r):e==="in"?new Wu(t,r):e==="not-in"?new Qu(t,r):e==="array-contains-any"?new Xu(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Hu(t,r):new Gu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ie(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends ha{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ht(t,e)}matches(t){return fa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fa(n){return n.op==="and"}function da(n){return qu(n)&&fa(n)}function qu(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Yr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Ae(n.value);if(da(n))return n.filters.map(t=>Yr(t)).join(",");{const t=n.filters.map(e=>Yr(e)).join(",");return`${n.op}(${t})`}}function ma(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(n,t):n instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&ma(l,i.filters[h]),!0):!1}(n,t):void M(19439)}function pa(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(pa).join(" ,")+"}"}(n):"Filter"}class zu extends nt{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Hu extends nt{constructor(t,e){super(t,"in",e),this.keys=ga("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Gu extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ga("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ga(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>k.fromName(r.referenceValue))}class Ku extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Es(e)&&nn(e.arrayValue,this.value)}}class Wu extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Qu extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class Xu extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Es(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function io(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Ju(n,t,e,r,i,o,l)}function Ts(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Yr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ae(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ae(r)).join(",")),t.Te=e}return t.Te}function vs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!$u(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ma(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!so(n.startAt,t.startAt)&&so(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Yu(n,t,e,r,i,o,l,h){return new tr(n,t,e,r,i,o,l,h)}function Zu(n){return new tr(n)}function oo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function th(n){return k.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function eh(n){return n.collectionGroup!==null}function Ke(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new ot(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(h=h.add(d.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Wn(o,r))}),e.has(it.keyField().canonicalString())||t.Ie.push(new Wn(it.keyField(),r))}return t.Ie}function se(n){const t=$(n);return t.Ee||(t.Ee=nh(t,Ke(n))),t.Ee}function nh(n,t){if(n.limitType==="F")return io(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)});const e=n.endAt?new Kn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kn(n.startAt.position,n.startAt.inclusive):null;return io(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _a(n,t){return vs(se(n),se(t))&&n.limitType===t.limitType}function ya(n){return`${Ts(se(n))}|lt:${n.limitType}`}function qe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>pa(i)).join(", ")}]`),gs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ae(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ae(i)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function Is(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ke(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,h,f){const d=ro(l,h,f);return l.inclusive?d<=0:d<0}(r.startAt,Ke(r),i)||r.endAt&&!function(l,h,f){const d=ro(l,h,f);return l.inclusive?d>=0:d>0}(r.endAt,Ke(r),i))}(n,t)}function rh(n){return(t,e)=>{let r=!1;for(const i of Ke(n)){const o=sh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function sh(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):function(o,l,h){const f=l.data.field(o),d=h.data.field(o);return f!==null&&d!==null?Ie(f,d):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ra(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new yt(k.comparator);function Qn(){return ih}const Ea=new yt(k.comparator);function Dn(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function Ta(n){let t=Ea;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return We()}function va(){return We()}function We(){return new ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const oh=new yt(k.comparator),ah=new ot(k.comparator);function ht(...n){let t=ah;for(const e of n)t=t.add(e);return t}const lh=new ot(B);function ch(){return lh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function Ia(n){return{integerValue:""+n}}function uh(n,t){return Nu(t)?Ia(t):As(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function hh(n,t,e){return n instanceof rn?function(i,o){const l={fields:{[ia]:{stringValue:sa},[aa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&_s(o)&&(o=ys(o)),o&&(l.fields[oa]=o),{mapValue:l}}(e,t):n instanceof sn?wa(n,t):n instanceof on?Ra(n,t):function(i,o){const l=Aa(i,o),h=ao(l)+ao(i.Ae);return Jr(l)&&Jr(i.Ae)?Ia(h):As(i.serializer,h)}(n,t)}function fh(n,t,e){return n instanceof sn?wa(n,t):n instanceof on?Ra(n,t):e}function Aa(n,t){return n instanceof Xn?function(r){return Jr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rn extends er{}class sn extends er{constructor(t){super(),this.elements=t}}function wa(n,t){const e=Sa(t);for(const r of n.elements)e.some(i=>Dt(i,r))||e.push(r);return{arrayValue:{values:e}}}class on extends er{constructor(t){super(),this.elements=t}}function Ra(n,t){let e=Sa(t);for(const r of n.elements)e=e.filter(i=>!Dt(i,r));return{arrayValue:{values:e}}}class Xn extends er{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ao(n){return st(n.integerValue||n.doubleValue)}function Sa(n){return Es(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){this.field=t,this.transform=e}}function mh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof sn&&i instanceof sn||r instanceof on&&i instanceof on?Te(r.elements,i.elements,Dt):r instanceof Xn&&i instanceof Xn?Dt(r.Ae,i.Ae):r instanceof rn&&i instanceof rn}(n.transform,t.transform)}class ph{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function Pa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ca(n.key,Nt.none()):new cn(n.key,n.data,Nt.none());{const e=n.data,r=It.empty();let i=new ot(it.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new ue(n.key,r,new wt(i.toArray()),Nt.none())}}function gh(n,t,e){n instanceof cn?function(i,o,l){const h=i.value.clone(),f=co(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(i,o,l){if(!Ln(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=co(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(ba(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof cn?function(o,l,h,f){if(!Ln(o.precondition,l))return h;const d=o.value.clone(),v=uo(o.fieldTransforms,f,l);return d.setAll(v),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ue?function(o,l,h,f){if(!Ln(o.precondition,l))return h;const d=uo(o.fieldTransforms,f,l),v=l.data;return v.setAll(ba(o)),v.setAll(d),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,l,h){return Ln(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,t,e)}function _h(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Aa(r.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function lo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(o,l)=>mh(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cn extends nr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends nr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ba(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function co(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,fh(l,h,e[i]))}return r}function uo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,hh(o,l,t))}return r}class Ca extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yh extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&gh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=va();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=Pa(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,r)=>lo(e,r))&&Te(this.baseMutations,t.baseMutations,(e,r)=>lo(e,r))}}class ws{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){X(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return oh}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new ws(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function vh(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Ih(n){if(n===void 0)return oe("GRPC error has no .code"),S.UNKNOWN;switch(n){case J.OK:return S.OK;case J.CANCELLED:return S.CANCELLED;case J.UNKNOWN:return S.UNKNOWN;case J.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case J.INTERNAL:return S.INTERNAL;case J.UNAVAILABLE:return S.UNAVAILABLE;case J.UNAUTHENTICATED:return S.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case J.NOT_FOUND:return S.NOT_FOUND;case J.ALREADY_EXISTS:return S.ALREADY_EXISTS;case J.PERMISSION_DENIED:return S.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case J.ABORTED:return S.ABORTED;case J.OUT_OF_RANGE:return S.OUT_OF_RANGE;case J.UNIMPLEMENTED:return S.UNIMPLEMENTED;case J.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cs([4294967295,4294967295],0);class Ah{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ts(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Rh(n,t){return ts(n,t.toTimestamp())}function _e(n){return X(!!n,49232),z.fromTimestamp(function(e){const r=ae(e);return new H(r.seconds,r.nanos)}(n))}function Va(n,t){return es(n,t).canonicalString()}function es(n,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sh(n){const t=W.fromString(n);return X(kh(t),10190,{key:t.toString()}),t}function ns(n,t){return Va(n.databaseId,t.path)}function Ph(n){const t=Sh(n);return t.length===4?W.emptyPath():Ch(t)}function bh(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ho(n,t,e){return{name:ns(n,t),fields:e.value.mapValue.fields}}function Vh(n,t){let e;if(t instanceof cn)e={update:ho(n,t.key,t.value)};else if(t instanceof Ca)e={delete:ns(n,t.key)};else if(t instanceof ue)e={update:ho(n,t.key,t.data),updateMask:Oh(t.fieldMask)};else{if(!(t instanceof yh))return M(16599,{dt:t.type});e={verify:ns(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof rn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof on)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw M(20930,{transform:l.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Rh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function Dh(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map(e=>function(i,o){let l=i.updateTime?_e(i.updateTime):_e(o);return l.isEqual(z.min())&&(l=_e(o)),new ph(l,i.transformResults||[])}(e,t))):[]}function Nh(n){let t=Ph(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1,65062);const v=e.from[0];v.allDescendants?i=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(w){const P=Da(w);return P instanceof Ht&&da(P)?P.getFilters():[P]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(P=>function(N){return new Wn(pe(N.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(P))}(e.orderBy));let h=null;e.limit&&(h=function(w){let P;return P=typeof w=="object"?w.value:w,gs(P)?null:P}(e.limit));let f=null;e.startAt&&(f=function(w){const P=!!w.before,C=w.values||[];return new Kn(C,P)}(e.startAt));let d=null;return e.endAt&&(d=function(w){const P=!w.before,C=w.values||[];return new Kn(C,P)}(e.endAt)),Yu(t,i,l,o,h,"F",f,d)}function Da(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pe(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pe(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=pe(e.unaryFilter.field);return nt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(pe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>Da(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function pe(n){return it.fromServerFormat(n.fieldPath)}function Oh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Na(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.yt=t}}function Mh(n){const t=Nh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.bn=new Fh}addToCollectionParentIndex(t,e){return this.bn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Fh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(W.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Oa=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Oa,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Gt(0)}static ar(){return new Gt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="LruGarbageCollector",Uh=1048576;function po([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Bh{constructor(t){this.Pr=t,this.buffer=new ot(po),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();po(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class jh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){V(mo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?V(mo,"Ignoring IndexedDB error during garbage collection: ",e):await ds(e)}await this.Ar(3e5)})}}class $h{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ms.ce);const r=new Bh(e);return this.Vr.forEachTarget(t,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(fo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fo):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,l,h,f,d;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,l=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,h=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(d=Date.now(),me()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(d-f)+`ms
Total Duration: ${d-v}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function qh(n,t){return new $h(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.changes=new ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Qe(r.mutation,i,wt.empty(),H.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,ht()).next(()=>r))}getLocalViewOfDocuments(t,e,r=ht()){const i=ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=Dn();return o.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,ht()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,i){let o=Qn();const l=We(),h=function(){return We()}();return e.forEach((f,d)=>{const v=r.get(d.key);i.has(d.key)&&(v===void 0||v.mutation instanceof ue)?o=o.insert(d.key,d):v!==void 0?(l.set(d.key,v.mutation.getFieldMask()),Qe(v.mutation,d,v.mutation.getFieldMask(),H.now())):l.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,v)=>l.set(d,v)),e.forEach((d,v)=>h.set(d,new Hh(v,l.get(d)??null))),h))}recalculateAndSaveOverlays(t,e){const r=We();let i=new yt((l,h)=>l-h),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let v=r.get(f)||wt.empty();v=h.applyToLocalView(d,v),r.set(f,v);const w=(i.get(h.batchId)||ht()).add(f);i=i.insert(h.batchId,w)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),d=f.key,v=f.value,w=va();v.forEach(P=>{if(!o.has(P)){const C=Pa(e.get(P),r.get(P));C!==null&&w.set(P,C),o=o.add(P)}}),l.push(this.documentOverlayCache.saveOverlays(t,d,w))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return th(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):eh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ne());let h=en,f=o;return l.next(d=>R.forEach(d,(v,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(v)?R.resolve():this.remoteDocumentCache.getEntry(t,v).next(P=>{f=f.insert(v,P)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,ht())).next(v=>({batchId:h,changes:Ta(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Dn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const d=function(w,P){return new tr(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(v=>{v.forEach((w,P)=>{l=l.insert(w,P)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((f,d)=>{const v=d.getKey();l.get(v)===null&&(l=l.insert(v,vt.newInvalidDocument(v)))});let h=Dn();return l.forEach((f,d)=>{const v=o.get(f);v!==void 0&&Qe(v.mutation,d,wt.empty(),H.now()),Is(e,d)&&(h=h.insert(f,d))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return R.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:_e(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:Mh(i.bundledQuery),readTime:_e(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.overlays=new yt(k.comparator),this.Lr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),o=e.length+1,l=new k(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt((d,v)=>d-v);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let v=o.get(d.largestBatchId);v===null&&(v=ne(),o=o.insert(d.largestBatchId,v)),v.set(d.getKey(),d)}}const h=ne(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,v)=>h.set(d,v)),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Th(e,r));let o=this.Lr.get(e);o===void 0&&(o=ht(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.kr=new ot(et.Kr),this.qr=new ot(et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new et(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new et(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new k(new W([])),r=new et(e,t),i=new et(e,t+1),o=[];return this.qr.forEachInRange([r,i],l=>{this.Wr(l),o.push(l.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new k(new W([])),r=new et(e,t),i=new et(e,t+1);let o=ht();return this.qr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new et(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return k.comparator(t.key,e.key)||B(t.Jr,e.Jr)}static Ur(t,e){return B(t.Jr,e.Jr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new ot(et.Kr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Eh(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Hr=this.Hr.add(new et(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ps:this.Yn-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new et(e,0),i=new et(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],l=>{const h=this.Zr(l.Jr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach(i=>{const o=new et(i,0),l=new et(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,l],h=>{r=r.add(h.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const l=new et(new k(o),0);let h=new ot(B);return this.Hr.forEachWhile(f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(h=h.add(f.Jr)),!0)},l),R.resolve(this.Yr(h))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){X(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(e.mutations,i=>{const o=new et(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new et(e,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.ti=t,this.docs=function(){return new yt(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Qn();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Qn();const l=e.path,h=new k(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:d,value:{document:v}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||bu(Pu(v),r)<=0||(i.has(v.key)||Is(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}ni(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Yh(this)}getSize(t){return R.resolve(this.size)}}class Yh extends zh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.persistence=t,this.ri=new ce(e=>Ts(e),vs),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.ii=0,this.si=new Rs,this.targetCount=0,this.oi=Gt._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),R.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Gt(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.lr(e),R.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.ri.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e){this._i={},this.overlays={},this.ai=new ms(0),this.ui=!1,this.ui=!0,this.ci=new Qh,this.referenceDelegate=t(this),this.li=new Zh(this),this.indexManager=new Lh,this.remoteDocumentCache=function(i){return new Jh(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xh(e),this.Pi=new Kh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Xh(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new tf(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ii(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class tf extends Vu{constructor(t){super(),this.currentSequenceNumber=t}}class Ss{constructor(t){this.persistence=t,this.Ri=new Rs,this.Ai=null}static Vi(t){return new Ss(t)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=k.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,z.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.fi=new ce(r=>Ou(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qh(this,e)}static Vi(t,e){return new Jn(t,e)}Ti(){}Ii(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return R.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,l=>this.wr(t,l,e).next(h=>{h||(r++,o.removeEntry(l,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=xn(t.data.value)),e}wr(t,e,r){return R.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=i}static Es(t,e){let r=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ps(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Kl()?8:Du(Hl())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new ef;return this.ys(t,e,l).next(h=>{if(o.result=h,this.As)return this.ws(t,e,l,h.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(me()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(me()<=U.DEBUG&&V("QueryEngine","Query:",qe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(me()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):R.resolve())}gs(t,e){if(oo(e))return R.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Zr(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=ht(...o);return this.fs.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(f=>{const d=this.Ss(e,h);return this.bs(e,d,l,f.readTime)?this.gs(t,Zr(e,null,"F")):this.Ds(t,d,e,f)}))})))}ps(t,e,r,i){return oo(e)||i.isEqual(z.min())?R.resolve(null):this.fs.getDocuments(t,r).next(o=>{const l=this.Ss(e,o);return this.bs(e,l,r,i)?R.resolve(null):(me()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qe(e)),this.Ds(t,l,e,Su(i,en)).next(h=>h))})}Ss(t,e){let r=new ot(rh(t));return e.forEach((i,o)=>{Is(t,o)&&(r=r.add(o))}),r}bs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return me()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",qe(e)),this.fs.getDocumentsMatchingQuery(t,e,zt.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="LocalStore";class sf{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new yt(B),this.Fs=new ce(o=>Ts(o),vs),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function of(n,t,e,r){return new sf(n,t,e,r)}async function xa(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let f=ht();for(const d of i){l.push(d.batchId);for(const v of d.mutations)f=f.add(v.key)}for(const d of o){h.push(d.batchId);for(const v of d.mutations)f=f.add(v.key)}return e.localDocuments.getDocuments(r,f).next(d=>({Ns:d,removedBatchIds:l,addedBatchIds:h}))})})}function af(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(h,f,d,v){const w=d.batch,P=w.keys();let C=R.resolve();return P.forEach(N=>{C=C.next(()=>v.getEntry(f,N)).next(L=>{const O=d.docVersions.get(N);X(O!==null,48541),L.version.compareTo(O)<0&&(w.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),v.addEntry(L)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=ht();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(f=f.add(h.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function lf(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function cf(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ps),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class go{constructor(){this.activeTargetIds=ch()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uf{constructor(){this.vo=new go,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new go,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="ConnectivityMonitor";class yo{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(_o,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){V(_o,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function rs(){return Nn===null?Nn=function(){return 268435456+Math.round(2147483648*Math.random())}():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RestConnection",ff={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class df{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const l=rs(),h=this.Qo(t,e.toUriEncodedString());V(Lr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,i,o);const{host:d}=new URL(h),v=Uo(d);return this.zo(t,h,f,r,v).then(w=>(V(Lr,`Received RPC '${t}' ${l}: `,w),w),w=>{throw tn(Lr,`RPC '${t}' ${l} failed with error: `,w,"url: ",h,"request:",r),w})}jo(t,e,r,i,o,l){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=ff[t];let i=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection",ze=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ye extends df{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ye.c_){const t=Qo();ze(t,Wo.STAT_EVENT,e=>{e.stat===Kr.PROXY?V(ct,"STAT_EVENT: detected buffering proxy"):e.stat===Kr.NOPROXY&&V(ct,"STAT_EVENT: detected no buffering proxy")}),ye.c_=!0}}zo(t,e,r,i,o){const l=rs();return new Promise((h,f)=>{const d=new Go;d.setWithCredentials(!0),d.listenOnce(Ko.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case kn.NO_ERROR:const w=d.getResponseJson();V(ct,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(w)),h(w);break;case kn.TIMEOUT:V(ct,`RPC '${t}' ${l} timed out`),f(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const P=d.getStatus();if(V(ct,`RPC '${t}' ${l} failed with status:`,P,"response text:",d.getResponseText()),P>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const L=function(G){const K=G.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(N.status);f(new D(L,N.message))}else f(new D(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new D(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(ct,`RPC '${t}' ${l} completed.`)}});const v=JSON.stringify(i);V(ct,`RPC '${t}' ${l} sending request:`,i),d.send(e,"POST",v,r,15)})}T_(t,e,r){const i=rs(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const d=o.join("");V(ct,`Creating RPC '${t}' stream ${i}: ${d}`,h);const v=l.createWebChannel(d,h);this.I_(v);let w=!1,P=!1;const C=new mf({Jo:N=>{P?V(ct,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(w||(V(ct,`Opening RPC '${t}' stream ${i} transport.`),v.open(),w=!0),V(ct,`RPC '${t}' stream ${i} sending:`,N),v.send(N))},Ho:()=>v.close()});return ze(v,He.EventType.OPEN,()=>{P||(V(ct,`RPC '${t}' stream ${i} transport opened.`),C.i_())}),ze(v,He.EventType.CLOSE,()=>{P||(P=!0,V(ct,`RPC '${t}' stream ${i} transport closed`),C.o_(),this.E_(v))}),ze(v,He.EventType.ERROR,N=>{P||(P=!0,tn(ct,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),C.o_(new D(S.UNAVAILABLE,"The operation could not be completed")))}),ze(v,He.EventType.MESSAGE,N=>{var L;if(!P){const O=N.data[0];X(!!O,16349);const G=O,K=(G==null?void 0:G.error)||((L=G[0])==null?void 0:L.error);if(K){V(ct,`RPC '${t}' stream ${i} received error:`,K);const at=K.status;let Rt=function(y){const m=J[y];if(m!==void 0)return Ih(m)}(at),pt=K.message;at==="NOT_FOUND"&&pt.includes("database")&&pt.includes("does not exist")&&pt.includes(this.databaseId.database)&&tn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Rt===void 0&&(Rt=S.INTERNAL,pt="Unknown error status: "+at+" with message "+K.message),P=!0,C.o_(new D(Rt,pt)),v.close()}else V(ct,`RPC '${t}' stream ${i} received:`,O),C.__(O)}}),ye.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Xo()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n){return new ye(n)}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){return new Ah(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.c_=!1;class Ma{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="PersistentStream";class gf{constructor(t,e,r,i,o,l,h,f){this.Ci=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ma(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(oe(e.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return V(Eo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(V(Eo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _f extends gf{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Dh(t.writeResults,t.commitTime),r=_e(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=bh(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Vh(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{}class Ef extends yf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,es(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.jo(t,es(e,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(S.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Tf(n,t,e,r){return new Ef(n,t,e,r)}class vf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(oe(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class If{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Gt(1e3),this.Va=new Gt(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo(l=>{r.enqueueAndForget(async()=>{fn(this)&&(V(un,"Restarting streams for network reachability change."),await async function(f){const d=$(f);d.da.add(4),await hn(d),d.ga.set("Unknown"),d.da.delete(4),await sr(d)}(this))})}),this.ga=new vf(r,i)}}async function sr(n){if(fn(n))for(const t of n.ma)await t(!0)}async function hn(n){for(const t of n.ma)await t(!1)}function fn(n){return $(n).da.size===0}async function La(n,t,e){if(!ln(t))throw t;n.da.add(1),await hn(n),n.ga.set("Offline"),e||(e=()=>lf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(un,"Retrying IndexedDB access"),await e(),n.da.delete(1),await sr(n)})}function Fa(n,t){return t().catch(e=>La(n,e,t))}async function ir(n){const t=$(n),e=Kt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ps;for(;Af(t);)try{const i=await cf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,wf(t,i)}catch(i){await La(t,i)}Ua(t)&&Ba(t)}function Af(n){return fn(n)&&n.Ta.length<10}function wf(n,t){n.Ta.push(t);const e=Kt(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Ua(n){return fn(n)&&!Kt(n).x_()&&n.Ta.length>0}function Ba(n){Kt(n).start()}async function Rf(n){Kt(n).ra()}async function Sf(n){const t=Kt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Pf(n,t,e){const r=n.Ta.shift(),i=ws.from(r,t,e);await Fa(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function bf(n,t){t&&Kt(n).Y_&&await async function(r,i){if(function(l){return vh(l)&&l!==S.ABORTED}(i.code)){const o=r.Ta.shift();Kt(r).B_(),await Fa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ir(r)}}(n,t),Ua(n)&&Ba(n)}async function To(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(un,"RemoteStore received new credentials");const r=fn(e);e.da.add(3),await hn(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await sr(e)}async function Cf(n,t){const e=$(n);t?(e.da.delete(2),await sr(e)):t||(e.da.add(2),await hn(e),e.ga.set("Unknown"))}function Kt(n){return n.wa||(n.wa=function(e,r,i){const o=$(e);return o.sa(),new _f(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Rf.bind(null,n),t_:bf.bind(null,n),ta:Sf.bind(null,n),na:Pf.bind(null,n)}),n.ma.push(async t=>{t?(n.wa.B_(),await ir(n)):(await n.wa.stop(),n.Ta.length>0&&(V(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new bs(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ja(n,t){if(oe("AsyncQueue",`${t}: ${n}`),ln(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Vf{constructor(){this.queries=vo(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=vo(),o.forEach((l,h)=>{for(const f of h.va)f.onError(r)})})(this,new D(S.ABORTED,"Firestore shutting down"))}}function vo(){return new ce(n=>ya(n),_a)}function Df(n){n.xa.forEach(t=>{t.next()})}var Io,Ao;(Ao=Io||(Io={})).Ba="default",Ao.Cache="cache";const Nf="SyncEngine";class Of{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ru={},this.Au=new ce(h=>ya(h),_a),this.Vu=new Map,this.du=new Set,this.mu=new yt(k.comparator),this.fu=new Map,this.gu=new Rs,this.pu={},this.yu=new Map,this.wu=Gt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function kf(n,t,e){const r=Ff(n);try{const i=await function(l,h){const f=$(l),d=H.now(),v=h.reduce((C,N)=>C.add(N.key),ht());let w,P;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Qn(),L=ht();return f.xs.getEntries(C,v).next(O=>{N=O,N.forEach((G,K)=>{K.isValidDocument()||(L=L.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,N)).next(O=>{w=O;const G=[];for(const K of h){const at=_h(K,w.get(K.key).overlayedDocument);at!=null&&G.push(new ue(K.key,at,ua(at.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,d,G,h)}).next(O=>{P=O;const G=O.applyToLocalDocumentSet(w,L);return f.documentOverlayCache.saveOverlays(C,O.batchId,G)})}).then(()=>({batchId:P.batchId,changes:Ta(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let d=l.pu[l.currentUser.toKey()];d||(d=new yt(B)),d=d.insert(h,f),l.pu[l.currentUser.toKey()]=d}(r,i.batchId,e),await or(r,i.changes),await ir(r.remoteStore)}catch(i){const o=ja(i,"Failed to persist write");e.reject(o)}}function wo(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Au.forEach((o,l)=>{const h=l.view.Oa(t);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=$(l);f.onlineState=h;let d=!1;f.queries.forEach((v,w)=>{for(const P of w.va)P.Oa(h)&&(d=!0)}),d&&Df(f)}(r.eventManager,t),i.length&&r.Ru.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xf(n,t){const e=$(n),r=t.batch.batchId;try{const i=await af(e.localStore,t);qa(e,r,null),$a(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,i)}catch(i){await ds(i)}}async function Mf(n,t,e){const r=$(n);try{const i=await function(l,h){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let v;return f.mutationQueue.lookupMutationBatch(d,h).next(w=>(X(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(d,w))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,v,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,v)).next(()=>f.localDocuments.getDocuments(d,v))})}(r.localStore,t);qa(r,t,e),$a(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,i)}catch(i){await ds(i)}}function $a(n,t){(n.yu.get(t)||[]).forEach(e=>{e.resolve()}),n.yu.delete(t)}function qa(n,t,e){const r=$(n);let i=r.pu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.pu[r.currentUser.toKey()]=i}}async function or(n,t,e){const r=$(n),i=[],o=[],l=[];r.Au.isEmpty()||(r.Au.forEach((h,f)=>{l.push(r.bu(f,t,e).then(d=>{var v;if((d||e)&&r.isPrimaryClient){const w=d?!d.fromCache:(v=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(d){i.push(d);const w=Ps.Es(f.targetId,d);o.push(w)}}))}),await Promise.all(l),r.Ru.H_(i),await async function(f,d){const v=$(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(d,P=>R.forEach(P.Ts,C=>v.persistence.referenceDelegate.addReference(w,P.targetId,C)).next(()=>R.forEach(P.Is,C=>v.persistence.referenceDelegate.removeReference(w,P.targetId,C)))))}catch(w){if(!ln(w))throw w;V(rf,"Failed to update sequence numbers: "+w)}for(const w of d){const P=w.targetId;if(!w.fromCache){const C=v.vs.get(P),N=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(N);v.vs=v.vs.insert(P,L)}}}(r.localStore,o))}async function Lf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(Nf,"User change. New user:",t.toKey());const r=await xa(e.localStore,t);e.currentUser=t,function(o,l){o.yu.forEach(h=>{h.forEach(f=>{f.reject(new D(S.CANCELLED,l))})}),o.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ns)}}function Ff(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return of(this.persistence,new nf,t.initialUser,this.serializer)}xu(t){return new ka(Ss.Vi,this.serializer)}Mu(t){return new uf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Uf extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){X(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jh(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new ka(r=>Jn.Vi(r,e),this.serializer)}}class ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lf.bind(null,this.syncEngine),await Cf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Vf}()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=pf(t.databaseInfo);return Tf(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,h){return new If(r,i,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>wo(this.syncEngine,e,0),function(){return yo.v()?new yo:new hf}())}createSyncEngine(t,e){return function(i,o,l,h,f,d,v){const w=new Of(i,o,l,h,f,d);return v&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=$(i);V(un,"RemoteStore shutting down."),o.da.add(5),await hn(o),o.fa.shutdown(),o.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ss.provider={build:()=>new ss};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirestoreClient";class Bf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=hs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{V(Wt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(V(Wt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ja(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),V(Wt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xa(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ro(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jf(n);V(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>To(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>To(t.remoteStore,i)),n._onlineComponents=t}async function jf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Wt,"Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new Yn)}}else V(Wt,"Using default OfflineComponentProvider"),await Ur(n,new Uf(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Wt,"Using user provided OnlineComponentProvider"),await Ro(n,n._uninitializedComponentsProvider._online)):(V(Wt,"Using default OnlineComponentProvider"),await Ro(n,new ss))),n._onlineComponents}function qf(n){return $f(n).then(t=>t.syncEngine)}function zf(n,t){const e=new re;return n.asyncQueue.enqueueAndForget(async()=>kf(await qf(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="ComponentProvider",So=new Map;function Gf(n,t,e,r,i){return new Lu(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,za(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="firestore.googleapis.com",Po=!0;class bo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ha,this.ssl=Po}else this.host=t.host,this.ssl=t.ssl??Po;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Oa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Uh)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ru("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=za(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ar{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pu;switch(r.type){case"firstParty":return new Eu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=So.get(e);r&&(V(Hf,"Removing Datastore"),So.delete(e),r.terminate())}(this),Promise.resolve()}}function Kf(n,t,e,r={}){var d;n=ea(n,ar);const i=Uo(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&Zl(`https://${h}`),o.host!==Ha&&o.host!==h&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Bn(f,l)&&(n._setSettings(f),r.mockUserToken)){let v,w;if(typeof r.mockUserToken=="string")v=r.mockUserToken,w=ut.MOCK_USER;else{v=zl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ut(P)}n._authCredentials=new gu(new Yo(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,ft._jsonSchema))return new ft(t,r||null,new k(W.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Y("string",ft._jsonSchemaVersion),referencePath:Y("string")};class qt extends Cs{constructor(t,e,r){super(t,e,Zu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new k(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function Wf(n,t,...e){if(n=Je(n),Zo("collection","path",t),n instanceof ar){const r=W.fromString(t,...e);return Qi(r),new qt(n,null,r)}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Qi(r),new qt(n.firestore,null,r)}}function Qf(n,t,...e){if(n=Je(n),arguments.length===1&&(t=hs.newId()),Zo("doc","path",t),n instanceof ar){const r=W.fromString(t,...e);return Wi(r),new ft(n,null,new k(r))}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Wi(r),new ft(n.firestore,n instanceof qt?n.converter:null,new k(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="AsyncQueue";class Vo{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Ma(this,"async_queue_retry"),this.lc=()=>{const r=Fr();r&&V(Co,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Fr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new re;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!ln(t))throw t;V(Co,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,oe("INTERNAL UNHANDLED ERROR: ",Do(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const i=bs.createAndSchedule(this,t,e,r,o=>this.Ec(o));return this.oc.push(i),i}Pc(){this._c&&M(47125,{Rc:Do(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Do(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ga extends ar{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Vo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vo(t),this._firestoreClient=void 0,await t}}}function Xf(n,t){const e=typeof n=="object"?n:eu(),r=typeof n=="string"?n:Hn,i=Xc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=$l("firestore");o&&Kf(i,...o)}return i}function Jf(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yf(n),n._firestoreClient}function Yf(n){var r,i,o,l;const t=n._freezeSettings(),e=Gf(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((l=t.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Bf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(f){const d=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(Vt.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Y("string",At._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(an(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:Y("string",Ot._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,Ct._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ct(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:Y("string",Ct._jsonSchemaVersion),vectorValues:Y("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^__.*__$/;class td{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new cn(t,this.data,e,this.fieldTransforms)}}function Wa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class Ds{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Ds({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Zn(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(Wa(this.dataSource)&&Zf.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class ed{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}V(t,e,r,i=!1){return new Ds({dataSource:t,methodName:e,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nd(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new ed(n._databaseId,!!t.ignoreUndefinedProperties,e)}function rd(n,t,e,r,i,o={}){const l=n.V(o.merge||o.mergeFields?2:0,t,e,i);Ya("Data must be an object, but it was:",l,r);const h=Xa(r,l);let f,d;if(o.merge)f=new wt(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const w of o.mergeFields){const P=Os(t,w,e);if(!l.contains(P))throw new D(S.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);od(v,P)||v.push(P)}f=new wt(v),d=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,d=l.fieldTransforms;return new td(new It(h),f,d)}class Ns extends Vs{_toFieldTransform(t){return new dh(t.path,new rn)}isEqual(t){return t instanceof Ns}}function Qa(n,t){if(Ja(n=Je(n)))return Ya("Unsupported field value:",t,n),Xa(n,t);if(n instanceof Vs)return function(r,i){if(!Wa(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let f=Qa(h,i.bc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=H.fromDate(r);return{timestampValue:ts(i.serializer,o)}}if(r instanceof H){const o=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ts(i.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:wh(i.serializer,r._byteString)};if(r instanceof ft){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Dc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Va(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ct)return function(l,h){const f=l instanceof Ct?l.toArray():l;return{mapValue:{fields:{[la]:{stringValue:ca},[Qr]:{arrayValue:{values:f.map(v=>{if(typeof v!="number")throw h.Dc("VectorValues must only contain numeric values.");return As(h.serializer,v)})}}}}}}(r,i);if(Na(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${fs(r)}`)}(n,t)}function Xa(n,t){const e={};return ra(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,(r,i)=>{const o=Qa(i,t.yc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ja(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof Ot||n instanceof At||n instanceof ft||n instanceof Vs||n instanceof Ct||Na(n))}function Ya(n,t,e){if(!Ja(e)||!ta(e)){const r=fs(e);throw r==="an object"?t.Dc(n+" a custom object"):t.Dc(n+" "+r)}}function Os(n,t,e){if((t=Je(t))instanceof Ka)return t._internalPath;if(typeof t=="string")return id(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const sd=new RegExp("[~\\*/\\[\\]]");function id(n,t,e){if(t.search(sd)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ka(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(S.INVALID_ARGUMENT,h+n+f)}function od(n,t){return n.some(e=>e.isEqual(t))}function ad(){return new Ns("serverTimestamp")}const No="@firebase/firestore",Oo="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ld(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Os("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ld extends Za{data(){return super.data()}}function cd(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ee extends Za{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Os("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ee._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ee._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ee._jsonSchema={type:Y("string",Ee._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class Fn extends Ee{data(t={}){return super.data(t)}}class Xe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Fn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,v=-1;return h.type!==0&&(d=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),v=l.indexOf(h.doc.key)),{type:ud(h.type),doc:f,oldIndex:d,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=hs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ud(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe._jsonSchemaVersion="firestore/querySnapshot/1.0",Xe._jsonSchema={type:Y("string",Xe._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};function hd(n,t){const e=ea(n.firestore,Ga),r=Qf(n),i=cd(n.converter,t),o=nd(n.firestore);return fd(e,[rd(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function fd(n,t){const e=Jf(n);return zf(e,t)}(function(t,e=!0){mu(tu),$n(new Ye("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Ga(new _u(r.getProvider("auth-internal")),new Tu(l,r.getProvider("app-check-internal")),Fu(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),ge(No,Oo,t),ge(No,Oo,"esm2020")})();let is=!0,os=null,ko=null;const dd=typeof window<"u"&&window.__FIREBASE_DEFAULTS__&&window.__FIREBASE_DEFAULTS__.config?window.__FIREBASE_DEFAULTS__.config:null,Br=dd;if(!Br||!Br.apiKey)is=!1,console.warn("Firebase client config missing; contact form will be disabled in this environment.");else try{ko=qo(Br),os=Xf(ko),console.info("Firebase initialized for contact form (apiKey present).")}catch(n){is=!1,console.error("Error initializing Firebase:",n)}async function md(n,t="en"){if(!is||!os)return console.warn("submitToFirebase called but Firebase is not configured."),{success:!1,error:"Firebase not configured"};try{const e=await hd(Wf(os,"contacts"),{name:n.name,email:n.email,phone:n.phone||"",company:n.company||"",service:n.service||"",message:n.message,locale:t,createdAt:ad(),read:!1});return console.log("Contact form submitted successfully. ID:",e.id),{success:!0,id:e.id}}catch(e){return console.error("Error submitting contact form:",e),{success:!1,error:e.message}}}function pd(n,t="en"){const e={};return(!n.name||n.name.trim()==="")&&(e.name=t==="ar"?"الرجاء إدخال الاسم الكامل":"Please enter your full name"),!n.email||n.email.trim()===""?e.email=t==="ar"?"الرجاء إدخال البريد الإلكتروني":"Please enter your email address":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email.trim())||(e.email=t==="ar"?"الرجاء إدخال بريد إلكتروني صحيح":"Please enter a valid email address"),(!n.message||n.message.trim()==="")&&(e.message=t==="ar"?"الرجاء إدخال رسالتك":"Please enter your message"),Object.keys(e).length>0?e:null}function jr(n,t,e="en"){const r=document.getElementById(n);if(!r)return;const i=r.parentElement.querySelector(".field-error");i&&i.remove(),r.classList.add("error"),r.style.borderColor="#dc3545";const o=document.createElement("span");o.className="field-error",o.style.cssText="color: #dc3545; font-size: 0.8125rem; margin-top: 0.25rem; display: block;",o.textContent=t,r.parentElement.appendChild(o)}function gd(n){const t=document.getElementById(n);t&&(t.querySelectorAll(".field-error").forEach(e=>e.remove()),t.querySelectorAll("input, textarea, select").forEach(e=>{e.classList.remove("error"),e.style.borderColor=""}))}function yd(n,t,e={},r="en"){const i=document.getElementById(n),o=document.getElementById(t);if(!i){console.warn(`Form with ID "${n}" not found.`);return}const l={sending:r==="ar"?"جاري إرسال الرسالة...":"Sending your message...",success:r==="ar"?"تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.":"Your message has been sent successfully! We will get back to you soon.",error:r==="ar"?"عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.":"Sorry, an error occurred while sending your message. Please try again.",...e};i.addEventListener("submit",async h=>{var P,C,N,L,O,G;h.preventDefault(),gd(n);const f={name:((P=i.querySelector("#name"))==null?void 0:P.value)||"",email:((C=i.querySelector("#email"))==null?void 0:C.value)||"",phone:((N=i.querySelector("#phone"))==null?void 0:N.value)||"",company:((L=i.querySelector("#company"))==null?void 0:L.value)||"",service:((O=i.querySelector("#service"))==null?void 0:O.value)||"",message:((G=i.querySelector("#message"))==null?void 0:G.value)||""},d=pd(f,r);if(d){if(d.name&&jr("name",d.name,r),d.email&&jr("email",d.email,r),d.message&&jr("message",d.message,r),o){const K=r==="ar"?"الرجاء تصحيح الأخطاء أدناه قبل الإرسال.":"Please correct the errors below before submitting.";o.textContent=K,o.className="form-message form-message-error",o.style.display="block"}return}const v=i.querySelector(".submit-btn");v&&(v.disabled=!0,v.textContent=l.sending),o&&(o.textContent=l.sending,o.className="form-message form-message-info",o.style.display="block"),(await md(f,r)).success?(o&&(o.textContent=l.success,o.className="form-message form-message-success"),i.reset()):o&&(o.textContent=l.error,o.className="form-message form-message-error"),v&&(v.disabled=!1,v.textContent=r==="ar"?"إرسال الرسالة":"Send Message")})}export{yd as i};
