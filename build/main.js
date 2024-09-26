function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component") name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean) return "";
  const assignment = `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
const css = {
  code: "nav.svelte-16aqibt.svelte-16aqibt{background-color:blue}nav.svelte-16aqibt ul.svelte-16aqibt{list-style-type:none;padding:0}nav.svelte-16aqibt ul li.svelte-16aqibt{display:inline;margin-right:10px}nav.svelte-16aqibt ul li a.svelte-16aqibt{text-decoration:none;color:#000;font-weight:bold}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\r\\n    export let htmlFiles = [];\\r\\n<\/script>\\r\\n\\r\\n<nav>\\r\\n    <ul>\\r\\n        {#each htmlFiles as file}\\r\\n            <li>\\r\\n                <a href={`/${file}`}>{file.split(\'.\')[0]}</a>\\r\\n            </li>\\r\\n        {/each}\\r\\n    </ul>\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n    nav {\\r\\n        background-color: blue;\\r\\n    }\\r\\n    nav ul {\\r\\n        list-style-type: none;\\r\\n        padding: 0;\\r\\n    }\\r\\n    nav ul li {\\r\\n        display: inline;\\r\\n        margin-right: 10px;\\r\\n    }\\r\\n\\r\\n    nav ul li a {\\r\\n        text-decoration: none;\\r\\n        color: #000;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAeI,iCAAI,CACA,gBAAgB,CAAE,IACtB,CACA,kBAAG,CAAC,iBAAG,CACH,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CACb,CACA,kBAAG,CAAC,EAAE,CAAC,iBAAG,CACN,OAAO,CAAE,MAAM,CACf,YAAY,CAAE,IAClB,CAEA,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAE,CACR,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IACjB"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { htmlFiles = [] } = $$props;
  if ($$props.htmlFiles === void 0 && $$bindings.htmlFiles && htmlFiles !== void 0) $$bindings.htmlFiles(htmlFiles);
  $$result.css.add(css);
  return `<nav class="svelte-16aqibt"><ul class="svelte-16aqibt">${each(htmlFiles, (file) => {
    return `<li class="svelte-16aqibt"><a${add_attribute("href", `/${file}`, 0)} class="svelte-16aqibt">${escape(file.split(".")[0])}</a> </li>`;
  })}</ul> </nav>`;
});
const Phrase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>This is a Brave and Grumpy Component</p> <p>I wrote this  in the file  Phrase.svelte</p>`;
});
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { htmlFiles = [] } = $$props;
  let name = "";
  let message = `The text in this section is written using Svelte.`;
  if ($$props.htmlFiles === void 0 && $$bindings.htmlFiles && htmlFiles !== void 0) $$bindings.htmlFiles(htmlFiles);
  return `<header><h2>Hello to ${escape(name)} from  Vite  and Svelte</h2> ${validate_component(Navbar, "Navbar").$$render($$result, { htmlFiles }, {}, {})}</header> <main><p>${validate_component(Phrase, "Phrase").$$render($$result, {}, {}, {})}</p> <input type="text" plaeholder="john"${add_attribute("value", name, 0)}> <p>${escape(message)}</p> <p>We are existing in <em>App.svelte</em></p></main>`;
});
async function fetchHtmlFiles() {
  await fetch("/api/files");
  return await response.json();
}
let app;
function initializeApp() {
  fetchHtmlFiles().then((htmlFiles) => {
    app = new App({
      target: document.getElementById("svelte-app"),
      props: {
        htmlFiles
      }
    });
  });
  return app;
}
app = initializeApp();
const app$1 = app;
export {
  app$1 as default
};
