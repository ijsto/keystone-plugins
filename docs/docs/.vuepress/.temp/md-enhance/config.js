import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Mermaid from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    const VuePlayground = defineAsyncComponent(() => import("/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js"));
    app.component("VuePlayground", VuePlayground);
    
  }
});