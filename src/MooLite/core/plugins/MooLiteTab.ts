import { Component } from "vue";

export interface MooLiteTab {
    icon: string;

    // Must match the name of the plugin this tab belongs to
    pluginName: string;

    // The name under which the component will be registered
    componentName: string;

    // Must be wrapped with markRaw()
    component: Component;
}
